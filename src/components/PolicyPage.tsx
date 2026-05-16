import { Shield, FileText, Lock } from 'lucide-react'

function PolicyPage() {
  return (
    <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Dasar dan Syarat-Syarat</h1>
          <p className="text-gray-400 text-lg">Memahami dasar perkhidmatan kami dan perjanjian pengguna</p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="text-blue-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Perlindungan Privasi Pengguna</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Platform i3 Investor berkomitmen untuk melindungi privasi dan maklumat peribadi pengguna. Kami menggunakan teknologi enkripsi terkemuka dalam industri dan langkah-langkah keselamatan untuk memastikan keselamatan data anda. Kami tidak akan mendedahkan maklumat peribadi anda kepada pihak ketiga tanpa kebenaran anda, kecuali diwajibkan oleh undang-undang.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Enkripsi 256-bit peringkat bank</li>
                  <li>✓ Audit keselamatan berkala dan pembaruan</li>
                  <li>✓ Pematuhan dengan peraturan PDPA</li>
                  <li>✓ Pasukan privasi profesional berdedikasi</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-green-500/20 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="text-green-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Syarat-Syarat Perkhidmatan</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Dengan menggunakan platform i3 Investor, anda bersetuju untuk mematuhi syarat perkhidmatan ini. Perkhidmatan yang kami sediakan termasuk pengurusan pelaburan, analisis data, dan nasihat kewangan. Pengguna bertanggungjawab untuk aktiviti akaun mereka dan mesti memastikan semua maklumat yang diberikan adalah tepat dan sah.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Pengguna berusia 18 tahun ke atas boleh menggunakan</li>
                  <li>✓ Larangan aktiviti haram dan penipuan</li>
                  <li>✓ Hak milik penuh terhadap kandungan pengguna</li>
                  <li>✓ Akaun yang melanggar akan dibekukan</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-amber-500/20 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="text-amber-400" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Keselamatan Data dan Pematuhan</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Kami mematuhi piawaian perlindungan data yang paling ketat dan peraturan kewangan. Semua data pengguna disimpan di pelayan yang dilindungi, menggunakan strategi pertahanan berlapis. Kami melakukan penilaian keselamatan berkala dan ujian penembusan untuk mengenal pasti dan membetulkan sebarang kerentanan.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Pensijilan ISO 27001</li>
                  <li>✓ Sokongan pengesahan dua faktor</li>
                  <li>✓ Sistem pemantauan dan amaran masa nyata</li>
                  <li>✓ Sandaran berkala dan pemulihan bencana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4">Penafian</h3>
          <p className="text-gray-300 leading-relaxed">
            Nasihat pelaburan dan analisis yang disediakan oleh platform i3 Investor adalah untuk tujuan rujukan sahaja, bukan nasihat kewangan. Pelaburan melibatkan risiko, dan prestasi masa lalu tidak menjamin hasil masa depan. Sebelum membuat keputusan pelaburan, sila berunding dengan penasihat kewangan profesional. Kami tidak bertanggungjawab atas sebarang kerugian atau kerosakan yang timbul daripada penggunaan platform ini.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
            Setuju dan Lanjutkan
          </button>
        </div>
      </div>
    </div>
  )
}

export default PolicyPage
