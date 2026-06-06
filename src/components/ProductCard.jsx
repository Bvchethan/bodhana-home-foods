import { useState } from "react";
import { ShoppingCart } from "lucide-react";

function ProductCard({ product, onAddToCart, formatCurrency }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <article className="product-card group overflow-hidden rounded-[1.9rem] border border-[rgba(95,75,58,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,241,231,0.9))] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(95,75,58,0.14)]">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.04] sm:h-64"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(37,29,23,0.2))]" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--color-green)]">
          {product.name}
        </h3>

        <p className="mt-3 min-h-14 text-sm leading-7 text-[rgba(95,75,58,0.74)]">
          {product.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-2xl font-semibold text-[var(--color-brown)]">
            {formatCurrency(product.price)}
          </p>

          <button
            type="button"
            onClick={handleAdd}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[rgba(47,93,80,0.18)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <ShoppingCart className="h-4 w-4" />
            {added ? "Added ✓" : "Add To Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
