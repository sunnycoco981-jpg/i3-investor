import { LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ArrowUp, ArrowDown } from 'lucide-react'

const chartData = [
  { month: 'Jan', value: 4000, profit: 2400 },
  { month: 'Feb', value: 4500, profit: 2600 },
  { month: 'Mar', value: 5200, profit: 2800 },
  { month: 'Apr', value: 5800, profit: 3200 },
  { month: 'May', value: 6500, profit: 3600 },
  { month: 'Jun', value: 7200, profit: 4200 },
]

const allocationData = [
  { name: 'Saham Teknologi', value: 35 },
  { name: 'Barangan Pengguna', value: 22 },
  { name: 'Perubatan', value: 24 },
  { name: 'Hartanah', value: 19 },
]

const COLORS = ['#0ea5e9', '#f59e0b', '#10b981', '#8b5cf6']

function Dashboard() {
  return (
    <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12 mt-12">Papan Pemantau Pelaburan</h1>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-xl">
            <p className="text-gray-400 text-sm font-semibold mb-2">Jumlah Aset</p>
            <p className="text-3xl font-bold text-white mb-2">$130.2K</p>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <ArrowUp size={16} /> +12.5% bulan ini
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-xl">
            <p className="text-gray-400 text-sm font-semibold mb-2">Pendapatan Bulanan</p>
            <p className="text-3xl font-bold text-white mb-2">$4.8K</p>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <ArrowUp size={16} /> +8.3% berbanding bulan lalu
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-amber-600/20 to-amber-700/20 border border-amber-500/30 rounded-xl">
            <p className="text-gray-400 text-sm font-semibold mb-2">Kadar Pulangan Tahunan</p>
            <p className="text-3xl font-bold text-white mb-2">18.7%</p>
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <ArrowUp size={16} /> Lebih tinggi daripada sasaran 2.1%
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-xl">
            <p className="text-gray-400 text-sm font-semibold mb-2">Skor Penilaian Risiko</p>
            <p className="text-3xl font-bold text-white mb-2">42/100</p>
            <div className="flex items-center gap-1 text-blue-400 text-sm">
              Risiko Sederhana - Seimbang
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Line Chart */}
          <div className="lg:col-span-2 p-6 bg-slate-800/50 border border-blue-500/20 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Arah Aliran Pertumbuhan Aset</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.3)" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={{ fill: '#0ea5e9', r: 4 }}
                  name="Jumlah Aset"
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  dot={{ fill: '#f59e0b', r: 4 }}
                  name="Pendapatan"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="p-6 bg-slate-800/50 border border-blue-500/20 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Peruntukan Aset</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {allocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Area Chart */}
        <div className="p-6 bg-slate-800/50 border border-blue-500/20 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6">Analisis Pendapatan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.3)" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#f59e0b"
                fillOpacity={1}
                fill="url(#colorProfit)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
