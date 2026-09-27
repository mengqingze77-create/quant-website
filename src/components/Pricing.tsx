"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  "100 天免费试用",
  "完整投资研究与策略服务",
  "全球市场与资产分析",
  "量化模型与数据驱动决策",
  "风险管理与资产配置",
  "个性化投资策略",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        text-white
        py-20
        md:py-24
      "
    >
      {/* =========================
          Background
      ========================= */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_50%_20%,rgba(250,204,21,0.06),transparent_35%)]
        "
      />

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-40
          bg-gradient-to-b
          from-blue-950/25
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -right-40
          top-40
          w-[400px]
          h-[400px]
          rounded-full
          bg-blue-500/5
          blur-[120px]
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
            PRICING & PARTNERSHIP
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
            简单、透明的合作模式
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
              leading-relaxed
            "
          >
            先体验，再合作。试用期内无需支付费用，
            后续仅根据实际实现的净收益进行绩效分成。
          </motion.p>
        </div>

        {/* =========================
            Main Pricing Card
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            rounded-2xl
            border
            border-white/10
            bg-[#07111f]/90
            backdrop-blur
            overflow-hidden
          "
        >
          {/* Top gold line */}

          <div
            className="
              absolute
              top-0
              left-0
              right-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-yellow-400
              to-transparent
            "
          />

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.15fr_0.85fr]
            "
          >
            {/* =========================
                LEFT
            ========================= */}

            <div
              className="
                p-7
                md:p-10
                lg:p-14
                border-b
                lg:border-b-0
                lg:border-r
                border-white/10
              "
            >
              {/* Trial Label */}

              <div className="flex items-center gap-3">
                <div
                  className="
                    w-10
                    h-10
                    rounded-lg
                    bg-yellow-400/10
                    border
                    border-yellow-400/20
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Clock3
                    size={19}
                    className="text-yellow-400"
                  />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      tracking-[4px]
                      text-yellow-500
                    "
                  >
                    FREE TRIAL
                  </p>

                  <p className="text-sm text-gray-400 mt-1">
                    无风险体验期
                  </p>
                </div>
              </div>

              {/* 100 DAYS */}

              <div className="mt-8">
                <div className="flex items-baseline gap-3">
                  <span
                    className="
                      text-6xl
                      md:text-7xl
                      lg:text-8xl
                      font-bold
                      tracking-tight
                    "
                  >
                    100
                  </span>

                  <span
                    className="
                      text-xl
                      md:text-2xl
                      text-yellow-400
                      font-medium
                    "
                  >
                    DAYS
                  </span>
                </div>

                <p
                  className="
                    text-lg
                    md:text-xl
                    text-gray-300
                    mt-2
                  "
                >
                  100 天免费试用
                </p>
              </div>

              <div
                className="
                  h-px
                  bg-white/10
                  my-8
                "
              />

              {/* Benefits */}

              <div>
                <p
                  className="
                    text-xs
                    tracking-[3px]
                    text-gray-500
                    mb-5
                  "
                >
                  INCLUDED
                </p>

                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-x-8
                    gap-y-4
                  "
                >
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="
                          mt-0.5
                          w-5
                          h-5
                          rounded-full
                          bg-yellow-400/10
                          border
                          border-yellow-400/20
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <Check
                          size={11}
                          className="text-yellow-400"
                        />
                      </div>

                      <span
                        className="
                          text-sm
                          text-gray-300
                          leading-relaxed
                        "
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* =========================
                RIGHT
            ========================= */}

            <div
              className="
                relative
                p-7
                md:p-10
                lg:p-14
                flex
                flex-col
                justify-center
                bg-gradient-to-br
                from-yellow-400/[0.035]
                to-transparent
              "
            >
              {/* Performance badge */}

              <div className="flex items-center gap-2">
                <Sparkles
                  size={15}
                  className="text-yellow-400"
                />

                <p
                  className="
                    text-[10px]
                    tracking-[4px]
                    text-yellow-500
                  "
                >
                  PERFORMANCE BASED
                </p>
              </div>

              {/* 8% */}

              <div className="mt-7">
                <div className="flex items-baseline">
                  <span
                    className="
                      text-7xl
                      md:text-8xl
                      lg:text-[110px]
                      leading-none
                      font-bold
                      tracking-[-5px]
                      text-white
                    "
                  >
                    8
                  </span>

                  <span
                    className="
                      text-4xl
                      md:text-5xl
                      lg:text-6xl
                      font-semibold
                      text-yellow-400
                      ml-2
                    "
                  >
                    %
                  </span>
                </div>

                <p
                  className="
                    text-lg
                    md:text-xl
                    text-gray-300
                    mt-3
                  "
                >
                  净实现收益
                </p>
              </div>

              <p
                className="
                  text-sm
                  text-gray-500
                  leading-relaxed
                  max-w-md
                  mt-5
                "
              >
                试用期结束后，年度利润分成按照净实现收益的
                <span className="text-yellow-400 font-medium">
                  {" "}
                  8%
                </span>
                计算。
              </p>

              {/* No other fees */}

              <div
                className="
                  mt-8
                  rounded-xl
                  border
                  border-white/10
                  bg-black/10
                  p-4
                "
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    size={19}
                    className="text-yellow-400"
                  />

                  <div>
                    <p className="text-sm font-medium">
                      无其他费用
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      以实际实现的净收益为基础
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}

              <button
                className="
                  group
                  mt-8
                  w-full
                  rounded-lg
                  bg-yellow-400
                  text-[#020817]
                  font-semibold
                  py-3.5
                  px-5
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:bg-yellow-300
                  transition-all
                  duration-300
                  shadow-[0_0_30px_rgba(250,204,21,0.12)]
                  hover:shadow-[0_0_40px_rgba(250,204,21,0.22)]
                "
              >
                开始 100 天免费试用

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <p
                className="
                  text-center
                  text-[10px]
                  text-gray-600
                  mt-4
                "
              >
                了解更多合作细节，请联系我们
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================
            Bottom Note
        ========================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-8
            text-center
          "
        >
          <p
            className="
              text-[10px]
              md:text-xs
              text-gray-600
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            费用信息以实际合作协议为准。投资涉及市场风险，
            历史表现不代表未来收益。
          </p>
        </motion.div>
      </div>
    </section>
  );
}