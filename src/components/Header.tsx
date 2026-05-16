import { TrendingUp } from 'lucide-react'

interface HeaderProps {
  currentPage: string
  setCurrentPage: (page: 'home' | 'dashboard' | 'portfolio' | 'policy') => void
}

function Header({ currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition" onClick={() => setCurrentPage('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-amber-400 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">i3 Investor</h1>
              <p className="text-xs text-blue-300">Smart Wealth</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition ${
                currentPage === 'home'
                  ? 'text-amber-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              首页
            </button>
            <button
              onClick={() => setCurrentPage('dashboard')}
              className={`text-sm font-medium transition ${
                currentPage === 'dashboard'
                  ? 'text-amber-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              仪表板
            </button>
            <button
              onClick={() => setCurrentPage('policy')}
              className={`text-sm font-medium transition ${
                currentPage === 'policy'
                  ? 'text-amber-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              政策
            </button>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
            登录
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
