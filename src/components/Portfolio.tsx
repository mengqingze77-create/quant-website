"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  TrendingUp,
  Shield,
  PieChart,
  Gem,
} from "lucide-react";

const assets = [
  {
    name: "NVIDIA",
    code: "NVDA",
    return: "+186.3%",
    color: "#22c55e",
  },
  {
    name: "Tesla",
    code: "TSLA",
    return: "+172.6%",
    color: "#ef4444",
  },
  {
    name: "HUT",
    code: "Hut 8 Mining",
    return: "+280.0%",
    color: "#facc15",
  },
  {
    name: "Bitcoin",
    code: "BTC",
    return: "+156.8%",
    color: "#0ea5e9",
  },
  {
    name: "Apple",
    code: "AAPL",
    return: "+128.4%",
    color: "#6bc0f8",
  },
  {
    name: "Ethereum",
    code: "ETH",
    return: "+142.7%",
    color: "#8b5cf6",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % assets.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="Portfolio"
      className="
        relative
        bg-[#020817]
        text-white
        py-8
        md:py-10
        overflow-hidden
      "
    >

      {/* 顶部蓝色光晕 */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-32
          bg-gradient-to-b
          from-blue-950/30
          to-transparent
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
          lg:px-10
        "
      >

        {/* ========================= */}
        {/* 标题 + 数据 */}
        {/* ========================= */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            justify-between
            gap-8
          "
        >

          {/* 左边标题 */}
          <div>

            <p
              className="
                text-yellow-500
                tracking-[6px]
                text-[10px]
                md:text-xs
                font-medium
              "
            >
              PORTFOLIO PERFORMANCE
            </p>

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                mt-2
              "
            >
              投资组合收益表现
            </h2>

            <p
              className="
                text-gray-500
                text-sm
                mt-2
              "
            >
              基于全球优质资产，结合量化模型与基本面研究。
            </p>

          </div>


          {/* 四个数据 */}
            <div
                className="
                    grid
                    grid-cols-2
                    md:grid-cols-4
                    gap-x-12
                    lg:gap-x-20
                    gap-y-6
                "
                >
                {/* 总回报率 */}
                <div className="flex items-start gap-3">
                    
                    <TrendingUp
                    size={40}
                    strokeWidth={1.5}
                    className="text-yellow-500 mt-1"
                    />

                    <div>
                    <p className="text-[#7d8ba6] text-xs">
                        总回报率
                    </p>

                    <p className="text-white text-2xl font-bold leading-none mt-1">
                        +182.7%
                    </p>

                    <p className="text-[#4f5d75] text-[10px] mt-2">
                        组合累计收益
                    </p>
                    </div>

                </div>


                {/* 年化收益率 */}
                <div className="flex items-start gap-3">

                    <Shield
                    size={40}
                    strokeWidth={1.5}
                    className="text-yellow-500 mt-1"
                    />

                    <div>
                    <p className="text-[#7d8ba6] text-xs">
                        年化收益率
                    </p>

                    <p className="text-white text-2xl font-bold leading-none mt-1">
                        +26.4%
                    </p>

                    <p className="text-[#4f5d75] text-[10px] mt-2">
                        过去3年
                    </p>
                    </div>

                </div>


                {/* 最大回撤 */}
                <div className="flex items-start gap-3">

                    <PieChart
                    size={40}
                    strokeWidth={1.5}
                    className="text-yellow-500 mt-1"
                    />

                    <div>
                    <p className="text-[#7d8ba6] text-xs">
                        最大回撤
                    </p>

                    <p className="text-white text-2xl font-bold leading-none mt-1">
                        -8.7%
                    </p>

                    <p className="text-[#4f5d75] text-[10px] mt-2">
                        风险控制良好
                    </p>
                    </div>

                </div>


                {/* 策略数量 */}
                <div className="flex items-start gap-3">

                    <Gem
                    size={40}
                    strokeWidth={1.5}
                    className="text-yellow-500 mt-1"
                    />

                    <div>
                    <p className="text-[#7d8ba6] text-xs">
                        策略数量
                    </p>

                    <p className="text-white text-2xl font-bold leading-none mt-1">
                        6
                    </p>

                    <p className="text-[#4f5d75] text-[10px] mt-2">
                        多元化配置
                    </p>
                    </div>

                </div>

            </div>

        </div>


        {/* ========================= */}
        {/* 分割线 */}
        {/* ========================= */}

        <div className="h-px bg-white/5 mt-7 mb-5" />


        {/* ========================= */}
        {/* 资产卡片 */}
        {/* ========================= */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-3
          "
        >

          {assets.map((item, index) => (

            <motion.div
              key={item.code}

              animate={{
                scale: index === active ? 1.08 : 1,
                y: index === active ? -10 : 0,
              }}

              transition={{
                duration: 0.4,
              }}

              whileHover={{
                y: -6,
              }}

              className={`
                relative
                h-[125px]
                rounded-lg
                overflow-hidden
                border
                bg-[#07111f]/90
                backdrop-blur
                p-4
                cursor-pointer
                transition-all
                duration-300

                ${
                    index === active
                    ? "border-white/40"
                    : "border-white/10 hover:border-white/20"
                }
                `}
                style={{
                boxShadow:
                    index === active
                    ? `0 0 30px ${item.color}55`
                    : "none",
            }}
            >

              {/* 卡片顶部 */}
              <div className="flex items-start justify-between">

                <div>

                  <p className="text-[10px] text-gray-500">
                    {item.code}
                  </p>

                  <p className="text-sm font-semibold mt-1">
                    {item.name}
                  </p>

                </div>


                {/* 状态 */}
                <span
                  className={`
                    text-[9px]
                    px-2
                    py-1
                    rounded
                    bg-white/5
                    ${
                      index === active
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  {index === active ? "聚焦" : "收益"}
                </span>

              </div>


              {/* 收益 */}
              <div className="mt-3">

                <p
                className="text-xl font-bold"
                    style={{
                        color: index === active ? item.color : "#ffffff",
                    }}
                    >
                    {item.return}
                </p>

                <p className="text-[9px] text-gray-500">
                  年化收益率
                </p>

              </div>


              {/* ================= */}
              {/* 底部折线图 */}
              {/* ================= */}

              <svg
                viewBox="0 0 200 40"
                className="absolute bottom-0 left-0 w-full h-10 opacity-80"
                preserveAspectRatio="none"
              >

                <defs>

                  <linearGradient
                    id={`gradient-${index}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor={item.color}
                      stopOpacity="0.35"
                    />

                    <stop
                      offset="100%"
                      stopColor="#020817"
                      stopOpacity="0"
                    />

                  </linearGradient>

                </defs>


                {/* 面积 */}
                <path
                  d="
                    M0 35
                    L15 32
                    L30 34
                    L45 25
                    L60 29
                    L75 20
                    L90 23
                    L105 16
                    L120 21
                    L135 12
                    L150 17
                    L165 8
                    L180 12
                    L200 4
                    L200 40
                    L0 40
                    Z
                  "
                  fill={`url(#gradient-${index})`}
                />


                {/* 折线 */}
                <path
                  d="
                    M0 35
                    L15 32
                    L30 34
                    L45 25
                    L60 29
                    L75 20
                    L90 23
                    L105 16
                    L120 21
                    L135 12
                    L150 17
                    L165 8
                    L180 12
                    L200 4
                  "
                  fill="none"
                  stroke={item.color}
                  strokeWidth="2"
                />

              </svg>

            </motion.div>

          ))}

        </div>


        {/* ========================= */}
        {/* 底部轮播指示器 */}
        {/* ========================= */}

        <div className="flex justify-center gap-2 mt-5">

          {assets.map((_, index) => (

            <div
              key={index}
              className={`
                h-[2px]
                rounded
                transition-all
                duration-300
                ${
                  index === active
                    ? "w-7 bg-yellow-400"
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