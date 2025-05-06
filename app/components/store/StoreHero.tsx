"use client"
export function StoreHero() {
    return (
      
        <div className="w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/store_images/homepage.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-slate-100 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-2xl font-light">
            Discover fashion with style and elegance.
          </p>
          <button className="mt-6 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-600 px-6 py-2 text-white text-md font-lightbold hover:bg-gray-100">
          Shop Now
        </button>
        </div>
        
      </div>
    </div>
    );
  }
  