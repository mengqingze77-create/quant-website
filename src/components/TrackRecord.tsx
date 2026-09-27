"use client";

import {
  ArrowUpRight,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const portfolio = [
  {
    symbol: "INTC",
    name: "Intel Corporation",
    return: "103%",
    category: "Technology",
  },
  {
    symbol: "IONQ",
    name: "IonQ, Inc.",
    return: "198%",
    category: "Quantum Computing",
  },
  {
    symbol: "RIOT",
    name: "Riot Platforms, Inc.",
    return: "189%",
    category: "Digital Assets",
  },
  {
    symbol: "HUT",
    name: "Hut 8 Corp.",
    return: "280%",
    category: "Digital Assets",
    featured: true,
  },
  {
    symbol: "BABA",
    name: "Alibaba Group Holding Limited",
    return: "72%",
    category: "Consumer & Technology",
  },
  {
    symbol: "AVGO",
    name: "Broadcom Inc.",
    return: "88%",
    category: "Semiconductors",
  },
];

export default function TrackRecord() {
  return (
    <section
      id="track-record"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-24
        text-white
        md:py-32
      "
    >
      {/* 背景光 */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-blue-400/[0.3]
          blur-[300px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-yellow-400/[0.025]
          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[2400px]
          px-6
          sm:px-8
          lg:px-10
        "
      >

        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div>

            <p
              className="
                text-[10px]
                font-medium
                tracking-[6px]
                text-yellow-400
                md:text-xs
              "
            >
              TRACK RECORD
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                tracking-tight
                sm:text-4xl
                md:text-5xl
              "
            >
              2025 投资组合表现
            </h2>

            <p
              className="
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-400
                md:text-base
              "
            >
              以下为 QIG 2025 年精选投资组合的部分历史表现，
              用于展示过往投资研究与策略成果。
            </p>

          </div>


          {/* 年份标签 */}

          <div
            className="
              flex
              items-center
              gap-3
              self-start
              rounded-lg
              border
              border-white/10
              bg-[#07111f]
              px-4
              py-3
              lg:self-auto
            "
          >

            <BarChart3
              size={17}
              className="text-yellow-400"
            />

            <div>

              <p className="text-[9px] tracking-[3px] text-slate-600">
                PERFORMANCE PERIOD
              </p>

              <p className="mt-1 text-sm font-semibold">
                2025
              </p>

            </div>

          </div>

        </div>


        {/* ================================= */}
        {/* TOP SUMMARY */}
        {/* ================================= */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-3
          "
        >

          <div
            className="
              rounded-xl
              border
              border-white/10
              bg-[#07111f]/80
              p-6
            "
          >

            <p className="text-[10px] tracking-[3px] text-slate-600">
              TOP RETURN
            </p>

            <p className="mt-3 text-3xl font-bold text-yellow-400">
              +280%
            </p>

            <p className="mt-2 text-xs text-slate-500">
              HUT · Hut 8 Corp.
            </p>

          </div>


          <div
            className="
              rounded-xl
              border
              border-white/10
              bg-[#07111f]/80
              p-6
            "
          >

            <p className="text-[10px] tracking-[3px] text-slate-600">
              PORTFOLIO PICKS
            </p>

            <p className="mt-3 text-3xl font-bold">
              6
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Selected positions
            </p>

          </div>


          <div
            className="
              rounded-xl
              border
              border-white/10
              bg-[#07111f]/80
              p-6
            "
          >

            <p className="text-[10px] tracking-[3px] text-slate-600">
              RESEARCH APPROACH
            </p>

            <p className="mt-3 text-lg font-semibold">
              Data Driven
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Quantitative & fundamental research
            </p>

          </div>

        </div>


        {/* ================================= */}
        {/* PORTFOLIO GRID */}
        {/* ================================= */}

        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {portfolio.map((item, index) => (

            <div
              key={item.symbol}
              className={`
                group
                relative
                overflow-hidden
                rounded-xl
                border
                p-6
                transition-all
                duration-300
                hover:-translate-y-1

                ${
                  item.featured
                    ? `
                      border-yellow-400/40
                      bg-[#0a1626]
                      shadow-[0_0_45px_rgba(250,204,21,0.08)]
                    `
                    : `
                      border-white/10
                      bg-[#07111f]/80
                      hover:border-white/20
                    `
                }
              `}
            >

              {/* 顶部光线 */}

              {item.featured && (
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-yellow-400
                    via-yellow-400/40
                    to-transparent
                  "
                />
              )}


              {/* 编号 */}

              <div
                className="
                  absolute
                  right-5
                  top-5
                  text-[9px]
                  tracking-[3px]
                  text-slate-700
                "
              >
                0{index + 1}
              </div>


              {/* 股票代码 */}

              <div className="flex items-center gap-3">

                <div
                  className={`
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-lg
                    border
                    ${
                      item.featured
                        ? "border-yellow-400/30 bg-yellow-400/[0.06]"
                        : "border-white/10 bg-white/[0.02]"
                    }
                  `}
                >

                  <TrendingUp
                    size={17}
                    className={
                      item.featured
                        ? "text-yellow-400"
                        : "text-slate-500"
                    }
                  />

                </div>


                <div>

                  <p className="text-base font-semibold">
                    {item.symbol}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-600">
                    {item.category}
                  </p>

                </div>

              </div>


              {/* 公司名称 */}

              <p
                className="
                  mt-7
                  min-h-[40px]
                  text-sm
                  leading-6
                  text-slate-400
                "
              >
                {item.name}
              </p>


              {/* 收益率 */}

              <div
                className="
                  mt-7
                  flex
                  items-end
                  justify-between
                "
              >

                <div>

                  <p className="text-[9px] tracking-[3px] text-slate-600">
                    RETURN
                  </p>

                  <p
                    className={`
                      mt-2
                      text-3xl
                      font-bold
                      ${
                        item.featured
                          ? "text-yellow-400"
                          : "text-white"
                      }
                    `}
                  >
                    +{item.return}
                  </p>

                </div>


                <ArrowUpRight
                  size={18}
                  className="
                    text-slate-700
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-yellow-400
                  "
                />

              </div>


              {/* 底部进度线 */}

              <div
                className="
                  mt-6
                  h-px
                  w-full
                  overflow-hidden
                  bg-white/5
                "
              >

                <div
                  className={`
                    h-full
                    transition-all
                    duration-500
                    group-hover:w-full
                    ${
                      item.featured
                        ? "w-[90%] bg-yellow-400"
                        : "w-[65%] bg-slate-500"
                    }
                  `}
                />

              </div>

            </div>

          ))}

        </div>


        {/* ================================= */}
        {/* NEXT OPPORTUNITY */}
        {/* ================================= */}

        <div
          className="
            mt-5
            rounded-xl
            border
            border-dashed
            border-yellow-400/20
            bg-yellow-400/[0.02]
            p-6
            sm:p-8
          "
        >

          <div
            className="
              flex
              flex-col
              gap-5
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            <div>

              <p
                className="
                  text-[9px]
                  tracking-[4px]
                  text-yellow-400/70
                "
              >
                NEXT OPPORTUNITY
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                第七支高潜力标的
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  leading-6
                  text-slate-500
                "
              >
                最新研究标的正在评估中，具体信息以 QIG 后续发布为准。
              </p>

            </div>


            <button
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-md
                border
                border-yellow-400/30
                bg-yellow-400/[0.05]
                px-5
                py-3
                text-xs
                font-medium
                text-yellow-400
                transition-all
                hover:bg-yellow-400
                hover:text-black
              "
            >
              查看最新研究
              <ArrowUpRight size={14} />
            </button>

          </div>

        </div>


        {/* ================================= */}
        {/* DISCLAIMER */}
        {/* ================================= */}

        <div
          className="
            mt-8
            border-t
            border-white/5
            pt-5
          "
        >

          <p
            className="
              text-[10px]
              leading-5
              text-slate-600
            "
          >
            注：以上收益率为截至 2025 年的历史数据，仅用于展示过往表现，
            不代表未来投资收益。投资涉及风险，历史表现不代表未来结果。
          </p>

        </div>

      </div>
    </section>
  );
}