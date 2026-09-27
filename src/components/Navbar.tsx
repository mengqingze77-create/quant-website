export default function Navbar() {
  return (
    <nav
      className="
        absolute
        top-0
        left-0
        right-0
        z-50
        flex
        justify-between
        items-center
        px-8
        lg:px-10
        py-4
        text-white
        bg-black/20
        backdrop-blur-sm
      "
    >

      {/* Logo */}
      <h1 className="text-xl font-bold">
        QIG
      </h1>
      

      {/* 
      <a
        href="#home"
        className="text-xl font-bold"
      >
        QIG
      </a>
      */}

      {/* 导航
      <div className="flex items-center gap-8 text-sm">

        <span className="cursor-pointer hover:text-yellow-400 transition">
          首页
        </span>

        <span className="cursor-pointer hover:text-yellow-400 transition">
          关于我们
        </span>

        <span className="cursor-pointer hover:text-yellow-400 transition">
          投资理念
        </span>

        <span className="cursor-pointer hover:text-yellow-400 transition">
          联系我们
        </span>

      </div>
     */}

    <div className="space-x-8">
        <a href="#home">首页</a>
        <a href="#portfolio">投资表现</a>
        <a href="#track-record">历史表现</a>
        <a href="#testimonials">客户评价</a>
        <a href="#pricing">合作模式</a>
        <a href="#contact">联系我们</a>
    </div>

    </nav>
  );
}