import React, { useState, useEffect } from "react";

const Contact = ({ errorElement }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Simulate an error for demonstration purposes
    if (Math.random() < 0.5) {
      setHasError(true);
    }
  }, []);

  if (hasError) {
    // Render the specified error element if provided, otherwise use default error message
    return errorElement ? (
      <div>
        <h2>Contact Error</h2>
        {errorElement}
      </div>
    ) : (
      <div>
        <h2>Contact-ERRor</h2>
        <p>Something went wrong in the Contact component.</p>
      </div>
    );
  }

  // Render the normal content if no error
  return <div>Contact component content goes here</div>;
};

export default Contact;
