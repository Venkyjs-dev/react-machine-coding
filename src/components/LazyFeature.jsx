import React, { lazy, Suspense, useState, useEffect } from "react";

const LazyFeature = ({ id }) => {
  const [Component, setComponent] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadFeature = async () => {
      try {
        const module = await import(`../features/${id}/${capitalize(id)}Demo`);
        setComponent(() => module.default);
      } catch (error) {
        console.error(`Failed to load feature: ${id}`, error);
        setHasError(true);
      }
    };

    loadFeature();
  }, [id]);

  if (hasError) {
    return (
      <div className="text-red-500">
        ⚠️ Feature found but component is missing or failed to load.
      </div>
    );
  }

  if (!Component) {
    return <div>Loading feature...</div>;
  }

  return <Component />;
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default LazyFeature;
