import { StarRating } from "./StarRating";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { div } from "framer-motion/client";
interface ProductCardProps {
  title: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  return (
    <ScrollFadeIn >
    <div className="rounded-2xl border border-gray-200 p-2 shadow-md hover:shadow-xl transition duration-300 ease-in-out bg-white max-w-sm">
      
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{title}</h2>
        <StarRating rating={4.5} />
        <p className="text-lg text-blue-900 font-semibold">{price}</p>
        <button className="mt-3 w-full rounded-full bg-gradient-to-r from-blue-900 to-indigo-600 px-5 py-2 text-white font-medium hover:opacity-90 transition">
          Add to Cart
        </button>
      </div>
    </div>
      </ScrollFadeIn>
  );
}
