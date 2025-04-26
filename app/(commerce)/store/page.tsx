import { StoreHero } from '@/app/components/store/StoreHero';
import { ProductCard } from '@/app/components/store/ProductCard';

export default function StorePage() {
  return (
    <main className="space-y-8">
      <StoreHero />

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {/* Example list of products */}
        <ProductCard title="Sneakers" price="$99" imageUrl="/images/sneakers.jpg" />
        <ProductCard title="Backpack" price="$79" imageUrl="/images/backpack.jpg" />
        <ProductCard title="Headphones" price="$120" imageUrl="/images/headphones.jpg" />
        <ProductCard title="Jacket" price="$150" imageUrl="/images/jacket.jpg" />
      </section>
    </main>
  );
}
