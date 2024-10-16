import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#0056b3">英飞科技</text>
          </svg>
          <nav className="flex-grow flex justify-center">
            <ul className="flex space-x-6">
              {["产品与服务", "案例研究", "新闻与活动", "核心团队"].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} className="text-gray-600 hover:text-blue-600 transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-[180px]"></div> {/* Placeholder to balance the logo */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <div className="flex flex-col items-center max-w-4xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-10">智慧赋能能源未来，创新驱动电力革命</h1>
            <p className="text-lg md:text-xl font-light max-w-3xl">英飞科技利用前沿AI与超算技术，推动智慧能源发展，共创清洁高效的能源互联未来</p>
          </div>
          <div className="absolute bottom-8 flex flex-col items-center">
            <Link 
              href="#" 
              className="text-white text-sm mb-8 no-underline"
            >
              发现更多
            </Link>
            <ChevronDown className="animate-bounce" size={32} />
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["新能源电站数据服务", "电力交易量化策略", "智能运维"].map((service) => (
              <div key={service} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-600 mb-4">利用先进的AI技术，为客户提供高效、精准的解决方案。</p>
                <Link href="#" className="text-blue-600 hover:underline">了解更多</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">最新动态</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Image src={`/placeholder-${i}.jpg`} alt="News Image" width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">新闻标题 {i}</h3>
                  <p className="text-gray-600 mb-4">新闻简短描述...</p>
                  <Link href="#" className="text-blue-600 hover:underline">阅读更多</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">产品与服务</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">新能源电站数据服务</Link></li>
                <li><Link href="#" className="hover:underline">电力交易量化策略</Link></li>
                <li><Link href="#" className="hover:underline">智能运维</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">案例研究</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">甘肃风电项目</Link></li>
                <li><Link href="#" className="hover:underline">新疆光伏项目</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">关于我们</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">公司简介</Link></li>
                <li><Link href="#" className="hover:underline">团队介绍</Link></li>
                <li><Link href="#" className="hover:underline">加入我们</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">联系我们</h3>
              <p>地址: 北京市海淀区</p>
              <p>电话: 010-12345678</p>
              <p>邮箱: info@yingfei.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 英飞科技. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
