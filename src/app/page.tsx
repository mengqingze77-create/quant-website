import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* 导航 */}
      <Navbar />


      {/* 主视觉 */}
      <section className="px-10 py-32">

        <h2 className="text-6xl font-bold max-w-4xl">
          QuantUnity
          <br />
          QuantUnity Investors Group (QIG) 
        </h2>

        <p className="mt-8 text-xl text-gray-600 max-w-xl">
          致力于通过尖端量化投资策略与个人投资者的智慧融合，推动美股、加密货币等多元资产的价值发现与市场创新
        </p>


        <button className="mt-10 px-8 py-4 bg-black text-white rounded">
          了解更多
        </button>

      </section>


      {/* 公司介绍 */}
      <section className="px-10 py-20 bg-gray-100">

        <h3 className="text-4xl font-bold">
          About QIG
        </h3>

        <p className="mt-5 max-w-2xl text-gray-600">
          我们结合数据分析、金融研究和风险管理，
          构建现代化投资体系。
        </p>

      </section>


      {/* 服务 */}
      <section className="px-10 py-20">

        <h3 className="text-4xl font-bold">
          Our Services
        </h3>

        <div className="grid grid-cols-3 gap-8 mt-10">

          <div className="border p-8">
            Asset Management
          </div>

          <div className="border p-8">
            Quant Strategy
          </div>

          <div className="border p-8">
            Risk Management
          </div>

        </div>

      </section>


      <footer className="px-10 py-10 border-t">
        © 2026 QIG Investment Group
      </footer>
      
    </main>
  );
}