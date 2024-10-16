import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="25" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="#0056b3">英飞科技</text>
          </svg>
          <nav>
            <ul className="flex space-x-6">
              {["主页", "产品与服务", "案例研究", "新闻与活动", "关于我们", "联系我们"].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} className="text-gray-600 hover:text-blue-600 transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="主页" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">引领人工智能计算的未来</h1>
          <p className="text-xl mb-8">英飞科技致力于为新能源行业提供智能化解决方案</p>
          <Link href="#产品与服务" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            了解更多
          </Link>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="产品与服务" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">我们的产品与服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["新能源电站数据服务", "电力交易量化策略", "智能运维"].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600">利用先进的AI技术，为客户提供高效、精准的解决方案。</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="案例研究" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">成功案例</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["甘肃风电项目", "新疆光伏项目"].map((project) => (
              <div key={project} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{project}</h3>
                <p className="text-gray-600 mb-4">通过我们的AI解决方案，显著提高了项目效率和收益。</p>
                <Link href="#" className="text-blue-600 hover:underline">查看详情</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section id="新闻与活动" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">新闻与活动</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">英飞科技荣获全国工业互联网数据创新应用大赛新能源赛道一等奖</h3>
              <p className="text-gray-600">这一荣誉彰显了我们在新能源领域的创新能力和技术实力。</p>
            </div>
            {/* Add more news items here */}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="关于我们" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">关于英飞科技</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            英飞科技是一家专注于人工智能计算和新能源领域的高科技公司。我们致力于通过创新技术推动行业发展，为客户创造更大价值。
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="联系我们" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">联系我们</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="姓名" className="w-full p-2 border rounded" />
              <input type="email" placeholder="邮箱" className="w-full p-2 border rounded" />
              <textarea placeholder="留言" className="w-full p-2 border rounded" rows={4}></textarea>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                发送
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 英飞科技. 保留所有权利。</p>
        </div>
      </footer>
    </div>
  );
}
