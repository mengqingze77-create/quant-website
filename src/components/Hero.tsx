export default function Hero() {
    {/*
    min-h-[650px]
    lg:min-h-screen
    ----去掉换成----
    h-[560px]
    md:h-[600px]
    lg:h-[650px]*即可直接自适应*/}
  return (
    <section className="
    relative
    h-[560px]
    md:h-[600px]
    lg:h-[650px]
    overflow-hidden
    flex items-center
    ">
        {/* 背景图片 */}
        <div className="
        absolute
        inset-0
        bg-cover
        bg-no-repeat
        "
        style={{
            backgroundImage:"url('/images/hero-bg.png')",
            backgroundPosition: "70% center"
        }}
        />

        {/*黑色遮挡物*/}
        <div className="
        absolute
        inset-0 
        bg-gradient-to-r 
        from-[#020817] 
        via-[#020817]/10
        to-transparent
        "/>

        {/*内容 */}
        <div className="
        relative
        z-10
        ml-[5vw]
        max-w-7xl
        translate-y-8
        ">
            <p className="text-yellow-500 tracking-[8px] text-sm mb-8">
                QUANTITY INVESTORS GROUP
            </p>
            <h1 className=" text-white text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
                由此展开，
                <br />
                财富管理的未来
                <span className="text-yellow-400">
                (QIG)
                </span>
            </h1>

            <p className="text-gray-300 text-lg mt-8 max-w-xl leading-loose">
                结合资产管理、量化研究与智能投资技术，
                <br/>
                为投资者提供长期价值解决方案。
            </p>

            <button className="mt-10 px-8 py-3 border border-yellow-300 rounded bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold">
                了解更多 →
            </button>
        </div>
    </section>
  );
}