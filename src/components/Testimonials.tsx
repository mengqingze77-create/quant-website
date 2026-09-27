"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "Individual Investor",
    quote:
      "QIG 的量化模型帮助我在美股市场中获得了超出预期的回报。他们对个股的深入分析，比如 HUT 和 IONQ，让我在投资决策中受益匪浅。",
  },
  {
    name: "Emily Johnson",
    role: "High-Net-Worth Investor",
    quote:
      "QIG 团队的专业数据分析能力和精准的市场洞察力让我在复杂的市场环境中找到了清晰的投资方向。他们的服务非常值得信赖，我强烈推荐！",
  },
  {
    name: "Michael Brown",
    role: "Institutional Investor",
    quote:
      "QIG 提供的定制化投资策略完美契合了我们的风险偏好和长期投资目标。他们的专业服务让我对量化投资有了全新的理解和信心。",
  },
  {
    name: "Sophia Davis",
    role: "Senior Investor",
    quote:
      "QIG 团队的专业性和经验真的与众不同。他们从 Citadel 和摩根士丹利带来的多因子模型和风险管理策略非常出色，帮助我实现了稳定的资产增长。",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = testimonials[active];

  const previous = () => {
    setActive(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        text-white
        py-20
        md:py-24
      "
    >
      {/* 顶部微光 */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-48
          bg-gradient-to-b
          from-blue-950/30
          to-transparent
          pointer-events-none
        "
      />

      {/* 背景光晕 */}
      <div
        className="
          absolute
          -top-32
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          rounded-full
          bg-yellow-400/5
          blur-[100px]
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          max-w-[2400px]
          mx-auto
          px-6
          md:px-10
        "
      >
        {/* =========================
            Header
        ========================= */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              text-yellow-500
              tracking-[6px]
              text-[10px]
              md:text-xs
              font-medium
            "
          >
            CLIENT TESTIMONIALS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              mt-3
            "
          >
            投资者的真实反馈
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              text-gray-500
              text-sm
              md:text-base
              mt-4
              max-w-2xl
              mx-auto
            "
          >
            了解客户如何评价 QIG 的研究能力、投资策略与专业服务。
          </motion.p>
        </div>

        {/* =========================
            Main Content
        ========================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.8fr_1.8fr]
            gap-5
            lg:gap-6
          "
        >
          {/* =========================
              左侧客户列表
          ========================= */}
          <div
            className="
              hidden
              lg:flex
              flex-col
              gap-3
            "
          >
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className={`
                  group
                  text-left
                  rounded-xl
                  border
                  p-5
                  transition-all
                  duration-300
                  ${
                    index === active
                      ? `
                        border-yellow-400/50
                        bg-[#0a1627]
                        shadow-[0_0_30px_rgba(250,204,21,0.08)]
                      `
                      : `
                        border-white/10
                        bg-[#07111f]/70
                        hover:border-white/20
                      `
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`
                        text-sm
                        font-semibold
                        transition-colors
                        ${
                          index === active
                            ? "text-yellow-400"
                            : "text-white"
                        }
                      `}
                    >
                      {item.name}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {item.role}
                    </p>
                  </div>

                  <div
                    className={`
                      w-2
                      h-2
                      rounded-full
                      transition-all
                      ${
                        index === active
                          ? "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                          : "bg-gray-700"
                      }
                    `}
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className={
                        index === active
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-700 text-gray-700"
                      }
                    />
                  ))}
                </div>
              </button>
            ))}
          </div>

          {/* =========================
              右侧主评价卡片
          ========================= */}
          <div className="relative">
            <div
              className="
                relative
                min-h-[380px]
                md:min-h-[430px]
                rounded-2xl
                border
                border-white/10
                bg-[#07111f]/90
                backdrop-blur
                overflow-hidden
                p-7
                md:p-10
                lg:p-12
              "
            >
              {/* 顶部金色线 */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  right-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-yellow-400/70
                  to-transparent
                "
              />

              {/* Quote Icon */}
              <div
                className="
                  absolute
                  top-7
                  right-7
                  md:top-10
                  md:right-10
                  w-14
                  h-14
                  md:w-16
                  md:h-16
                  rounded-full
                  bg-yellow-400/5
                  border
                  border-yellow-400/10
                  flex
                  items-center
                  justify-center
                "
              >
                <Quote
                  size={26}
                  className="text-yellow-400/60"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="
                    relative
                    z-10
                    flex
                    flex-col
                    h-full
                  "
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="
                          fill-yellow-400
                          text-yellow-400
                        "
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote
                    className="
                      text-xl
                      md:text-2xl
                      lg:text-[27px]
                      leading-relaxed
                      font-medium
                      text-gray-100
                      max-w-4xl
                    "
                  >
                    “{current.quote}”
                  </blockquote>

                  {/* Bottom */}
                  <div
                    className="
                      mt-auto
                      pt-10
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-end
                      sm:justify-between
                      gap-6
                    "
                  >
                    <div>
                      <p className="text-base font-semibold">
                        {current.name}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        {current.role}
                      </p>
                    </div>

                    {/* Counter */}
                    <div className="text-right">
                      <p className="text-[10px] tracking-[3px] text-gray-600">
                        CLIENT FEEDBACK
                      </p>

                      <p className="text-sm text-gray-400 mt-1">
                        <span className="text-yellow-400 font-semibold">
                          {String(active + 1).padStart(2, "0")}
                        </span>
                        <span className="mx-2 text-gray-700">
                          /
                        </span>
                        {String(testimonials.length).padStart(
                          2,
                          "0"
                        )}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* 左右按钮 */}
              <div
                className="
                  absolute
                  bottom-7
                  right-7
                  md:bottom-10
                  md:right-10
                  flex
                  gap-2
                "
              >
                <button
                  onClick={previous}
                  aria-label="Previous testimonial"
                  className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-yellow-400
                    hover:border-yellow-400/40
                    transition-all
                  "
                >
                  <ChevronLeft size={17} />
                </button>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-yellow-400
                    hover:border-yellow-400/40
                    transition-all
                  "
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            Mobile 客户切换
        ========================= */}
        <div className="flex lg:hidden justify-center gap-2 mt-7">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-[3px]
                rounded-full
                transition-all
                duration-300
                ${
                  index === active
                    ? "w-8 bg-yellow-400"
                    : "w-3 bg-gray-700"
                }
              `}
            />
          ))}
        </div>

        {/* Desktop dots */}
        <div className="hidden lg:flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                h-[2px]
                rounded-full
                transition-all
                duration-300
                ${
                  index === active
                    ? "w-8 bg-yellow-400"
                    : "w-3 bg-gray-700"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}