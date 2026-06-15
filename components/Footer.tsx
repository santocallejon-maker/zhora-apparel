import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-black text-primary mb-4">ZHORA APPAREL</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium custom jerseys for teams, communities, and champions. 
            Based in Cibinong, Bogor Regency, West Java.
          </p>
        </div>
        <div>
          <h4 className="font-bold uppercase mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/shop" className="hover:text-primary transition">Shop All</Link></li>
            <li><Link href="/custom" className="hover:text-primary transition">Custom Orders</Link></li>
            <li><Link href="/about" className="hover:text-primary transition">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase mb-6">Categories</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Football & Futsal</li>
            <li>Basketball</li>
            <li>Esports</li>
            <li>Cycling</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li>Cibinong, Bogor Regency, West Java</li>
            <li>WA: +62 857-7258-0768</li>
            <li>Email: info@zhoraapparel.com (coming soon)</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/10 text-center text-xs text-gray-500 uppercase tracking-widest">
        © {new Date().getFullYear()} ZHORA APPAREL. All Rights Reserved.
      </div>
    </footer>
  );
}