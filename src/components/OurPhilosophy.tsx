"use client";

import { motion } from "framer-motion";
import {
  Database,
  ShieldCheck,
  TrendingUp,
  SlidersHorizontal,
  ArrowUpRight,
} from "lucide-react";

const philosophies = [
  {
    number: "01",
    label: "DATA-DRIVEN",
    title: "数据驱动",
    description:
      "通过数据分析与量化模型识别市场机会，以客观数据辅助投资判断，减少情绪对决策的影响。",
    icon: Database,
  },
  {
    number: "02",
    label: "RISK FIRST",
    title: "风险优先",
    description:
      "在寻找收益机会的同时重视风险管理，通过系统化的方法控制组合波动与潜在回撤。",
    icon: ShieldCheck,
  },
  {
    number: "03",
    label: "LONG TERM",
    title: "长期主义",
    description:
      "关注长期价值与持续增长，通过系统化研究和纪律化执行构建更加稳定的投资框架。",
    icon: TrendingUp,
  },
  {
    number: "04",
    label: "CUSTOMIZED",
    title: "定制化配置",
    description:
      "结合不同投资目标与风险偏好，设计具有针对性的资产配置与投资策略。",
    icon: SlidersHorizontal,
  },
];

export default function OurPhilosophy() {
  return (
    <section
      id="philosophy"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        py-20
        text-white
        sm:py-24
        lg:py-28
        xl:py-32
      "
    >
      {/* ========================= */}
      {/* 背景光效 */}
      {/* ========================= */}

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
          bg-blue-400/[0.2]
          blur-[300px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-yellow-500/[0.035]
          blur-[140px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[2400px]
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          xl:px-16
          2xl:px-20
        "
      >
        {/* ========================= */}
        {/* 顶部标题 */}
        {/* ========================= */}

        <div className="max-w-3xl">
          <p
            className="
              text-[9px]
              font-medium
              tracking-[5px]
              text-yellow-500
              sm:text-[10px]
              sm:tracking-[6px]
            "
          >
            OUR PHILOSOPHY
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-[48px]
            "
          >
            用数据理解市场，
            <br />
            <span className="text-white/90">
              用纪律管理风险。
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
              sm:leading-8
            "
          >
            QIG 以量化策略为核心，通过数据分析、金融研究与风险管理，
            构建系统化的现代化投资体系。
          </p>
        </div>

        {/* ========================= */}
        {/* 中间核心区域 */}
        {/* ========================= */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-8
            lg:mt-16
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* ========================= */}
          {/* 左侧 Philosophy Core */}
          {/* ========================= */}

          <div
            className="
              relative
              flex
              min-h-[360px]
              items-center
              justify-center
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-[#07111f]/60
              p-8
              sm:min-h-[400px]
              lg:min-h-[500px]
            "
          >
            {/* 网格背景 */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.08]
                [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
                [background-size:40px_40px]
              "
            />

            {/* 中心光晕 */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-56
                w-56
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-yellow-400/[0.05]
                blur-[70px]
              "
            />

            {/* 中心内容 */}

            <div className="relative z-10 text-center">
              <p
                className="
                  text-[9px]
                  tracking-[5px]
                  text-yellow-500
                "
              >
                QIG
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  tracking-tight
                  sm:text-4xl
                "
              >
                Investment
              </h3>

              <h3
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-white/80
                  sm:text-4xl
                "
              >
                Philosophy
              </h3>

              {/* 数据流程 */}

              <div
                className="
                  mx-auto
                  mt-10
                  flex
                  max-w-[280px]
                  flex-col
                  items-center
                "
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400">
                    DATA
                  </span>

                  <span className="text-yellow-500">
                    →
                  </span>

                  <span className="text-xs text-slate-400">
                    RESEARCH
                  </span>
                </div>

                <div className="my-2 h-5 w-px bg-yellow-500/30" />

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-400">
                    STRATEGY
                  </span>

                  <span className="text-yellow-500">
                    →
                  </span>

                  <span className="text-xs text-slate-400">
                    RISK
                  </span>
                </div>
              </div>

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-xs
                  text-[11px]
                  leading-6
                  text-slate-600
                "
              >
                From data to decisions.
                <br />
                From strategy to discipline.
              </p>
            </div>
          </div>

          {/* ========================= */}
          {/* 右侧四大原则 */}
          {/* ========================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            {philosophies.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-[#07111f]/75
                    p-5
                    transition-all
                    duration-300
                    hover:border-yellow-400/40
                    hover:bg-[#091525]
                    sm:p-6
                  "
                >
                  {/* 编号 */}

                  <span
                    className="
                      absolute
                      right-5
                      top-5
                      text-[9px]
                      tracking-[3px]
                      text-slate-700
                    "
                  >
                    {item.number}
                  </span>

                  {/* icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-yellow-500/25
                      bg-yellow-500/5
                      text-yellow-400
                      transition-all
                      duration-300
                      group-hover:border-yellow-400/50
                      group-hover:bg-yellow-400/10
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* 英文 */}

                  <p
                    className="
                      mt-6
                      text-[9px]
                      tracking-[4px]
                      text-yellow-500
                    "
                  >
                    {item.label}
                  </p>

                  {/* 中文 */}

                  <h3
                    className="
                      mt-2
                      text-xl
                      font-semibold
                    "
                  >
                    {item.title}
                  </h3>

                  {/* 描述 */}

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-6
                      text-slate-500
                      sm:text-[13px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* 底部线 */}

                  <div
                    className="
                      mt-7
                      h-px
                      w-8
                      bg-yellow-500/50
                      transition-all
                      duration-300
                      group-hover:w-16
                    "
                  />

                  {/* hover 光 */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      right-0
                      h-32
                      w-32
                      rounded-full
                      bg-yellow-400/[0.04]
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ========================= */}
        {/* Vision / Mission */}
        {/* ========================= */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            border-t
            border-white/10
            pt-10
            sm:mt-12
            sm:grid-cols-2
            sm:pt-12
          "
        >
          {/* Vision */}

          <div className="group">
            <p
              className="
                text-[9px]
                tracking-[4px]
                text-yellow-500
              "
            >
              OUR VISION
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              更开放的投资环境
            </h3>

            <p
              className="
                mt-3
                max-w-xl
                text-xs
                leading-6
                text-slate-500
                sm:text-[13px]
              "
            >
              通过团结个人投资者的智慧与力量，推动市场创新，
              创造更加公平、开放的金融环境。
            </p>
          </div>

          {/* Mission */}

          <div className="group">
            <p
              className="
                text-[9px]
                tracking-[4px]
                text-yellow-500
              "
            >
              OUR MISSION
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              让投资更加系统化
            </h3>

            <p
              className="
                mt-3
                max-w-xl
                text-xs
                leading-6
                text-slate-500
                sm:text-[13px]
              "
            >
              以量化策略为核心，帮助投资者理解复杂市场，
              通过系统化的方法构建长期投资框架。
            </p>
          </div>
        </div>

        {/* ========================= */}
        {/* 底部品牌签名 */}
        {/* ========================= */}

        <div
          className="
            mt-12
            flex
            items-center
            gap-4
            sm:mt-14
          "
        >
          <div className="h-px w-12 bg-yellow-500" />

          <p
            className="
              text-[9px]
              tracking-[5px]
              text-slate-600
            "
          >
            QUANTITY INVESTORS GROUP
          </p>
        </div>
      </div>
    </section>
  );
}