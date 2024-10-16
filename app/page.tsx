"use client";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // Show button when scrolled down 300px or near the bottom of the page
      if (scrollY > 300 || (pageHeight - (scrollY + viewportHeight) < 100)) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div onClick={scrollToTop} className="cursor-pointer">
            <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
              <text x="10" y="40" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#0056b3">英飞科技</text>
            </svg>
          </div>
          <nav className="flex-grow flex justify-center">
            <ul className="flex space-x-6">
              {["产品与服务", "案例研究", "新闻与活动", "核心团队"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToElement(item);
                    }}
                    className="text-gray-600 hover:text-blue-600 transition duration-300 cursor-pointer"
                  >
                    {item}
                  </a>
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
            <p className="text-lg md:text-xl font-light max-w-3xl">英飞科技利用前沿AI与超算技术，推动智慧能源发展，共创清洁高效的能联未来</p>
          </div>
          <div className="absolute bottom-8 flex flex-col items-center">
            <a 
              onClick={(e) => {
                e.preventDefault();
                scrollToElement('产品与服务');
              }}
              className="text-white text-sm mb-8 no-underline hover:underline cursor-pointer"
            >
              发现更多
            </a>
            <ChevronDown 
              className="animate-bounce cursor-pointer" 
              size={32} 
              onClick={() => scrollToElement('产品与服务')}
            />
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section id="产品与服务" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">产品与服务</h2>
          <div className="space-y-32">
            {[
              {
                title: "智能电力交易策略系统",
                content: "利用超算和人工智能技术，为客户提供高效的量化电力交易策略，通过对电力市场的趋势进行实时分析和预测，帮助市场参与者提高盈利能力，降低运营成本。系统适用于新能源电站、火电、储能等多种场景，助力实现精准、高效的电力交易。",
                image: "/placeholder-image-1.jpg"
              },
              {
                title: "新能源数据服务与智能调度",
                content: "基于先进的数据采集与超算分析技术，为新能源电站提供功率预测、智能运维和精确调度服务。通过提高发电量预测的准确性，增强电网调度的平衡能力，确保电力供需的稳定，实现风电、光伏等可再生能源的高效利用。",
                image: "/placeholder-image-2.jpg"
              },
              {
                title: "智能硬件与设备数据分析",
                content: "与设备厂商深度合作，通过数据分析了解设备运行特征，优化产品性能，提高产品的智能化程度。结合AI技术，为设备厂商提供设备运维数据支持，提升设备的竞争力，助力实现电站和智能硬件的高效运维。",
                image: "/placeholder-image-3.jpg"
              }
            ].map((service, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-3/4 z-10">
                  <img src={service.image} alt={service.title} className="w-full h-auto object-cover rounded-lg shadow-xl" />
                </div>
                <div className={`w-1/2 bg-white p-8 rounded-lg shadow-lg absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} top-1/2 transform -translate-y-1/2 z-20`}>
                  <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  <p className="text-base leading-relaxed">{service.content}</p>
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

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
