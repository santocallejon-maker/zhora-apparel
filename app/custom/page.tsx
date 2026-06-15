"use client";

export default function CustomOrder() {
  return (
    <div className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-primary">
          <h1 className="text-4xl font-black uppercase mb-2">Custom Jersey Service</h1>
          <p className="text-gray-600 mb-8">Tell us about your team and design preferences. Our designers will reach out to you.</p>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="font-bold mb-2 uppercase text-sm">Team/Organization Name</label>
              <input type="text" className="border p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="e.g. Bogor Tigers FC" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold mb-2 uppercase text-sm">Jersey Category</label>
              <select className="border p-3 outline-none">
                <option>Football / Futsal</option>
                <option>Basketball</option>
                <option>Esports</option>
                <option>Cycling</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="font-bold mb-2 uppercase text-sm">Estimated Quantity</label>
              <input type="number" className="border p-3 outline-none" placeholder="Min. 12 pcs" />
            </div>
            <div className="flex flex-col">
              <label className="font-bold mb-2 uppercase text-sm">Upload Sketch/Logo</label>
              <input type="file" className="border p-2 outline-none" />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <label className="font-bold mb-2 uppercase text-sm">Special Requirements</label>
              <textarea className="border p-3 h-32 outline-none" placeholder="Describe your design, colors, and material preferences..."></textarea>
            </div>
            <button className="md:col-span-2 bg-primary text-white py-4 font-bold uppercase hover:bg-red-700 transition">
              Submit Design to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}