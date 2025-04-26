interface ProductCardProps {
    title: string;
    price: string;
    imageUrl: string;
  }
  
  export function ProductCard({ title, price, imageUrl }: ProductCardProps) {
    return (
      <div className="rounded-lg border p-4 shadow-md hover:shadow-lg transition">
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{price}</p>
        <button className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    );
  }
  