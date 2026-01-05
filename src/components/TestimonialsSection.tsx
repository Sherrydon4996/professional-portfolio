import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { testimonials } from "./../lib/testimonials";

export default function TestimonialsSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-padding relative overflow-hidden"
    >
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-cyan-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)"
            >
              <polygon
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
                points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"
              />
              <polygon
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
                points="24.8,-6.5 37.3,0.7 37.3,15.2 24.8,22.4 12.3,15.2 12.3,0.7"
              />
              <polygon
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
                points="49.5,7.7 62,14.9 62,29.4 49.5,36.6 37,29.4 37,14.9"
              />
              <polygon
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary/30"
                points="0,7.7 12.5,14.9 12.5,29.4 0,36.6 -12.5,29.4 -12.5,14.9"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black mb-4 sm:mb-6 animated-gradient-text">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Don't just take my word for it. Here's what clients have to say
            about working with me.
          </p>
        </motion.div>

        {/* Creative Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="py-8">
                {({ isActive }) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative transition-all duration-500 ${
                      isActive ? "scale-100 z-10" : "scale-90 opacity-80"
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`relative rounded-2xl sm:rounded-3xl overflow-hidden ${
                        isActive
                          ? "bg-gradient-to-br from-slate-800 via-slate-900 to-primary/30 text-white shadow-2xl"
                          : "bg-white dark:bg-slate-800 shadow-lg"
                      }`}
                    >
                      {/* Content */}
                      <div className="p-5 sm:p-8 pt-6 sm:pt-10">
                        {/* Name & Role - Top */}
                        <div className="mb-4">
                          <h4
                            className={`text-lg sm:text-xl font-bold ${
                              isActive ? "text-primary" : "text-primary"
                            }`}
                          >
                            {testimonial.name}
                          </h4>
                          <p
                            className={`text-xs sm:text-sm ${
                              isActive
                                ? "text-slate-400"
                                : "text-muted-foreground"
                            }`}
                          >
                            {testimonial.role}
                          </p>
                          <span
                            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                              isActive
                                ? "bg-primary/20 text-primary"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {testimonial.project}
                          </span>
                        </div>

                        {/* Testimonial Text */}
                        <p
                          className={`text-sm sm:text-base leading-relaxed mb-6 ${
                            isActive
                              ? "text-slate-300"
                              : "text-muted-foreground"
                          }`}
                        >
                          "{testimonial.text}"
                        </p>

                        {/* Avatar - Bottom with ring */}
                        <div className="flex items-center justify-between">
                          <div className="relative">
                            <div
                              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 ${
                                isActive
                                  ? "bg-gradient-to-br from-primary via-cyan-400 to-primary"
                                  : "bg-gradient-to-br from-primary/50 to-accent/50"
                              }`}
                            >
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-900"
                              />
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={`fill-yellow-400 text-yellow-400 ${
                                  isActive ? "sm:w-4 sm:h-4" : "sm:w-3 sm:h-3"
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Progress Bar for Active */}
                        {isActive && (
                          <div className="mt-6">
                            <div className="flex items-center justify-between text-xs mb-2">
                              <span className="text-slate-400">
                                Satisfaction
                              </span>
                              <span className="text-primary font-bold">
                                100%
                              </span>
                            </div>
                            <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              className="swiper-button-prev-custom w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              className="swiper-button-next-custom w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-all shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
