"use client";

import {
  Database,
  Search,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function About() {
  return (
    <section
      className="
        relative
        bg-[#030b18]
        text-white
        py-24
        md:py-32
        overflow-hidden
      "
    >

      {/* 顶部光晕 */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[250px]
          bg-blue-100/10
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
          lg:px-22
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            lg:gap-24
            items-center
          "
        >

          {/* ===================== */}
          {/* 左边：公司介绍 */}
          {/* ===================== */}

          <div>

            <p
              className="
                text-yellow-500
                tracking-[6px]
                text-xs
                font-medium
              "
            >
              ABOUT QIG
            </p>


            <h2
              className="
                mt-5
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              数据驱动的
              <br />
              <span className="text-white">
                现代化投资体系
              </span>
            </h2>


            <p
              className="
                mt-8
                text-gray-400
                text-base
                md:text-lg
                leading-loose
                max-w-xl
              "
            >
              我们结合数据分析、金融研究与风险管理，
              通过系统化的方法识别投资机会，
              为投资者构建长期价值解决方案。
            </p>


            {/* 金色线 */}
            <div className="mt-10 flex items-center gap-4">

              <div className="w-16 h-px bg-yellow-500" />

              <span className="text-gray-500 text-xs tracking-[3px]">
                QUANTITY INVESTORS GROUP
              </span>

            </div>

          </div>


          {/* ===================== */}
          {/* 右边：核心能力 */}
          {/* ===================== */}

          <div className="space-y-4">


            {/* DATA */}
            <div
              className="
                group
                relative
                border
                border-white/10
                bg-white/[0.025]
                rounded-xl
                p-6
                md:p-7
                transition-all
                duration-300
                hover:border-yellow-500/40
                hover:bg-white/[0.04]
              "
            >

              <div className="flex items-start gap-5">

                <div
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-yellow-500/10
                    border
                    border-yellow-500/20
                    shrink-0
                  "
                >
                  <Database
                    size={22}
                    strokeWidth={1.5}
                    className="text-yellow-500"
                  />
                </div>


                <div className="flex-1">

                  <p className="text-[10px] text-gray-500 tracking-[3px]">
                    01 / DATA
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    专业分析能力
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    团队成员拥有 Citadel LLC 和摩根士丹利等顶级机构的工作经验。
                  </p>

                </div>


                <ArrowUpRight
                  size={18}
                  className="
                    text-gray-600
                    group-hover:text-yellow-500
                    transition
                  "
                />

              </div>

            </div>


            {/* RESEARCH */}
            <div
              className="
                group
                relative
                border
                border-white/10
                bg-white/[0.025]
                rounded-xl
                p-6
                md:p-7
                transition-all
                duration-300
                hover:border-yellow-500/40
                hover:bg-white/[0.04]
              "
            >

              <div className="flex items-start gap-5">

                <div
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-yellow-500/10
                    border
                    border-yellow-500/20
                    shrink-0
                  "
                >
                  <Search
                    size={22}
                    strokeWidth={1.5}
                    className="text-yellow-500"
                  />
                </div>


                <div className="flex-1">

                  <p className="text-[10px] text-gray-500 tracking-[3px]">
                    02 / RESEARCH
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    行业经验
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    杰森·米勒的十余年的量化策略研发与风险管理经验，为您保驾护航。
                  </p>

                </div>


                <ArrowUpRight
                  size={18}
                  className="
                    text-gray-600
                    group-hover:text-yellow-500
                    transition
                  "
                />

              </div>

            </div>


            {/* RISK */}
            <div
              className="
                group
                relative
                border
                border-white/10
                bg-white/[0.025]
                rounded-xl
                p-6
                md:p-7
                transition-all
                duration-300
                hover:border-yellow-500/40
                hover:bg-white/[0.04]
              "
            >

              <div className="flex items-start gap-5">

                <div
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-yellow-500/10
                    border
                    border-yellow-500/20
                    shrink-0
                  "
                >
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.5}
                    className="text-yellow-500"
                  />
                </div>


                <div className="flex-1">

                  <p className="text-[10px] text-gray-500 tracking-[3px]">
                    03 / RISK
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    定制化解决方案
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    通过量化与风险控制机制，根据客户需求提供个性化的投资策略。。
                  </p>

                </div>


                <ArrowUpRight
                  size={18}
                  className="
                    text-gray-600
                    group-hover:text-yellow-500
                    transition
                  "
                />

              </div>

            </div>

            {/* DATA */}
            <div
              className="
                group
                relative
                border
                border-white/10
                bg-white/[0.025]
                rounded-xl
                p-6
                md:p-7
                transition-all
                duration-300
                hover:border-yellow-500/40
                hover:bg-white/[0.04]
              "
            >

              <div className="flex items-start gap-5">

                <div
                  className="
                    w-12
                    h-12
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-yellow-500/10
                    border
                    border-yellow-500/20
                    shrink-0
                  "
                >
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.5}
                    className="text-yellow-500"
                  />
                </div>


                <div className="flex-1">

                  <p className="text-[10px] text-gray-500 tracking-[3px]">
                    04 / DATA
                  </p>

                  <h3 className="text-xl font-semibold mt-1">
                    数据驱动决策
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    以科学方法优化资产配置，确保稳健增长。
                  </p>

                </div>


                <ArrowUpRight
                  size={18}
                  className="
                    text-gray-600
                    group-hover:text-yellow-500
                    transition
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}