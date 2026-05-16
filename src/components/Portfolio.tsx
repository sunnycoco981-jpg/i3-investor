import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react'

const portfolioData = [
  {
    id: 1,
    name: '科技股基金',
    symbol: 'TECH',
    value: 45600,
    change: 12.5,
    allocation: 35,
    icon: '📱',
  },
  {
    id: 2,
    name: '消费品指数',
    symbol: 'CONS',
    value: 28400,
    change: 8.2,
    allocation: 22,
    icon: '🛍️',
  },
  {
    id: 3,
    name: '医疗健康',
    symbol: 'HEALTH',
    value: 31200,
    change: 6.8,
    allocation: 24,
    icon: '⚕️',
  },
  {
    id: 4,
    name: '房地产投资',
    symbol: 'REAL',
    value: 24800,
    change: -2.5,
    allocation: 19,
    icon: '🏢',
  },
]

function Portfolio() {
  const totalValue = portfolioData.reduce((sum, item) => sum + item.value, 0)
  const totalChange = portfolioData.reduce((sum, item) => sum + item.change, 0) / portfolioData.length

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-500/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">我的投资组合</h2>
          <p className="text-gray-400 text-lg">实时追踪您的投资表现和资产分配</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-semibold">总资产</p>
              <DollarSign className="text-amber-400" size={24} />
            </div>
            <p className="text-4xl font-bold text-white">${(totalValue / 1000).toFixed(1)}K</p>
            <p className="text-gray-400 text-sm mt-2">所有投资总计</p>
          </div>

          <div className="p-8 bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-semibold">平均收益</p>
              <TrendingUp className="text-green-400" size={24} />
            </div>
            <p className="text-4xl font-bold text-white">{totalChange.toFixed(1)}%</p>
            <p className="text-gray-400 text-sm mt-2">过去30天</p>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 font-semibold">投资笔数</p>
              <DollarSign className="text-purple-400" size={24} />
            </div>
            <p className="text-4xl font-bold text-white">{portfolioData.length}</p>
            <p className="text-gray-400 text-sm mt-2">个不同资产</p>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-xl hover:border-blue-500/50 transition group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.symbol}</p>
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                  item.change >= 0
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-red-500/20 text-red-300'
                }`}>
                  {item.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span className="text-sm font-semibold">{item.change}%</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-2xl font-bold text-white">${(item.value / 1000).toFixed(1)}K</p>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-400 text-sm">资产配置</p>
                  <p className="text-white font-semibold">{item.allocation}%</p>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-amber-400 h-2 rounded-full"
                    style={{ width: `${item.allocation}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
