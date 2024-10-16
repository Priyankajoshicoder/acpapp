// pages/return-policy.js

import React from "react";

const ReturnPolicy = () => {
  return (
    <div style={styles.container}>
      <h1>Return Policy</h1>
      <p>
        This is the return policy of KMITL Union Shop. You may return items within 30 days of delivery for a full refund.
        The items must be in their original condition and packaging.
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
};

export default ReturnPolicy;
