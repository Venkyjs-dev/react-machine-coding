import React from "react";
import FeatureCard from "../components/FeatureCard";
import { featureList } from "../data/featureList";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center"> Features Home</h1>
      <div className="flex flex-wrap gap-4">
        {featureList.map((feat) => (
          <div key={feat.id} className="w-full sm:w-[48%] md:w-[31%]">
            <FeatureCard
              id={feat.id}
              title={feat.title}
              description={feat.description}
              icon={feat.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
