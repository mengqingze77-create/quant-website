"use client";

import { useState } from "react";
import {
  ArrowUp,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  {
    label: "首页",
    href: "#",
  },
  {
    label: "投资表现",
    href: "#Portfolio",
  },
  {
    label: "历史表现",
    href: "#track-record",
  },
  {
    label: "客户评价",
    href: "#testimonials",
  },
  {
    label: "合作模式",
    href: "#pricing",
  },
  {
    label: "联系我们",
    href: "#contact",
  },
];

const services = [
  "Stock Investment",
  "Foreign Exchange",
  "Gold & Precious Metals",
  "Energy",
  "Futures",
  "Customized Solutions",
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#010611]
        text-white
        border-t
        border-white/5
      "
    >
      {/* =========================
          Background
      ========================= */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[250px]
          rounded-full
          bg-blue-950/20
          blur-[100px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-yellow-400/30
          to-transparent
        "
      />

      {/* =========================
          Main Footer
      ========================= */}

      <div
        className="
          relative
          z-10
          max-w-[2400px]
          mx-auto
          px-6
          md:px-10
          pt-16
          md:pt-20
          pb-10
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]
            gap-12
            lg:gap-10
          "
        >
          {/* =========================
              Brand
          ========================= */}

          <div>
            {/* Logo */}

            <a
              href="#home"
              className="
                inline-flex 
                items-center
                gap-3
                group
              "
            >
              <div
                className="
                  w-10
                  h-10
                  rounded-lg
                  border
                  border-yellow-400/30
                  bg-yellow-400/5
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:border-yellow-400/60
                  group-hover:bg-yellow-400/10
                "
              >
                <span
                  className="
                    text-sm
                    font-bold
                    text-yellow-400
                  "
                >
                  Q
                </span>
              </div>

              <div>
                <p
                  className="
                    text-xl
                    font-bold
                    tracking-wide
                  "
                >
                  QIG
                </p>

                <p
                  className="
                    text-[8px]
                    tracking-[3px]
                    text-gray-600
                    mt-0.5
                  "
                >
                  QUANTUNITY INVESTORS GROUP
                </p>
              </div>
            </a>

            {/* Description */}

            <p
              className="
                text-sm
                text-gray-500
                leading-relaxed
                mt-6
                max-w-sm
              "
            >
              以量化策略为核心，结合数据分析、
              基本面研究与风险管理，为个人投资者、
              高净值客户及机构投资者提供专业的投资研究与解决方案。
            </p>

            {/* Tag */}

            <div className="flex flex-wrap gap-2 mt-6">
              <span
                className="
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-[9px]
                  tracking-[1px]
                  text-gray-500
                "
              >
                DATA DRIVEN
              </span>

              <span
                className="
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-[9px]
                  tracking-[1px]
                  text-gray-500
                "
              >
                RESEARCH FOCUSED
              </span>

              <span
                className="
                  px-3
                  py-1.5
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  text-[9px]
                  tracking-[1px]
                  text-gray-500
                "
              >
                RISK AWARE
              </span>
            </div>
          </div>

          {/* =========================
              Navigation
          ========================= */}

          <div>
            <p
              className="
                text-[10px]
                tracking-[4px]
                text-yellow-500
                mb-6
              "
            >
              NAVIGATION
            </p>

            <div className="space-y-3.5">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    block
                    w-fit
                    text-sm
                    text-gray-500
                    hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* =========================
              Services
          ========================= */}

          <div>
            <p
              className="
                text-[10px]
                tracking-[4px]
                text-yellow-500
                mb-6
              "
            >
              SERVICES
            </p>

            <div className="space-y-3.5">
              {services.map((service) => (
                <p
                  key={service}
                  className="
                    text-sm
                    text-gray-500
                  "
                >
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* =========================
              Contact
          ========================= */}

          <div>
            <p
              className="
                text-[10px]
                tracking-[4px]
                text-yellow-500
                mb-6
              "
            >
              CONTACT
            </p>

            <div className="space-y-5">
              {/* Email */}

              <a
                href="mailto:contact@qig-investors.com"
                className="
                  flex
                  items-start
                  gap-3
                  group
                "
              >
                <Mail
                  size={16}
                  className="
                    mt-0.5
                    text-gray-600
                    group-hover:text-yellow-400
                    transition-colors
                  "
                />

                <div>
                  <p
                    className="
                      text-[9px]
                      tracking-[2px]
                      text-gray-700
                    "
                  >
                    EMAIL
                  </p>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      group-hover:text-gray-300
                      transition-colors
                      mt-1
                    "
                  >
                    contact@qig-investors.com
                  </p>
                </div>
              </a>

              {/* Phone */}

              <a
                href="tel:+1XXXXXXXXXX"
                className="
                  flex
                  items-start
                  gap-3
                  group
                "
              >
                <Phone
                  size={16}
                  className="
                    mt-0.5
                    text-gray-600
                    group-hover:text-yellow-400
                    transition-colors
                  "
                />

                <div>
                  <p
                    className="
                      text-[9px]
                      tracking-[2px]
                      text-gray-700
                    "
                  >
                    PHONE
                  </p>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      group-hover:text-gray-300
                      transition-colors
                      mt-1
                    "
                  >
                    +1-XXX-XXX-XXXX
                  </p>
                </div>
              </a>

              {/* Location */}

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="
                    mt-0.5
                    text-gray-600
                  "
                />

                <div>
                  <p
                    className="
                      text-[9px]
                      tracking-[2px]
                      text-gray-700
                    "
                  >
                    LOCATION
                  </p>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mt-1
                    "
                  >
                    Wall Street, New York City
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                mt-7
                text-xs
                font-medium
                text-yellow-400
                hover:text-yellow-300
                transition-colors
              "
            >
              开始 100 天免费试用
              <span>→</span>
            </a>
          </div>
        </div>

        {/* =========================
            Divider
        ========================= */}

        <div
          className="
            h-px
            bg-white/5
            mt-14
            md:mt-16
          "
        />

        {/* =========================
            Risk Disclaimer
        ========================= */}

        <div
          className="
            py-7
            md:py-8
          "
        >
          <p
            className="
              text-[10px]
              md:text-xs
              leading-relaxed
              text-gray-700
              max-w-5xl
            "
          >
            <span className="text-gray-600">
              Investment Risk Disclaimer:
            </span>{" "}
            本网站所展示的投资组合数据、历史表现及相关信息仅供参考，
            不构成任何投资建议、要约或收益保证。投资涉及市场风险，
            历史表现不代表未来收益。投资者应根据自身情况独立作出投资决策，
            并在必要时咨询专业人士。
          </p>
        </div>

        {/* =========================
            Bottom Bar
        ========================= */}

        <div
          className="
            border-t
            border-white/5
            pt-6
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
          "
        >
          {/* Copyright */}

          <p
            className="
              text-[10px]
              md:text-xs
              text-gray-700
            "
          >
            © {new Date().getFullYear()} QuantUnity Investors Group.
            All rights reserved.
          </p>

          {/* Bottom Links */}

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="
                text-[10px]
                text-gray-700
                hover:text-gray-400
                transition-colors
              "
            >
              Privacy Policy
            </a>

            <span className="text-gray-800">•</span>

            <a
              href="#"
              className="
                text-[10px]
                text-gray-700
                hover:text-gray-400
                transition-colors
              "
            >
              Terms of Use
            </a>
          </div>

          {/* Back To Top */}

          <button
            onClick={handleTop}
            onMouseEnter={() => setShowTop(true)}
            onMouseLeave={() => setShowTop(false)}
            aria-label="Back to top"
            className="
              group
              w-9
              h-9
              rounded-full
              border
              border-white/10
              bg-white/[0.02]
              flex
              items-center
              justify-center
              text-gray-600
              hover:text-yellow-400
              hover:border-yellow-400/30
              transition-all
              duration-300
              self-start
              md:self-auto
            "
          >
            <ArrowUp
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
              "
            />
          </button>
        </div>

        {/* Small hover text */}

        <div
          className={`
            text-center
            text-[9px]
            text-gray-800
            transition-opacity
            duration-300
            mt-5
            ${
              showTop
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          BACK TO TOP
        </div>
      </div>
    </footer>
  );
}