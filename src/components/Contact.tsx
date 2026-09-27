"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "contact@qig-investors.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+1-XXX-XXX-XXXX",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Wall Street, New York City",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
          bg-[radial-gradient(circle_at_20%_50%,rgba(250,204,21,0.05),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.06),transparent_35%)]
        "
      />

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-32
          bg-gradient-to-b
          from-blue-950/20
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          -left-40
          bottom-0
          w-[400px]
          h-[400px]
          rounded-full
          bg-yellow-400/5
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =========================
          Container
      ========================= */}

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
            CONTACT QIG
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
            开启你的投资之旅
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
            与 QIG 团队取得联系，了解我们的量化策略、
            投资研究与个性化解决方案。
          </motion.p>
        </div>

        {/* =========================
            Main Grid
        ========================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]
            gap-6
            lg:gap-8
          "
        >
          {/* =========================
              LEFT SIDE
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              p-7
              md:p-10
              lg:p-12
            "
          >
            {/* Gold line */}

            <div
              className="
                absolute
                top-0
                left-0
                w-32
                h-px
                bg-gradient-to-r
                from-yellow-400
                to-transparent
              "
            />

            <p
              className="
                text-[10px]
                tracking-[4px]
                text-yellow-500
              "
            >
              LET'S CONNECT
            </p>

            <h3
              className="
                text-2xl
                md:text-3xl
                font-bold
                mt-3
              "
            >
              与我们取得联系
            </h3>

            <p
              className="
                text-sm
                text-gray-500
                leading-relaxed
                mt-4
                max-w-lg
              "
            >
              无论你是个人投资者、高净值客户还是机构投资者，
              QIG 团队都可以根据你的需求进一步介绍我们的研究能力、
              投资策略与定制化服务。
            </p>

            {/* Contact Info */}

            <div className="mt-10 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      flex
                      items-center
                      gap-4
                      group
                    "
                  >
                    <div
                      className="
                        w-11
                        h-11
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.03]
                        flex
                        items-center
                        justify-center
                        shrink-0
                        transition-all
                        duration-300
                        group-hover:border-yellow-400/30
                        group-hover:bg-yellow-400/5
                      "
                    >
                      <Icon
                        size={18}
                        className="
                          text-gray-400
                          transition-colors
                          duration-300
                          group-hover:text-yellow-400
                        "
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-[9px]
                          tracking-[3px]
                          text-gray-600
                        "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                          text-sm
                          text-gray-300
                          mt-1
                        "
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Divider */}

            <div
              className="
                h-px
                bg-white/10
                my-10
              "
            />

            {/* Trial CTA */}

            <div
              className="
                rounded-xl
                border
                border-yellow-400/10
                bg-yellow-400/[0.03]
                p-5
                md:p-6
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    w-10
                    h-10
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
                  <CheckCircle2
                    size={19}
                    className="text-yellow-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold">
                    100 天免费试用
                  </p>

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mt-1
                      leading-relaxed
                    "
                  >
                    了解 QIG 的投资研究与策略服务，
                    再决定是否继续合作。
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT SIDE FORM
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              p-7
              md:p-10
              lg:p-12
            "
          >
            {/* Top line */}

            <div
              className="
                absolute
                top-0
                left-0
                right-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-yellow-400/60
                to-transparent
              "
            />

            <div className="flex items-center justify-between gap-4">
              <div>
                <p
                  className="
                    text-[10px]
                    tracking-[4px]
                    text-yellow-500
                  "
                >
                  GET IN TOUCH
                </p>

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    mt-2
                  "
                >
                  联系我们
                </h3>
              </div>

              <div
                className="
                  hidden
                  sm:flex
                  w-11
                  h-11
                  rounded-full
                  bg-white/[0.03]
                  border
                  border-white/10
                  items-center
                  justify-center
                "
              >
                <Mail
                  size={18}
                  className="text-yellow-400"
                />
              </div>
            </div>

            {/* Form */}

            <form
              className="
                mt-8
                space-y-5
              "
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    block
                    text-xs
                    text-gray-400
                    mb-2
                  "
                >
                  姓名
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="请输入您的姓名"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-[#020817]/70
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    outline-none
                    transition-all
                    duration-300
                    focus:border-yellow-400/50
                    focus:ring-1
                    focus:ring-yellow-400/20
                  "
                />
              </div>

              {/* Email */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    block
                    text-xs
                    text-gray-400
                    mb-2
                  "
                >
                  邮箱
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="请输入您的邮箱"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-[#020817]/70
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    outline-none
                    transition-all
                    duration-300
                    focus:border-yellow-400/50
                    focus:ring-1
                    focus:ring-yellow-400/20
                  "
                />
              </div>

              {/* Investor Type */}

              <div>
                <label
                  htmlFor="investorType"
                  className="
                    block
                    text-xs
                    text-gray-400
                    mb-2
                  "
                >
                  投资者类型
                </label>

                <select
                  id="investorType"
                  defaultValue=""
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-[#020817]/70
                    px-4
                    py-3
                    text-sm
                    text-gray-400
                    outline-none
                    transition-all
                    duration-300
                    focus:border-yellow-400/50
                    focus:ring-1
                    focus:ring-yellow-400/20
                  "
                >
                  <option
                    value=""
                    disabled
                    className="bg-[#07111f]"
                  >
                    请选择投资者类型
                  </option>

                  <option
                    value="individual"
                    className="bg-[#07111f]"
                  >
                    个人投资者
                  </option>

                  <option
                    value="hnw"
                    className="bg-[#07111f]"
                  >
                    高净值投资者
                  </option>

                  <option
                    value="institutional"
                    className="bg-[#07111f]"
                  >
                    机构投资者
                  </option>

                  <option
                    value="institutional"
                    className="bg-[#07111f]"
                  >
                    资深投资者
                  </option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label
                  htmlFor="message"
                  className="
                    block
                    text-xs
                    text-gray-400
                    mb-2
                  "
                >
                  留言
                </label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="请告诉我们您希望了解的内容..."
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/10
                    bg-[#020817]/70
                    px-4
                    py-3
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    outline-none
                    resize-none
                    transition-all
                    duration-300
                    focus:border-yellow-400/50
                    focus:ring-1
                    focus:ring-yellow-400/20
                  "
                />
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="
                  group
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
                  shadow-[0_0_30px_rgba(250,204,21,0.10)]
                  hover:shadow-[0_0_40px_rgba(250,204,21,0.20)]
                "
              >
                提交咨询

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
                  leading-relaxed
                "
              >
                提交信息后，我们的团队将与您进一步联系。
              </p>
            </form>
          </motion.div>
        </div>

        {/* =========================
            Bottom CTA
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="
            mt-8
            rounded-xl
            border
            border-white/5
            bg-white/[0.015]
            px-5
            py-4
            text-center
          "
        >
          <p
            className="
              text-[10px]
              md:text-xs
              text-gray-600
            "
          >
            QIG — QuantUnity Investors Group
            <span className="mx-2 text-gray-800">•</span>
            Data Driven
            <span className="mx-2 text-gray-800">•</span>
            Research Focused
            <span className="mx-2 text-gray-800">•</span>
            Risk Aware
          </p>
        </motion.div>
      </div>
    </section>
  );
}