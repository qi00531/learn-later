const summaryStats = [
  { label: '本周完成路线', value: '1', unit: '条', icon: 'route' },
  { label: '学习时长', value: '32', unit: '分钟', icon: 'clock' },
  { label: '已完成小任务', value: '3', unit: '个', icon: 'task' },
  { label: '点亮技能', value: '2', unit: '项', icon: 'star' },
];

const resultWorks = [
  { index: '01', title: 'AI 写周报模板', tag: 'AI 工具', tone: 'result-cover-a', cover: '/assets/p4v1.png' },
  { index: '02', title: '自我介绍 PPT', tag: '职场表达', tone: 'result-cover-b', cover: '/assets/p4v2.png' },
  { index: '03', title: '高质量 Prompt', tag: 'AI 提示词', tone: 'result-cover-c', cover: '/assets/p4v3.png' },
  { index: '04', title: '剪辑转场练习', tag: '剪辑技能', tone: 'result-cover-d', cover: '/assets/p4v4.png' },
];

export function LearningResultPage() {
  return (
    <article className="result-page" aria-label="学习成果页面">
      <div className="result-stars" aria-hidden="true" />
      <ResultTopBar />

      <div className="result-content">
        <ResultHero />
        <SummaryStats />
        <RepresentativeWorks />
        <GrowthFeedback />
        <ShareResultButton />
      </div>
    </article>
  );
}

function ResultTopBar() {
  return (
    <header className="result-topbar">
      <button className="result-icon result-back" aria-label="返回" />
      <strong>学习成果</strong>
      <button className="result-icon result-open" aria-label="分享成果" />
    </header>
  );
}

function ResultHero() {
  return (
    <section className="result-hero">
      <div className="result-hero-copy">
        <h1>
          <span className="result-title-line">
            你已经把 <span>12</span> 条收藏视频
          </span>
          <span className="result-title-line">
            变成了 <span>1</span> 个作品
          </span>
        </h1>
        <p>每一次学习，都在让你成为更好的自己 ✨</p>
      </div>
      <div className="result-astro" aria-hidden="true">
        <span className="result-galaxy" />
        <span className="result-wand" />
        <span className="result-helmet" />
        <span className="result-suit" />
        <span className="result-planet" />
      </div>
    </section>
  );
}

function SummaryStats() {
  return (
    <section className="result-section result-glass">
      <h2>阶段成果总结</h2>
      <div className="result-stat-grid">
        {summaryStats.map((stat) => (
          <article className="result-stat" key={stat.label}>
            <span className={`result-stat-icon ${stat.icon}`} aria-hidden="true" />
            <em>{stat.label}</em>
            <strong>
              {stat.value}
              <small>{stat.unit}</small>
            </strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function RepresentativeWorks() {
  return (
    <section className="result-section result-glass">
      <h2>我的实践作品</h2>
      <div className="result-work-row" data-carousel-lock aria-label="代表性成果列表">
        {resultWorks.map((work) => (
          <article
            className="result-work-card"
            key={work.index}
            role="button"
            tabIndex={0}
            onClick={() => console.log('open result work', work.title)}
          >
            <div className={`result-cover ${work.tone}`}>
              <img src={work.cover} alt="" aria-hidden="true" />
              <b>{work.index}</b>
            </div>
            <strong>{work.title}</strong>
            <em>{work.tag}</em>
          </article>
        ))}
      </div>
    </section>
  );
}

function GrowthFeedback() {
  return (
    <section className="result-section result-glass growth-section">
      <h2>自我成长反馈</h2>
      <article className="growth-row">
        <div className="progress-ring" aria-label="超过 76%">
          <span>76%</span>
        </div>
        <div className="growth-copy">
          <strong>你在 AI 工具方向</strong>
          <p>超过了 76% 的同类学习者</p>
          <em>继续保持，你很棒！</em>
        </div>
        <div className="mini-bars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
      </article>

      <article className="growth-row">
        <span className="growth-icon beacon" aria-hidden="true" />
        <div className="growth-copy">
          <strong>你的作品正在助力别人航行</strong>
          <p>分享教程和实践项目，让更多同路人少走弯路</p>
        </div>
        <div className="impact-metrics" aria-label="作品影响力">
          <span>👁 1284</span>
          <span>👍 326</span>
          <span>⭐ 89</span>
        </div>
      </article>

      <article className="growth-row">
        <span className="growth-icon star" aria-hidden="true" />
        <div className="growth-copy">
          <strong>再完成 1 个任务，</strong>
          <p>就能点亮 “AI 入门” 星星</p>
          <div className="result-progress">
            <i />
            <em>4/5</em>
          </div>
        </div>
        <div className="mini-constellation" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <b />
        </div>
      </article>
    </section>
  );
}

function ShareResultButton() {
  return (
    <button className="share-result-button" type="button" onClick={() => console.log('share result')}>
      <span className="share-mark" aria-hidden="true" />
      <strong>
        分享我的成果
        <em>让更多同路人看到你的成长</em>
      </strong>
      <i aria-hidden="true" />
    </button>
  );
}
