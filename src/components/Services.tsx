"use client";

import {
  TrendingUp,
  ArrowUpRight,
  Globe2,
  Coins,
  Fuel,
  BarChart3,
  Settings2,
} from "lucide-react";

const services = [
  {
    number: "01",
    code: "EQUITIES",
    title: "股市投资",
    description:
      "覆盖金融、科技、消费品等领域，通过数据驱动的多因子模型进行市场研究与策略分析。",
    tags: ["美股研究", "多因子模型"],
    icon: TrendingUp,
  },
  {
    number: "02",
    code: "FOREX",
    title: "外汇交易",
    description:
      "围绕主要货币对开展量化研究，结合套利策略与风险管理方法分析全球外汇市场。",
    tags: ["EUR/USD", "USD/JPY"],
    icon: Globe2,
  },
  {
    number: "03",
    code: "PRECIOUS METALS",
    title: "黄金与贵金属",
    description:
      "关注黄金、白银等贵金属市场，结合宏观经济指标与量化模型进行趋势研究。",
    tags: ["Gold", "Silver"],
    icon: Coins,
  },
  {
    number: "04",
    code: "ENERGY",
    title: "能源市场",
    description:
      "关注原油、天然气及新能源市场动态，通过市场研究与对冲思路管理资产波动。",
    tags: ["Crude Oil", "Natural Gas"],
    icon: Fuel,
  },
  {
    number: "05",
    code: "FUTURES",
    title: "期货商品",
    description:
      "覆盖农产品、工业品等期货商品，提供市场分析、策略研究与资产配置方案。",
    tags: ["Agriculture", "Industrial"],
    icon: BarChart3,
  },
  {
    number: "06",
    code: "CUSTOM",
    title: "定制化方案",
    description:
      "根据投资目标与风险偏好设计个性化资产配置方案，并结合持续的风险评估进行优化。",
    tags: ["Asset Allocation", "Risk"],
    icon: Settings2,
  },
];

export default function Services() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#020817]
        text-white

        py-16
        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32
      "
    >

      {/* ================================= */}
      {/* 背景光 */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -translate-x-1/2

          w-[500px]
          sm:w-[700px]
          lg:w-[1000px]

          h-[300px]
          sm:h-[400px]
          lg:h-[500px]

          rounded-full
          bg-blue-200/[0.2]
          blur-[300px]
        "
      />


      {/* ================================= */}
      {/* 主容器 */}
      {/* ================================= */}

      <div
        className="
          relative
          z-10

          w-full
          max-w-[2400px]

          mx-auto

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-20
          2xl:px-24
        "
      >


        {/* ================================= */}
        {/* 标题区域 */}
        {/* ================================= */}

        <div
          className="
            max-w-[900px]

            mb-10
            sm:mb-12
            md:mb-14
            lg:mb-16
          "
        >

          <p
            className="
              text-yellow-500
              tracking-[4px]
              sm:tracking-[5px]
              md:tracking-[6px]

              text-[9px]
              sm:text-[10px]
              md:text-xs

              font-medium
            "
          >
            INVESTMENT SERVICES
          </p>


          <h2
            className="
              mt-3
              sm:mt-4

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl

              leading-[1.15]
              font-bold

              tracking-tight
            "
          >
            覆盖全球主要资产类别
          </h2>


          <p
            className="
              mt-4
              sm:mt-5

              max-w-[700px]

              text-xs
              sm:text-sm
              md:text-base

              leading-6
              md:leading-7

              text-gray-500
            "
          >
            从市场研究、量化策略到风险管理，
            构建覆盖多资产类别的现代化投资体系。
          </p>

        </div>



        {/* ================================= */}
        {/* 服务卡片 */}
        {/* ================================= */}

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3

            gap-3
            sm:gap-4
            lg:gap-5
            xl:gap-6
          "
        >

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="
                  group
                  relative

                  w-full

                  min-h-[250px]
                  sm:min-h-[260px]
                  md:min-h-[270px]
                  lg:min-h-[285px]

                  rounded-xl
                  sm:rounded-2xl

                  border
                  border-white/10

                  bg-[#07111f]/80

                  p-5
                  sm:p-6
                  md:p-7
                  lg:p-8

                  overflow-hidden

                  transition-all
                  duration-500

                  hover:border-yellow-400/40
                  hover:bg-[#091525]

                  hover:-translate-y-1
                "
              >

                {/* ================================= */}
                {/* 卡片顶部编号 */}
                {/* ================================= */}

                <div
                  className="
                    absolute
                    top-5
                    right-5

                    sm:top-6
                    sm:right-6

                    text-[8px]
                    sm:text-[9px]

                    tracking-[3px]

                    text-gray-700
                  "
                >
                  {service.number}
                </div>



                {/* ================================= */}
                {/* 图标 */}
                {/* ================================= */}

                <div
                  className="
                    flex
                    items-center
                    justify-center

                    w-10
                    h-10

                    sm:w-11
                    sm:h-11

                    md:w-12
                    md:h-12

                    rounded-lg
                    sm:rounded-xl

                    border
                    border-yellow-400/20

                    bg-yellow-400/5

                    text-yellow-400

                    mb-6
                    sm:mb-7
                    md:mb-8

                    transition-all
                    duration-500

                    group-hover:border-yellow-400/40
                    group-hover:bg-yellow-400/10
                  "
                >
                  <Icon
                    size={18}
                    className="sm:w-5 sm:h-5"
                    strokeWidth={1.5}
                  />
                </div>



                {/* ================================= */}
                {/* 英文分类 */}
                {/* ================================= */}

                <p
                  className="
                    text-[8px]
                    sm:text-[9px]
                    md:text-[10px]

                    tracking-[3px]
                    sm:tracking-[4px]

                    text-yellow-500/70

                    truncate

                    pr-10
                  "
                >
                  {service.code}
                </p>



                {/* ================================= */}
                {/* 中文标题 */}
                {/* ================================= */}

                <h3
                  className="
                    mt-2

                    text-lg
                    sm:text-xl
                    md:text-[21px]

                    font-bold
                  "
                >
                  {service.title}
                </h3>



                {/* ================================= */}
                {/* 描述 */}
                {/* ================================= */}

                <p
                  className="
                    mt-3
                    sm:mt-4

                    text-[11px]
                    sm:text-xs
                    md:text-sm

                    leading-5
                    sm:leading-6

                    text-gray-500

                    max-w-[620px]
                  "
                >
                  {service.description}
                </p>



                {/* ================================= */}
                {/* Tags */}
                {/* ================================= */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2

                    mt-5
                    sm:mt-6

                    pr-8
                  "
                >

                  {service.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        px-2.5
                        sm:px-3

                        py-1

                        rounded

                        border
                        border-white/10

                        bg-white/[0.03]

                        text-[8px]
                        sm:text-[9px]
                        md:text-[10px]

                        text-gray-500

                        whitespace-nowrap
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>



                {/* ================================= */}
                {/* 右下箭头 */}
                {/* ================================= */}

                <ArrowUpRight
                  size={17}
                  className="
                    absolute

                    right-5
                    bottom-5

                    sm:right-6
                    sm:bottom-6

                    md:right-7
                    md:bottom-7

                    text-gray-700

                    transition-all
                    duration-300

                    group-hover:text-yellow-400

                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />



                {/* ================================= */}
                {/* hover 光晕 */}
                {/* ================================= */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    -right-20
                    -bottom-20

                    w-40
                    h-40

                    rounded-full

                    bg-yellow-400/[0.03]

                    blur-3xl

                    opacity-0

                    transition-opacity
                    duration-500

                    group-hover:opacity-100
                  "
                />

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}