import PropTypes from 'prop-types';
import styles from "../styles/product.module.css";
import Link from "next/link";
import AddToCart from './AddToCart';
import Image from "next/image";

const Product = ({ name, id, price, image }) => {
  return (
    <Link href="/products/[id]" as={`/products/${id}`}>
      <div className={`col-12 col-md-3 ${styles.product}`}>
        <div style={{ cursor: "pointer" }}>
          <div className={styles.container}>
            <Image
              src={process.env.IMAGE_ENDPOINT + image}
              alt={name}
              className={styles.image}
              width={300} // Set appropriate width and height
              height={300} // Set appropriate width and height
            />
            <div className={styles.middle}>
              <AddToCart name={name} id={id} price={price} image={image} size={40}>
                <div className="btn btn-outline-primary btn-lg">
                  Add To Cart!
                </div>
              </AddToCart>
            </div>
          </div>
          <div>
            <h2>{name}</h2>
            {/* Display price directly without adding a baht sign */}
            <p>{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Allow price to be string or number
  image: PropTypes.string.isRequired,
};

export default Product;
