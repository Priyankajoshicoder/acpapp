import PropTypes from 'prop-types';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';  
import Image from "next/image";  
import Product from "../../components/Product";
import styles from "../../styles/product.module.css"; 

const Products = ({ products: initialProducts }) => {
    const [products, setProducts] = useState(initialProducts);
    const [priceSortOption, setPriceSortOption] = useState(''); 
    const [nameSortOption, setNameSortOption] = useState(''); 
    const [viewMode, setViewMode] = useState('column'); 
    const [filteredProducts, setFilteredProducts] = useState(initialProducts); 
    const router = useRouter();
    const searchQuery = router.query.search || ''; 

    useEffect(() => {
        let sortedProducts = [...products];

        // Use native sorting functions for price sorting
        if (priceSortOption === 'price_asc') {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
        } else if (priceSortOption === 'price_desc') {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
        }

        setProducts(sortedProducts);
    }, [priceSortOption]); 

    useEffect(() => {
        let filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Use native sorting functions for name sorting
        if (nameSortOption === 'name_asc') {
            filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (nameSortOption === 'name_desc') {
            filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
        }

        setFilteredProducts(filtered);
    }, [searchQuery, nameSortOption, products]);

    return (
        <>
            <section className="product-banner">
                <div className="banner-content text-center">
                    <h1>Enjoy Shopping with KMITL</h1>
                </div>
                <div className="banner-image">
                    <Image 
                        src="https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/262340321_4752913551436559_2000414915732344749_n.jpg?stp=dst-jpg_tt7&_nc_cat=109&cb=99be929b-defccdb7&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bQcd6grukdUQ7kNvgEqwIxU&_nc_ht=scontent.fbkk6-2.fna&_nc_gid=AsM6HfOOrm1bq7CY3cznM8_&oh=00_AYCYc0n6oBCyevpM0t9ywGjYZcyqHqSsuP1RLN49jPVWiA&oe=670D23EA"
                        alt="Shopping Banner" 
                        layout="responsive" 
                        width={1200}
                        height={400}
                    />
                </div>
            </section>

            <h1>Products</h1>
            <hr />
            <p>Browse our Products!</p> 

            <div style={{ marginBottom: '20px' }}>
                <label htmlFor="sortPrice" style={{ marginLeft: '20px' }}>Sort By Price: </label>
                <select
                    id="sortPrice"
                    value={priceSortOption}
                    onChange={(e) => setPriceSortOption(e.target.value)}
                    style={{ marginRight: '10px' }}
                >
                    <option value="">None</option>
                    <option value="price_asc">Price: Low to High</option>
                    <option value="price_desc">Price: High to Low</option>
                </select>

                <label htmlFor="sortName" style={{ marginLeft: '20px' }}>Sort By Name: </label>
                <select
                    id="sortName"
                    value={nameSortOption}
                    onChange={(e) => setNameSortOption(e.target.value)}
                    style={{ marginRight: '10px' }}
                >
                    <option value="">None</option>
                    <option value="name_asc">Name: A-Z</option>
                    <option value="name_desc">Name: Z-A</option>
                </select>

                <div style={{ marginTop: '10px' }}>
                    <button 
                        className={`btn ${viewMode === 'column' ? 'btn-primary' : 'btn-outline-primary'} me-2`} 
                        onClick={() => setViewMode('column')}
                    >
                        Column View
                    </button>
                    <button 
                        className={`btn ${viewMode === 'row' ? 'btn-primary' : 'btn-outline-primary'}`} 
                        onClick={() => setViewMode('row')}
                    >
                        Row View
                    </button>
                </div>
            </div>

            <div className={`row ${viewMode === 'row' ? styles.rowView : styles.columnView}`}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div 
                            key={product.id} 
                            className={viewMode === 'row' ? 'col-12 d-flex mb-3 align-items-center' : 'col-12 col-md-3 mb-4'}
                        >
                            <Product
                                name={product.name}
                                id={product.id}
                                price={`฿${product.price}`}  // Ensure baht sign is correctly used
                                image={product.images.length > 0 ? product.images[0].image : ""}
                                viewMode={viewMode} 
                            />
                        </div>
                    ))
                ) : (
                    <p>No products found matching your search criteria.</p>
                )}
            </div>
        </>
    );
};

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            images: PropTypes.array.isRequired,
        })
    ).isRequired,
};

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.API_ENDPOINT}product-list`);
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
};

export default Products;


