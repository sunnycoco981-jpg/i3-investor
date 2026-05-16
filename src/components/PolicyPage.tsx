import { Shield, FileText, Lock } from 'lucide-react'

function PolicyPage() {
  return (
    <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">政策和条款</h1>
          <p className="text-gray-400 text-lg">了解我们的服务政策和用户协议</p>
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
                <h2 className="text-2xl font-bold text-white mb-4">用户隐私保护</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  i3 Investor 平台致力于保护用户的隐私和个人信息。我们采用行业领先的加密技术和安全措施，确保您的数据安全。我们不会未经授权向第三方披露您的个人信息，除非法律要求。
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ 银行级 256-bit 加密</li>
                  <li>✓ 定期安全审计和更新</li>
                  <li>✓ GDPR 和相关法规合规</li>
                  <li>✓ 专业隐私团队维护</li>
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
                <h2 className="text-2xl font-bold text-white mb-4">服务条款</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  通过使用 i3 Investor 平台，您同意遵守本服务条款。我们提供的服务包括投资管理、数据分析和财务建议等功能。用户需要为其账户活动负责，并确保提供准确的信息。
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ 18岁以上用户可使用</li>
                  <li>✓ 禁止非法活动和欺诈</li>
                  <li>✓ 用户内容所有权保留</li>
                  <li>✓ 违规账户将被冻结</li>
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
                <h2 className="text-2xl font-bold text-white mb-4">数据安全和合规</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  我们遵循最严格的数据保护标准和金融规范。所有用户数据存储在受保护的服务器上，采用多层防御策略。我们定期进行安全评估和渗透测试。
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ ISO 27001 认证</li>
                  <li>✓ 双因素认证支持</li>
                  <li>✓ 实时监控和告警系统</li>
                  <li>✓ 定期备份和灾难恢复</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-8 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4">免责声明</h3>
          <p className="text-gray-300 leading-relaxed">
            i3 Investor 平台提供的投资建议和分析仅供参考，不构成金融建议。投资涉及风险，过去的表现不能保证未来的结果。在做出投资决定前，请咨询专业的财务顾问。我们不对因使用本平台而产生的任何损失或损害承担责任。
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition">
            同意并继续
          </button>
        </div>
      </div>
    </div>
  )
}

export default PolicyPage
