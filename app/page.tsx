import FeaturedProducts from '@/components/FeaturedProducts';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2000')] bg-cover bg-center" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-4 italic uppercase tracking-tighter">
            Custom Jerseys <br /><span className="text-primary">Designed for Performance</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Premium-quality custom sportswear for teams, communities, schools, esports, and organizations. Based in Cibinong, Bogor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-red-700 text-white px-10 py-4 font-bold uppercase transition">Shop Now</button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 font-bold uppercase transition">Contact Us</button>
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <WhyChooseUs />
      
      {/* Newsletter Section */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">JOIN THE CHAMPIONS</h2>
          <p className="mb-8 opacity-90">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 text-black focus:outline-none" />
            <button className="bg-secondary px-8 py-3 font-bold uppercase hover:bg-black transition">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}