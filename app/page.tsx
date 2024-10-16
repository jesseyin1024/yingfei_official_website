"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Marquee from 'react-fast-marquee';

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

  const newsItems = [
    {
      title: "荣获第五届全国工业互联网数据创新应用大赛新能源赛道一等奖",
      description: "英飞科技团队在2021年12月参与了第五届全国工业互联网数据创新应用大赛，并荣获新能源赛道的一等奖。凭借公司在新能源数据分析、智能调度等领域的创新解决方案，我们的团队展现了在工业互联网领域的卓越技术实力和领导力，为推动新能源产业的智能化应用作出了重要贡献。",
      date: "2021年12月",
      images: ["/news-image-1-1.png", "/news-image-1-2.png"]
    },
    {
      title: "第三届全国人工智能大赛一等奖获得者",
      description: "2022年7月，英飞科技团队在第三届全国人工智能大赛中勇夺一等奖，证明了公司在人工智能和数据创新领域的深厚积累与技术领先地位。此次获奖方案着重于电力交易策略优化，通过智能算法实现了更加精准高效的电力管理，为推动能源行业的智能化���提供了全新可能。",
      date: "2022年7月",
      images: ["/news-image-2-1.png", "/news-image-2-2.png"]
    }
  ];

  const teamMembers = [
    {
      name: "陈福立",
      position: "创始人兼CEO",
      bio: "毕业于南京航天航空大学硕士，拥有超过12年信息技术行业开发运营经验，连续创业者，曾获得首届中国青年互联网创业大赛金奖。曾于2010年设立创办南京玖佰智能科技有限公司，并孵化了包括'优客里里'、'优般客'、'邦跑跑'、'水运网'在内的多个科技项目，广泛地服务于智能物流及电子商务领域。",
      image: "/person-image-1.png"
    },
    {
      name: "闫惠泽",
      position: "首席技术官",
      bio: "毕业于南京航天航空大学，拥有多年全栈开发经验，曾就职于华为、马达智能数据及帆软软件公司等全球领先的大数据和智能计算行业企业，在创业期间曾获得真格基金千万元初始投资。主要涉及领域包括：大数据BI开发、分布式高性能计算、人工智能算法。",
      image: "/person-image-2.png"
    }
  ];

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
              {["产品与服务", "新闻与活动", "核心团队", "合作伙伴"].map((item) => (
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
          <div className="w-[180px]"></div>
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
            <span 
              onClick={() => scrollToElement('产品与服务')}
              className="text-white text-sm mb-8 cursor-pointer transition-opacity duration-300 hover:opacity-80"
            >
              发现更多
            </span>
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
                content: "基于先进的数据集与超算分析技术，为新能源电站提供功率预测、智能运维和精确调度服务。通过提高发电量预测的准确性，增强电网调度的平衡能力，确保电力供需的稳定，实现风电、光等��生能源的高利用。",
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
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                  />
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

      {/* News & Events Section */}
      <section id="新闻与活动" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">新闻与活动</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    className="mb-8"
                  >
                    {item.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="px-2">
                        <div className="w-full h-64 flex items-center justify-center">
                          <Image 
                            src={img} 
                            alt={`News ${index + 1} image ${imgIndex + 1}`} 
                            width={500}
                            height={300}
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section id="核心团队" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">核心团队</h2>
          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-full md:w-1/3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                  <p className="text-xl text-blue-600 mb-4">{member.position}</p>
                  <p className="text-base leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="合作伙伴" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">合作伙伴</h2>
          {[0, 1].map((row) => (
            <Marquee 
              key={row} 
              direction={row % 2 === 0 ? 'left' : 'right'} 
              speed={30} 
              gradient={false} 
              className="mb-16"
            >
              {[...Array(5)].map((_, index) => (
                <div key={index} className="mx-12">
                  <Image 
                    src={`/partner-logo-${row * 5 + index + 1}.png`} 
                    alt={`Partner ${row * 5 + index + 1}`} 
                    width={96}
                    height={96}
                    className="h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </Marquee>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
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
