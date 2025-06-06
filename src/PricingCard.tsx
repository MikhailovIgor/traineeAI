import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  const cardBg = isFeatured ? "bg-blue-900 text-white" : "bg-white text-gray-800";
  const buttonBg = isFeatured
    ? "bg-blue-900 text-white hover:bg-blue-800"
    : "bg-white text-gray-800 hover:bg-gray-100";
  const buttonRing = "focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50";
  const buttonFont = "font-bold";

  return (
    <div
      tabIndex={0}
      className={`flex flex-col items-center justify-between w-full max-w-xs h-[480px] p-8 border shadow-sm transition duration-300 sm:hover:shadow-lg ${cardBg} focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50`}
    >
      <div className="text-center w-full">
        <h3 className="text-xl font-semibold mb-2">{plan}</h3>
        <p className="text-4xl font-extrabold mb-6">{price}</p>
        <div className="mb-6">
          {features.map((feature, idx) => (
            <React.Fragment key={idx}>
              {idx !== 0 && <hr className={`${isFeatured ? 'border-white/30' : 'border-gray-300'} my-0`} />}
              <div className="text-sm font-normal py-3">{feature}</div>
            </React.Fragment>
          ))}
        </div>
        <hr className={`${isFeatured ? 'border-white/30' : 'border-gray-300'} my-0 mb-6`} />
      </div>
      <button
        className={`w-full py-3 mt-auto transition font-bold ${buttonBg} ${buttonRing}`}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard;