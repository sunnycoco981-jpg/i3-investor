import { ArrowRight, BarChart3, Shield, Zap } from 'lucide-react'

interface HeroProps {
  setCurrentPage: (page: 'home' | 'dashboard' | 'portfolio' | 'policy') => void
}

function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeIn">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <p className="text-sm text-blue-300 font-semibold">🚀 革新的财富管理平台</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              智能投资管理
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent"> 无限可能</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              使用 i3 Investor 平台，享受专业级的投资管理工具、实时数据分析和智能决策支持。我们致力于为您的财富增长保驾护航。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition flex items-center gap-2"
              >
                进入仪表板 <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border border-blue-500/50 text-white rounded-lg font-semibold hover:bg-blue-500/10 transition">
                了解更多
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/20">
              <div>
                <p className="text-3xl font-bold text-amber-400">50K+</p>
                <p className="text-sm text-gray-400 mt-2">活跃用户</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">$2.5B</p>
                <p className="text-sm text-gray-400 mt-2">管理资产</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">99.9%</p>
                <p className="text-sm text-gray-400 mt-2">可用性</p>
              </div>
            </div>
          </div>
          
          {/* Right - Feature Cards */}
          <div className="grid gap-4">
            <div className="group p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl hover:border-blue-400/50 transition cursor-pointer">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition">
                <BarChart3 className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">实时数据分析</h3>
              <p className="text-gray-400 text-sm">获取最新的市场数据和投资分析报告</p>
            </div>
            
            <div className="group p-6 bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-2xl hover:border-amber-400/50 transition cursor-pointer">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition">
                <Shield className="text-amber-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">安全可靠</h3>
              <p className="text-gray-400 text-sm">银行级加密，保护您的投资信息</p>
            </div>
            
            <div className="group p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl hover:border-green-400/50 transition cursor-pointer">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition">
                <Zap className="text-green-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">快速响应</h3>
              <p className="text-gray-400 text-sm">毫秒级交易执行，不错失任何机会</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
