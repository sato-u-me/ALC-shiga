const events = [
  {
    title: 'AIコーディングアイデアコンテスト',
    period: '2025年11月 〜 2026年1月',
    description: 'AIコーディングツール "Lovable" を用いたアプリ開発コンテスト。コーディング未経験者も大歓迎。約30名ほど参加し、自分の考えたアイデアをAIを使って実装し、webアプリケーションを発表しました。',
    tags: ['コンテスト', 'Lovable', 'アプリ開発'],
    poster: '/images/event-ai-coding.png',
    photos: [
      '/images/event-photo1.jpg',
      '/images/event-photo2.jpg',
    ],
  },
]

export default function PastActivities() {
  return (
    <section id="activities" className="py-28 bg-[#F5F7FC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="font-[Outfit] text-xs tracking-[0.2em] uppercase text-[#2B55A8] mb-4">
            // Past Activities
          </p>
          <h2
            className="font-extrabold leading-tight text-[#0A1628]"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: "'Noto Sans JP', sans-serif" }}
          >
            これまでの活動
          </h2>
        </div>

        {events.map((event, i) => (
          <div key={i} className="bg-white rounded-2xl border border-[#DDE4EF] overflow-hidden grid md:grid-cols-[1fr_1.4fr]">

            {/* 左: ポスター */}
            <div className="overflow-hidden">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* 右: 情報 + 写真 */}
            <div className="flex flex-col border-l border-[#DDE4EF]">
              {/* 情報 */}
              <div className="p-8 md:p-10 flex-1">
                <p className="font-[Outfit] text-xs tracking-widest uppercase text-[#2B55A8] mb-3">
                  {event.period}
                </p>
                <h3
                  className="font-extrabold text-[#0A1628] mb-4 leading-tight"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.8rem)', fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {event.title}
                </h3>
                <p className="text-[#7A8FAD] text-sm leading-relaxed mb-6">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-[Outfit] text-xs px-3 py-1 rounded-full bg-[#EEF3FB] text-[#2B55A8] border border-[#2B55A8]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 写真グリッド */}
              <div className="grid grid-cols-2 border-t border-[#DDE4EF]">
                {event.photos.map((photo, j) => (
                  <div
                    key={j}
                    className={`overflow-hidden ${j === 0 ? 'border-r border-[#DDE4EF]' : ''}`}
                    style={{ height: '200px' }}
                  >
                    <img
                      src={photo}
                      alt={`写真${j + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
