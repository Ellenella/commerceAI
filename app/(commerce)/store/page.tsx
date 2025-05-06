"use client";
import { StoreHero } from '@/app/components/store/StoreHero';
import { ProductCard } from '@/app/components/store/ProductCard';
import { TrendingCard } from '@/app/components/store/TrendingCard';

import { motion, useInView } from "motion/react";
import { useRef } from 'react';

export default function StorePage() {
  const ref = useRef(null);
  return (
    <main className="">
      
      <StoreHero />
      <div className='space-y-10'>
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {/* Example list of products */}
        <ProductCard title="Sneakers" price="$99" imageUrl="/store_images/shoes.jpg" />
        <ProductCard title="Backpack" price="$79" imageUrl="/store_images/bagpack.jpg" />
        <ProductCard title="Headphones" price="$120" imageUrl="/store_images/headphone.jpg" />
        <ProductCard title="Jacket" price="$150" imageUrl="/store_images/jacket.jpg" />
      </section>
      
      <motion.div
      className=""
      variants={{hidden: { opacity: 0, y:20 }, show: { opacity: 1, y:0, transition: { duration: 0.5, staggerChildren:0.6 } }}}
      initial="hidden"
      animate="show"
    >
      <h1 className='text-blue-900 italic text-center font-bold md:text-4xl'>Trending Products</h1>
      </motion.div>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {/* Example list of trending products */}
        <TrendingCard title="Smartwatch" price="$199" imageUrl="/store_images/shoes.jpg" />
        <TrendingCard title="Camera" price="$499" imageUrl="/store_images/bagpack.jpg" />
        <TrendingCard title="Laptop" price="$999" imageUrl="/store_images/headphone.jpg" />
        <TrendingCard title="Tablet" price="$299" imageUrl="/store_images/jacket.jpg" />
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {/* Example list of products */}
        <ProductCard title="Sneakers" price="$99" imageUrl="/store_images/shoes.jpg" />
        <ProductCard title="Backpack" price="$79" imageUrl="/store_images/bagpack.jpg" />
        <ProductCard title="Headphones" price="$120" imageUrl="/store_images/headphone.jpg" />
        <ProductCard title="Jacket" price="$150" imageUrl="/store_images/jacket.jpg" />
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
        {/* Example list of products */}
        <ProductCard title="Sneakers" price="$99" imageUrl="/store_images/shoes.jpg" />
        <ProductCard title="Backpack" price="$79" imageUrl="/store_images/bagpack.jpg" />
        <ProductCard title="Headphones" price="$120" imageUrl="/store_images/headphone.jpg" />
        <ProductCard title="Jacket" price="$150" imageUrl="/store_images/jacket.jpg" />
      </section>
      </div>
    </main>
  );
}
