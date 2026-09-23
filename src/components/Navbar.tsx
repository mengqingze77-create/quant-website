export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b">

      <h1 className="text-2xl font-bold">
        QIG
      </h1>

      <div className="space-x-8">
        <span>首页</span>
        <span>关于我们</span>
        <span>投资理念</span>
        <span>联系我们</span>
      </div>

    </nav>
  );
}