// pages/products/[id].js
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import AddToCart from '../../components/AddToCart';
import Carousel from '../../components/Carousel';
import ImageViewer from "../../components/ImageViewer";

const Product = ({ product }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsViewerOpen(false);
    setCurrentImage(0);
  }, []);

  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="row">
        <div style={{ cursor: "pointer" }} className="col text-center">
          <Carousel images={product.images} open={openImageViewer} />
        </div>
        <div className="col">
          <h1>{product.name}</h1>
          <h2>฿{product.price}</h2> {/* Updated to use ฿ symbol */}
          <hr />
          <p>
          At KMITL Union Shop, we take pride in offering a wide range of clothing and products that are customized for the KMITL family and guests. Our goal is to provide high-quality items that reflect the spirit of our community and enhance your experience.
          </p>
          <p>
          Thank you for being a part of our KMITL family, and we look forward to serving you!
          </p>
          <AddToCart id={product.id} image={product.images[0].image} price={product.price} name={product.name} size={40}>
            <div type="button" className="btn btn-primary btn-lg btn-block">Add To Cart!</div>
          </AddToCart>
        </div>
      </div>
      <br />
      {isViewerOpen && (
        <ImageViewer
          src={product.images.map(image => image.image)}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
        />
      )}
    </>
  );
};

export const getStaticProps = async (context) => {
  try {
    const apiUrl = process.env.API_ENDPOINT || "http://localhost:8000/"; 
    const res = await fetch(`${apiUrl}product-detail/${context.params.id}`);
    
    // If the response is not OK, throw an error
    if (!res.ok) {
      throw new Error(`Failed to fetch product details, received status ${res.status}`);
    }
    
    const product = await res.json();
    
    return {
      props: { product },
    };
  } catch (error) {
    console.error("Failed to fetch product details:", error);

    // Return fallback content if the API request fails
    return {
      props: { product: null },
      notFound: true, // Optional: This will show the 404 page if product data is not available
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const apiUrl = process.env.API_ENDPOINT || "http://localhost:8000/"; 
    const res = await fetch(`${apiUrl}product-list`);
    
    // If the response is not OK, throw an error
    if (!res.ok) {
      throw new Error(`Failed to fetch product list, received status ${res.status}`);
    }
    
    const products = await res.json();
    const ids = products.map((product) => product.id.toString());
    const paths = ids.map((id) => ({ params: { id } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Failed to fetch product list:", error);

    // Return empty paths if the API request fails
    return {
      paths: [],
      fallback: false,
    };
  }
};

export default Product;

Product.propTypes = {
  product: PropTypes.any.isRequired,
};

