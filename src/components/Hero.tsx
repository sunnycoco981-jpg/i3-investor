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
              <p className="text-sm text-blue-300 font-semibold">🚀 Platform Pengurusan Kekayaan yang Revolusioner</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pengurusan Pelaburan
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent"> Tanpa Had</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Dengan platform i3 Investor, nikmati alat pengurusan pelaburan peringkat profesional, analisis data masa nyata, dan sokongan keputusan pintar. Kami berkomitmen untuk menjamin pertumbuhan kekayaan anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition flex items-center gap-2"
              >
                Masuk ke Papan Pemantau <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 border border-blue-500/50 text-white rounded-lg font-semibold hover:bg-blue-500/10 transition">
                Ketahui Lebih Lanjut
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-blue-500/20">
              <div>
                <p className="text-3xl font-bold text-amber-400">50K+</p>
                <p className="text-sm text-gray-400 mt-2">Pengguna Aktif</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">$2.5B</p>
                <p className="text-sm text-gray-400 mt-2">Aset Diuruskan</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-amber-400">99.9%</p>
                <p className="text-sm text-gray-400 mt-2">Ketersediaan</p>
              </div>
            </div>
          </div>
          
          {/* Right - Feature Cards */}
          <div className="grid gap-4">
            <div className="group p-6 bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-2xl hover:border-blue-400/50 transition cursor-pointer">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition">
                <BarChart3 className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Analisis Data Masa Nyata</h3>
              <p className="text-gray-400 text-sm">Dapatkan data pasaran terkini dan laporan analisis pelaburan</p>
            </div>
            
            <div className="group p-6 bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/30 rounded-2xl hover:border-amber-400/50 transition cursor-pointer">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition">
                <Shield className="text-amber-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Keselamatan Boleh Dipercayai</h3>
              <p className="text-gray-400 text-sm">Enkripsi peringkat bank untuk melindungi maklumat pelaburan anda</p>
            </div>
            
            <div className="group p-6 bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-2xl hover:border-green-400/50 transition cursor-pointer">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition">
                <Zap className="text-green-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tindak Balas Pantas</h3>
              <p className="text-gray-400 text-sm">Pelaksanaan perdagangan dalam masa milisaat, jangan lepaskan sebarang peluang</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
