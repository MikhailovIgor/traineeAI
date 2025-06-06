import React from "react";
import PricingCard from "./PricingCard";

const plans = [
  {
    plan: "Standard",
    price: "$100",
    features: [
      "50,000 Requests",
      "4 contributors",
      "Up to 3 GB storage space",
    ],
  },
  {
    plan: "Pro",
    price: "$200",
    features: [
      "100,000 Requests",
      "7 contributors",
      "Up to 6 GB storage space",
    ],
    isFeatured: true,
  },
  {
    plan: "Expert",
    price: "$500",
    features: [
      "200,000 Requests",
      "11 contributors",
      "Up to 10 GB storage space",
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, index) => (
            <PricingCard
              key={index}
              plan={p.plan}
              price={p.price}
              features={p.features}
              isFeatured={p.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;