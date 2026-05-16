import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">i3 Investor</h3>
            <p className="text-gray-400 text-sm mb-6">
              智能投资管理平台，帮助您实现财富增长目标。
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">产品</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">投资组合管理</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">数据分析</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">风险评估</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">市场洞察</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">资源</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">帮助中心</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">常见问题</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">文档</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">API 文档</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系我们</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@i3investor.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+86-400-123-4567</span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <MapPin size={16} />
                <span>北京市朝阳区</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 i3 Investor. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-blue-400 transition">隐私政策</a>
            <a href="#" className="hover:text-blue-400 transition">服务条款</a>
            <a href="#" className="hover:text-blue-400 transition">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
