const upcoming = [
  {
    title: 'OpenClawを使って自分だけのAI秘書をつくろう！',
    description: 'オープンソースのAIエージェントフレームワーク「OpenClaw」を使って、自分専用のAI秘書を作るハンズオンワークショップです。',
    logo: '/images/openclaw.png',
    status: 'Coming Soon',
  },
  {
    title: 'GitHub Educationに登録して、Copilotを使おう！',
    description: '学生向け無料プログラム「GitHub Education」に登録し、AIコーディングアシスタント GitHub Copilot を実際に使ってみるハンズオンです。',
    logo: '/images/github-copilot.png',
    status: 'Coming Soon',
  },
  {
    title: '第二回 AIコーディングアイデアコンテスト',
    description: '好評だった第一回に続き、第二回を開催予定。AIツールを使ってアイデアをカタチにしよう。詳細は近日公開。',
    logo: '/images/event-ai-coding.png',
    status: 'Coming Soon',
  },
]

export default function UpcomingActivities() {
  return (
    <section id="upcoming" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-[Outfit] text-xs tracking-[0.2em] uppercase text-[#2B55A8] mb-4">
            // Upcoming Activities
          </p>
          <h2
            className="font-extrabold leading-tight text-[#0A1628]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            これからの活動予定
          </h2>
        </div>

        <div className="space-y-5">
          {upcoming.map((item, i) => (
            <div
              key={i}
              className="bg-[#F5F7FC] border border-[#DDE4EF] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 hover:border-[#2B55A8]/40 hover:shadow-[0_8px_40px_rgba(43,85,168,0.10)] transition-all duration-300"
            >
              {/* Logo */}
              <div className="shrink-0 bg-white rounded-xl p-5 border border-[#DDE4EF] w-48 flex items-center justify-center min-h-[80px]">
                {item.logo
                  ? <img src={item.logo} alt={item.title} className="w-full object-contain" />
                  : <svg width="48" height="48" viewBox="0 0 24 24" fill="#2B55A8"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                }
              </div>

              {/* Info */}
              <div className="flex-1">
                <span className="inline-block font-[Outfit] text-[10px] tracking-widest uppercase bg-[#2B55A8] text-white px-3 py-1 rounded-full mb-4">
                  {item.status}
                </span>
                <h3
                  className="font-extrabold text-[#0A1628] mb-3 leading-tight"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#7A8FAD] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
