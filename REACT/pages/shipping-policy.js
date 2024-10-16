// pages/shipping-policy.js

import React from "react";

const ShippingPolicy = () => {
  return (
    <div style={styles.container}>
      <image
        src="https://i.shgcdn.com/62293309-f365-40d7-96b9-aa026ee8de0c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        alt="Shipping Policy"
        style={styles.image}
      />
      <h1 style={styles.title}>Shipping Policy</h1>
      <p style={styles.description}>
        This is the shipping policy of KMITL Union Shop. All items are shipped
        within 3-5 business days.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  image: {
    width: "300px", // Normal size for the image
    height: "auto",
    marginBottom: "20px", // Space between the image and the text
  },
  title: {
    fontSize: "2em",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2em",
  },
};

export default ShippingPolicy;
