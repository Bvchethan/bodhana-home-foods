import { useState } from "react";

function ProductCard({ product, onAddToCart, formatCurrency }) {
  const variants = product.variants || [
    { weight: "250g", price: Math.round(product.price * 0.5) },
    { weight: "500g", price: product.price },
    { weight: "1kg", price: product.price * 2 },
  ];

  const [selectedVariant, setSelectedVariant] = useState(
    variants.find((v) => v.weight === "500g") || variants[0]
  );
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedVariant.weight, selectedVariant.price);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <article className="product-card rounded-none border-2 border-black bg-white transition duration-200 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="relative overflow-hidden border-b-2 border-black">
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-60 rounded-none"
        />
      </div>

      <div className="p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-black uppercase tracking-tight text-black">
            {product.name}
          </h3>

          <p className="mt-2 text-xs leading-relaxed text-neutral-600 min-h-[2.5rem]">
            {product.description}
          </p>

          {/* Weight Selector */}
          <div className="mt-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-black">
              Weight
            </span>
            <div className="mt-1 flex gap-1">
              {variants.map((v) => (
                <button
                  key={v.weight}
                  type="button"
                  onClick={() => setSelectedVariant(v)}
                  className={`flex-1 rounded-none border border-black py-1 text-xs font-bold transition-colors cursor-pointer ${
                    selectedVariant.weight === v.weight
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-neutral-100"
                  }`}
                >
                  {v.weight}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-neutral-200">
          <p className="text-xl font-black text-black">
            {formatCurrency(selectedVariant.price)}
          </p>

          <button
            type="button"
            onClick={handleAdd}
            className="rounded-none bg-black px-4 py-2.5 text-xs font-black uppercase tracking-wider text-white transition hover:bg-neutral-800 active:bg-black cursor-pointer border border-black"
          >
            {added ? "ADDED ✓" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
