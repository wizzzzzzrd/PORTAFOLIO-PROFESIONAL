import { motion } from "motion/react";
import type { TestimonialCardProps } from "../types";

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
    return (
        <motion.div 
            style={{ backgroundColor: testimonial.color }}
            className="flex flex-col items-center justify-center mx-4 w-40 h-40 shrink-0 rounded-3xl shadow-xl relative"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 10) * 0.05, type: "spring", stiffness: 260, damping: 20 }}
        >
            <div className={`relative ${testimonial.showName ? 'mb-2' : ''}`}>
                <img 
                    className="h-20 w-20 object-contain drop-shadow-sm" 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    loading="lazy"
                />
            </div>

            {testimonial.showName && (
                <span className="absolute bottom-3 text-[10px] font-bold uppercase tracking-widest text-white/80">
                    {testimonial.name}
                </span>
            )}
        </motion.div>
    );
}