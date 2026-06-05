import { ShoppingCart } from "lucide-react";

function ProductCard({ product, onAddToCart, formatCurrency }) {
  return (
    <article className="product-card group overflow-hidden rounded-[1.9rem] border border-white/70 bg-white/85 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(74,44,23,0.12)]">
      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-green)]">
              {product.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[rgba(74,44,23,0.74)]">
              {product.description}
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-[rgba(200,138,42,0.12)] px-3 py-1 text-xs font-semibold text-[var(--color-gold)]">
            Fresh
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-2xl font-semibold text-[var(--color-brown)]">
            {formatCurrency(product.price)}
          </p>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-green)] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-[rgba(15,77,28,0.2)] transition hover:-translate-y-0.5"
          >
            <ShoppingCart className="h-4 w-4" />
            Add To Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
