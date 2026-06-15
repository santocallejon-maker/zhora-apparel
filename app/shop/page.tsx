const CATEGORIES = ["All", "Football", "Basketball", "Cycling", "Esports", "Running"];

const PRODUCTS = [
  { id: 1, name: "Vortex Pro Football Jersey", price: 185000, category: "Football", image: "https://images.unsplash.com/photo-1551854838-212c20b7c8a1?q=80&w=600" },
  { id: 2, name: "Elite Hoops Basketball Kit", price: 210000, category: "Basketball", image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=600" },
  // ... more products
];

export default function Shop() {
  return (
    <div className="pt-32 px-4 max-w-7xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-5xl font-black italic uppercase">Catalog</h1>
          <p className="text-gray-500">Premium sports apparel for every athlete.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
          {CATEGORIES.map(cat => (
            <button key={cat} className="px-6 py-2 border border-black hover:bg-black hover:text-white transition whitespace-nowrap uppercase text-xs font-bold tracking-widest">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map(product => (
          <div key={product.id} className="group cursor-pointer">
            <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
              <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition duration-500" />
              <button className="absolute bottom-0 w-full bg-primary text-white py-3 translate-y-full group-hover:translate-y-0 transition font-bold uppercase text-sm">Quick Add</button>
            </div>
            <h3 className="font-bold text-lg uppercase leading-tight">{product.name}</h3>
            <p className="text-gray-500 text-sm mb-1">{product.category}</p>
            <p className="font-black text-primary">Rp {product.price.toLocaleString('id-ID')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}