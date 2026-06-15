"use client";
import { ShieldCheck, Zap, Scissors, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Premium Quality",
    desc: "We use only high-grade materials and the latest sublimation technology for vibrant, long-lasting colors."
  },
  {
    icon: <Scissors className="w-10 h-10 text-primary" />,
    title: "Custom Tailored",
    desc: "Every jersey is crafted to your specific design, team logos, and measurements for a perfect fit."
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Fast Production",
    desc: "Streamlined manufacturing process in Cibinong ensuring your orders are ready for the big game."
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Community First",
    desc: "Proudly supporting Indonesian sports communities, schools, and professional organizations."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">
            Why Choose <span className="text-primary">ZHORA APPAREL?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Setting the gold standard in custom sportswear through innovation and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 border border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full ring-1 ring-white/10 group-hover:ring-primary/50">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold uppercase mb-3 tracking-tighter">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}