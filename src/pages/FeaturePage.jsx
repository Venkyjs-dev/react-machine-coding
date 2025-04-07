import React from "react";
import { useParams } from "react-router-dom";
import { featureList } from "../data/featureList";
import LazyFeature from "../components/LazyFeature";

function FeaturePage() {
  const { id } = useParams();
  const feature = featureList.find((f) => f.id === id);

  if (!feature) {
    return (
      <div className="p-4 text-red-500 font-semibold text-xl">
        ❌ Feature not found.
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
      <LazyFeature id={id} />
    </div>
  );
}

export default FeaturePage;
