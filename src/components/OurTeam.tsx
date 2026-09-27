"use client";
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  Globe2,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
} from "lucide-react";

const team = [
  {
    name: "Kaitlyn Smith",
    nameCn: "凯特琳·史密斯",
    role: "Chief Assistant",
    roleCn: "首席助理",
    icon: BriefcaseBusiness,
    description:
      "宾夕法尼亚大学沃顿商学院金融与数据科学专业毕业，曾在摩根士丹利担任投资分析师，专注于美股及数字资产研究。",
    focus: "Team Operations",
  },
  {
    name: "Alex Brown",
    nameCn: "亚历克斯·布朗",
    role: "FX Analyst",
    roleCn: "外汇分析师",
    icon: Globe2,
    description:
      "专注主要货币对的量化分析与套利策略，研究全球外汇市场的结构与机会。",
    focus: "Forex & Quant",
  },
  {
    name: "Emily Zhang",
    nameCn: "艾米丽·张",
    role: "Gold Analyst",
    roleCn: "黄金分析师",
    icon: BarChart3,
    description:
      "专注黄金、白银等贵金属市场研究，结合宏观经济指标进行趋势分析。",
    focus: "Precious Metals",
  },
  {
    name: "Samantha Wilson",
    nameCn: "萨曼莎·威尔逊",
    role: "Commodity Analyst",
    roleCn: "大宗商品分析师",
    icon: Database,
    description:
      "专注能源、金属与农产品市场研究，为资产配置提供跨品种分析。",
    focus: "Commodities",
  },
  {
    name: "William Davis",
    nameCn: "威廉·戴维斯",
    role: "Energy Analyst",
    roleCn: "能源分析师",
    icon: ShieldCheck,
    description:
      "专注原油、天然气及新能源市场动态，研究能源资产的风险与配置机会。",
    focus: "Energy Markets",
  },
  {
    name: "Erin Clark",
    nameCn: "艾琳·克拉克",
    role: "Solutions Specialist",
    roleCn: "定制化方案专家",
    icon: SlidersHorizontal,
    description:
      "专注资产配置与投资组合优化，根据不同目标设计个性化投资方案。",
    focus: "Asset Allocation",
  },
];

export default function OurTeam() {
  return (
    <section
      id="team"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        text-white
        py-24
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
          bg-blue-500/[0.2]
          blur-[300px]
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

        {/* ============================= */}
        {/* SECTION HEADER */}
        {/* ============================= */}

        <div className="max-w-3xl">

          <p
            className="
              text-[10px]
              font-medium
              tracking-[6px]
              text-yellow-400
              md:text-xs
            "
          >
            OUR TEAM
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            专业团队
            <br />
            <span className="text-white/90">
              驱动长期投资价值
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              md:text-base
              md:leading-8
            "
          >
            汇聚量化研究、资产配置、风险管理与行业分析人才，
            通过多维度专业能力，为投资决策提供系统支持。
          </p>

        </div>


        {/* ============================= */}
        {/* FEATURED CIO */}
        {/* ============================= */}

        <div
          className="
            relative
            mt-14
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#07111f]/80
            backdrop-blur-xl
          "
        >

          {/* 顶部黄色线 */}
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

          <div
            className="
              grid
              lg:grid-cols-[280px_1fr]
            "
          >

            {/* ================= */}
            {/* 人物视觉 */}
            {/* ================= */}

            <div
              className="
                w-[284px]
                h-[379px]
                bg-cover
                bg-center
                bg-no-repeat
              "
              style={{
                backgroundImage:"url('/images/Jason-Miller.png')",
        }}
            >

              {/* 背景圆 */}
              {/* 
              <div
                className="
                  absolute
                  h-44
                  w-44
                  rounded-full
                  border
                  border-yellow-400/20
                  bg-yellow-400/[0.03]
                  shadow-[0_0_80px_rgba(250,204,21,0.08)]
                "
              />
              */}

              {/* 人物头像占位 */}
              {/*
              <div
                className="
                  relative
                  flex
                  h-28
                  w-28
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-yellow-400/30
                  bg-gradient-to-br
                  from-slate-700
                  to-slate-950
                  shadow-[0_0_40px_rgba(250,204,21,0.08)]
                "
              >
                <UserRound
                  size={48}
                  strokeWidth={1}
                  className="text-yellow-400/80"
                />
              </div>
                 
              <div
                className="
                  absolute
                  bottom-5
                  left-6
                  text-[9px]
                  tracking-[4px]
                  text-slate-600
                "
              >
                QIG / CIO
              </div>
            */}

            </div>


            {/* ================= */}
            {/* CIO 信息 */}
            {/* ================= */}

            <div className="p-7 sm:p-9 lg:p-12">
                <div className="ml-8">
                    <div
                        className="
                        flex
                        flex-col
                        gap-6
                        md:flex-row
                        md:items-start
                        md:justify-between
                        "
                    >

                        <div>

                        <p
                            className="
                            text-[10px]
                            tracking-[4px]
                            text-yellow-400
                            "
                        >
                            CHIEF INVESTMENT OFFICER
                        </p>

                        <h3
                            className="
                            mt-3
                            text-2xl
                            font-bold
                            sm:text-3xl
                            "
                        >
                            Jason Miller
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            杰森·米勒 · 首席投资官
                        </p>

                        </div>

                        <div
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-yellow-400/20
                            bg-yellow-400/[0.05]
                        "
                        >
                        <ArrowUpRight
                            size={18}
                            className="text-yellow-400"
                        />
                        </div>

                    </div>


                    <p
                        className="
                        mt-7
                        max-w-3xl
                        text-sm
                        leading-7
                        text-slate-400
                        md:text-base
                        md:leading-8
                        "
                    >
                        前 Citadel LLC 高级策略分析师与投资组合经理，拥有十余年美股量化策略和风险管理经验，曾管理超 10 亿美元资产。多次荣获“年度卓越分析师”奖项，开发多因子选股模型，显著提升基金收益率。
                    </p>


                    {/* CIO 数据 */}
                    <div
                        className="
                        mt-8
                        grid
                        grid-cols-2
                        gap-4
                        border-t
                        border-white/10
                        pt-7
                        sm:grid-cols-3
                        "
                    >

                        <div>
                        <p className="text-[10px] tracking-[2px] text-slate-600">
                            EXPERIENCE
                        </p>

                        <p className="mt-2 text-sm font-medium text-white">
                            10+ Years
                        </p>
                        </div>

                        <div>
                        <p className="text-[10px] tracking-[2px] text-slate-600">
                            SPECIALIZATION
                        </p>

                        <p className="mt-2 text-sm font-medium text-white">
                            Quant Strategy
                        </p>
                        </div>

                        <div>
                        <p className="text-[10px] tracking-[2px] text-slate-600">
                            FOCUS
                        </p>

                        <p className="mt-2 text-sm font-medium text-white">
                            Risk Management
                        </p>
                        </div>

                    </div>
                </div>
            </div>

          </div>

        </div>


        {/* ============================= */}
        {/* TEAM GRID */}
        {/* ============================= */}

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

          {team.map((member, index) => {

            const Icon = member.icon;

            return (
              <div
                key={member.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-[#07111f]/70
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-yellow-400/30
                  hover:bg-[#091525]
                "
              >

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
                  0{index + 2}
                </div>


                {/* icon */}
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-yellow-400/20
                    bg-yellow-400/[0.05]
                    transition-colors
                    group-hover:border-yellow-400/40
                  "
                >
                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="
                      text-yellow-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>


                {/* 人物 */}
                <div>
                    <div className="mt-7">

                    <h3
                        className="
                        text-lg
                        font-semibold
                        text-white
                        "
                    >
                        {member.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                        {member.nameCn}
                    </p>

                    <div className="mt-4">

                        <p
                        className="
                            text-[10px]
                            tracking-[3px]
                            text-yellow-400/80
                        "
                        >
                        {member.role}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                        {member.roleCn}
                        </p>

                    </div>

                    </div>


                    {/* 描述 */}
                    <p
                    className="
                        mt-5
                        min-h-[72px]
                        text-sm
                        leading-6
                        text-slate-400
                    "
                    >
                    {member.description}
                    </p>
                </div>

                {/* 底部 */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-white/5
                    pt-4
                  "
                >

                  <span
                    className="
                      text-[9px]
                      tracking-[2px]
                      text-slate-600
                    "
                  >
                    {member.focus}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="
                      text-slate-700
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-yellow-400
                    "
                  />

                </div>

              </div>
            );
          })}

        </div>


        {/* ============================= */}
        {/* BOTTOM STATEMENT */}
        {/* ============================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-7
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p
            className="
              max-w-2xl
              text-xs
              leading-6
              text-slate-500
              md:text-sm
            "
          >
            不同领域的专业能力相互协作，
            构建覆盖研究、策略、风险与资产配置的投资体系。
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              text-[10px]
              tracking-[3px]
              text-yellow-400/70
            "
          >
            <span className="h-px w-8 bg-yellow-400/50" />
            QUANTITY INVESTORS GROUP
          </div>
        </div>
      </div>
    </section>
  );
}