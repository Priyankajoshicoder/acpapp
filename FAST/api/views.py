from django.shortcuts import render
from django.http import JsonResponse
from store.models import Product, Order, OrderItem
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import ProductSerializer, RegisterSerializer, OrderItemSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
import json

# Custom sorting functions

def quick_sort(arr):
    """Sort products by price in ascending order using Quick Sort."""
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]['price']
        less_than_pivot = []
        greater_than_pivot = []

        # Compare price values for sorting
        for item in arr[1:]:
            if item['price'] < pivot:
                less_than_pivot.append(item)
            else:
                greater_than_pivot.append(item)

        # Recursively sort the partitions and combine
        sorted_less = quick_sort(less_than_pivot)
        sorted_greater = quick_sort(greater_than_pivot)
        
        return sorted_less + [arr[0]] + sorted_greater

def quick_sort_high_low(arr):
    """Sort products by price in descending order using Quick Sort."""
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]['price']  # Select the first element as the pivot
        less_than_pivot = []
        greater_than_pivot = []

        # Partition the array based on pivot
        for item in arr[1:]:
            if item['price'] > pivot:  # Use '>' to sort in descending order
                greater_than_pivot.append(item)
            else:
                less_than_pivot.append(item)

        # Print debug information to understand partitioning
        print(f"Pivot: {pivot}, Less: {less_than_pivot}, Greater: {greater_than_pivot}")

        # Sort the partitions and combine
        sorted_greater = quick_sort_high_low(greater_than_pivot)  # Sort greater values first
        sorted_less = quick_sort_high_low(less_than_pivot)        # Then sort lesser values

        # Combine sorted partitions: greater + pivot + less
        result = sorted_greater + [arr[0]] + sorted_less

        # Print debug information for sorted result at this step
        print(f"Sorted Result (High to Low) Step: {result}")
        return result

# New sorting functions for product names

def manual_sort_by_name_asc(arr):
    """Sort products by name in ascending order (A-Z) using Merge Sort."""
    if len(arr) <= 1:
        return arr

    # Split the array into two halves
    mid = len(arr) // 2
    left_half = manual_sort_by_name_asc(arr[:mid])
    right_half = manual_sort_by_name_asc(arr[mid:])

    # Merge the sorted halves
    return merge_by_name(left_half, right_half)

def manual_sort_by_name_desc(arr):
    """Sort products by name in descending order (Z-A) using Merge Sort."""
    if len(arr) <= 1:
        return arr

    # Split the array into two halves
    mid = len(arr) // 2
    left_half = manual_sort_by_name_desc(arr[:mid])
    right_half = manual_sort_by_name_desc(arr[mid:])

    # Merge the sorted halves in descending order
    return merge_by_name(left_half, right_half, reverse=True)

def merge_by_name(left, right, reverse=False):
    """Merge two halves of an array based on the name field."""
    sorted_array = []
    while left and right:
        # Compare and merge based on the name field
        if (left[0]['name'].lower() < right[0]['name'].lower() and not reverse) or \
           (left[0]['name'].lower() > right[0]['name'].lower() and reverse):
            sorted_array.append(left.pop(0))
        else:
            sorted_array.append(right.pop(0))

    # Collect the remaining elements from both halves
    sorted_array.extend(left)
    sorted_array.extend(right)
    return sorted_array


@api_view(['GET'])
def apiOverview(request):
    """API Overview with list of available endpoints."""
    api_urls = {
        'ProductList': '/product-list/',
        'ProductDetail': '/product-detail/id',
        'login': '/login/',
        'register': '/register/'
    }
    return Response(api_urls)


@api_view(['GET'])
def productList(request):
    """API View to list all products with optional manual sorting."""
    # Get the sort query parameter
    sort = request.query_params.get('sort', None)
    print("Received sort parameter:", sort)  # Debug

    # Fetch all products from the database
    products = Product.objects.all()

    # Serialize the product data manually
    serializer = ProductSerializer(products, many=True)
    products_data = serializer.data  # Get a list of dictionaries representing the products

    # Convert all prices to float for accurate comparisons
    for product in products_data:
        try:
            product['price'] = float(product['price'])  # Convert price to float
        except (ValueError, TypeError):
            product['price'] = 0.0  # Handle non-numeric price values by setting them to 0.0

    # Print the initial products data for debugging
    print("Initial products data with converted prices:", products_data)

    # Manually sort the products using the custom quick sort functions
    if sort == 'price_asc':
        # Sort products by price ascending
        products_data = quick_sort(products_data)
    elif sort == 'price_desc':
        # Sort products by price descending
        products_data = quick_sort_high_low(products_data)
    elif sort == 'name_asc':
        # Sort products by name ascending (A-Z)
        products_data = manual_sort_by_name_asc(products_data)
    elif sort == 'name_desc':
        # Sort products by name descending (Z-A)
        products_data = manual_sort_by_name_desc(products_data)

    # Print the sorted products for debugging
    print("Sorted products manually:", products_data)

    # Return the manually sorted products data
    return Response(products_data)


@api_view(['GET'])
def productDetail(request, pk):
    """API View to get product details by ID."""
    products = Product.objects.get(id=pk)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def registrationView(request):
    """API View to handle user registration."""
    serializer = RegisterSerializer(data=request.data)
    data = {}
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.get(user=user).key
        data['response'] = "successfully registered new user"
        data['email'] = user.email
        data['username'] = user.username
        data['token'] = token
    else:
        data = serializer.errors
    return Response(data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateItem(request):
    """API View to update items in the cart."""
    print(request.data)
    action = request.data["action"]
    user = request.user
    product = Product.objects.get(id=request.data['productId'])
    order, created = Order.objects.get_or_create(user=user, complete=False)
    orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)
    if action == "add":
        orderItem.quantity = (orderItem.quantity + 1)
    elif action == "remove":
        orderItem.quantity = (orderItem.quantity - 1)
    orderItem.save()
    if orderItem.quantity <= 0:
        orderItem.delete()
    serializer = OrderItemSerializer(order.get_cart, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getCart(request):
    """API View to get the cart items for a logged-in user."""
    user = request.user
    order, created = Order.objects.get_or_create(user=user, complete=False)
    cartItems = order.get_cart
    serializer = OrderItemSerializer(cartItems, many=True)
    return Response(serializer.data)
