import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { useStoreState, useStoreActions } from "easy-peasy"; // Include useStoreActions to clear the cart
import AddToCart from "../components/AddToCart";

const Cart = () => {
  const cart = useStoreState(state => state.cart.items);
  const clearCart = useStoreActions(actions => actions.cart.clearCart); // Access clearCart action to clear cart after checkout
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

  // Function to handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add products to proceed to checkout.");
    } else {
      // Simulate the checkout process
      setIsCheckoutComplete(true); // Set checkout as complete
      clearCart(); // Clear the cart after checkout is complete
    }
  };

  return (
    <>
      <h1>Cart</h1>
      <hr />
      <div className="row">
        <div className="col col-12 col-md-6">
          <div className="card bg-light mb-3">
            <div className="card-header">Items</div>
            <div className="card-body">
              {cart.length === 0 ? (
                isCheckoutComplete ? (
                  <>
                    <h3>Thank you for your purchase!</h3>
                    <p>Your order has been successfully placed.</p>
                    <p>
                      <Link href="/products">Browse more products</Link>
                    </p>
                  </>
                ) : (
                  <>
                    <p>Your Cart is Empty </p>
                    <p>
                      <Link href="/products">Browse our products here :)</Link>
                    </p>
                  </>
                )
              ) : (
                cart.map((product, idx) => (
                  <div key={idx}>
                    <div className="row">
                      <div className="col-md-auto">
                        <Image
                          alt="product"
                          height={80}
                          width={60}
                          src={product.image}
                        />
                      </div>
                      <div className="col mt-auto mb-auto">
                        <h4>
                          {product.name}
                          <br /> <span>฿{product.price}</span>
                        </h4>
                        <div className="d-inline">
                          <AddToCart
                            name={product.name}
                            id={product.id}
                            price={product.price}
                            image={product.image}
                            useSpinner={false}
                            action={"remove"}
                          >
                            <div className="btn btn-secondary btn-sm">-</div>
                          </AddToCart>
                          <AddToCart
                            name={product.name}
                            id={product.id}
                            price={product.price}
                            image={product.image}
                            useSpinner={false}
                          >
                            <div className="btn btn-primary btn-sm">+</div>
                          </AddToCart>
                          <span className="ml-2">x{product.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-6">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Checkout</div>
            <div className="card-body">
              <h4 className="card-title">
                Your Total is ฿
                {cart
                  .map(item => item.price * item.quantity)
                  .reduce((a, b) => a + b, 0)
                  .toFixed(2)}
              </h4>
              <p className="card-text">How would you like to pay?</p>
              {/* Add a "Checkout" button */}
              <button 
                className="btn btn-light" 
                onClick={handleCheckout}
                disabled={cart.length === 0}  // Disable button if cart is empty
              >
                Confirm and Checkout
              </button>
              {isCheckoutComplete && (
                <div className="alert alert-success mt-3">
                  Order confirmed! Thank you for your purchase.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

