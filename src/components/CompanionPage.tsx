const companions = [
  { name: '小雨一直学', status: '直播中', statusType: 'live', day: 'Day 1', lesson: '认识 AI', initial: '雨', avatar: '/assets/p3man1.png' },
  { name: '阿泽', status: '学习中', statusType: 'learning', day: 'Day 2', lesson: '学会写有效 Prompt', initial: '泽', avatar: '/assets/p3man2.png' },
  { name: 'Luna', status: '学习中', statusType: 'learning', day: 'Day 1', lesson: '认识 AI', initial: 'L', avatar: '/assets/p3man3.png' },
  { name: 'Kevin', status: '学习中', statusType: 'learning', day: 'Day 3', lesson: '做出真实成果', initial: 'K', avatar: '/assets/p3man4.png' },
  { name: 'Mia', status: '学习中', statusType: 'learning', day: 'Day 2', lesson: 'Prompt 练习', initial: 'M' },
  { name: '橙子', status: '学习中', statusType: 'learning', day: 'Day 1', lesson: 'AI 工具清单', initial: '橙' },
  { name: 'Jason', status: '学习中', statusType: 'learning', day: 'Day 3', lesson: '发布作品', initial: 'J' },
];

const works = [
  {
    author: '阿泽',
    likes: 125,
    title: '用 AI 写的周报',
    desc: '用 AI 帮我快速整理数据和思路，效率翻倍！',
    category: '职场应用',
    initial: '泽',
    coverClass: 'cover-blue',
    cover: '/assets/p3v1.png',
    url: 'https://v.douyin.com/YShq1LOkRKo/',
  },
  {
    author: 'Luna',
    likes: 98,
    title: '职场汇报 PPT',
    desc: '用 AI 生成的封面和排版，领导都夸好看！',
    category: '创意表达',
    initial: 'L',
    coverClass: 'cover-purple',
    cover: '/assets/p3v2.png',
    url: 'https://v.douyin.com/SzvPaQREVFc/',
  },
  {
    author: 'Kevin',
    likes: 76,
    title: 'Excel 数据分析',
    desc: '透视表 + 图表，让数据一目了然！',
    category: '数据处理',
    initial: 'K',
    coverClass: 'cover-green',
    cover: '/assets/p3v3.png',
    url: 'https://v.douyin.com/nZTAtwT8K9A/',
  },
];

const tabs = ['全部', 'AI 工具使用', '职场应用', '创意表达', '数据处理'];

export function CompanionPage() {
  return (
    <article className="companion-page" aria-label="学习伙伴学习页">
      <div className="companion-stars" aria-hidden="true" />
      <CompanionTopBar />

      <div className="companion-scroll">
        <CompanionHero />
        <CompanionList />
        <PracticeWorks />
        <PublishWorkButton />
      </div>
    </article>
  );
}

function CompanionTopBar() {
  return (
    <header className="companion-topbar">
      <button className="companion-icon companion-back" aria-label="返回" />
      <strong>学习伙伴</strong>
      <div className="companion-actions">
        <button className="companion-icon companion-search" aria-label="搜索" />
        <button className="companion-icon companion-share" aria-label="分享" />
      </div>
    </header>
  );
}

function CompanionHero() {
  return (
    <section className="companion-hero">
      <div className="companion-hero-copy">
        <h1>
          <span className="hero-title-line">
            有 <span className="highlight">3284</span> 人正在
          </span>
          <span className="hero-title-line">和你学同一条路线</span>
        </h1>
        <p>3 天 AI 工具入门路线</p>
        <div className="hero-learners">
          <span className="mini-avatar avatar-a">雨</span>
          <span className="mini-avatar avatar-b">泽</span>
          <span className="mini-avatar avatar-c">L</span>
          <em>3284 人正在学习中</em>
          <i aria-hidden="true" />
        </div>
      </div>
      <div className="hero-planet" aria-hidden="true">
        <span className="flag-pole" />
        <span className="flag-cloth">AI</span>
        <span className="astro-body" />
        <span className="astro-head" />
        <span className="planet-surface" />
      </div>
    </section>
  );
}

function CompanionList() {
  return (
    <section className="companion-section glassy-section">
      <SectionHeader title="学习伙伴" action="全部伙伴" />
      <div className="companion-row" data-carousel-lock aria-label="学习伙伴学习卡片">
        {companions.map((person, index) => (
          <article className="companion-person-card" key={person.name}>
            <div className={`companion-avatar avatar-tone-${index + 1}`}>
              {'avatar' in person ? <img src={person.avatar} alt={person.name} /> : person.initial}
            </div>
            <span className={`status-pill ${person.statusType}`}>{person.status}</span>
            <strong>{person.name}</strong>
            <p>
              {person.day} · {person.lesson}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PracticeWorks() {
  return (
    <section className="companion-section glassy-section">
      <SectionHeader title="看看别人学习后的实践作品" action="全部作品" />
      <div className="work-tabs" data-carousel-lock aria-label="作品分类">
        {tabs.map((tab, index) => (
          <button className={index === 0 ? 'active' : ''} key={tab}>
            {tab}
          </button>
        ))}
      </div>
      <div className="work-row" data-carousel-lock aria-label="实践作品列表">
        {works.map((work) => (
          <a
            className="work-card"
            data-carousel-lock
            href={work.url}
            key={work.title}
            target="_blank"
            rel="noreferrer"
          >
            <div className={`work-cover ${work.coverClass}`}>
              <img src={work.cover} alt="" aria-hidden="true" />
              <em>{work.category}</em>
            </div>
            <div className="work-meta">
              <span className="work-author">
                <i>{work.initial}</i>
                {work.author}
              </span>
              <span className="work-likes">
                <b aria-hidden="true" />
                {work.likes}
              </span>
            </div>
            <h3>{work.title}</h3>
            <p>{work.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function PublishWorkButton() {
  return (
    <button className="publish-work-button" type="button" onClick={() => console.log('publish practice work')}>
      <span aria-hidden="true" />
      <strong>
        发布我的实践作品
        <em>分享你的学习成果，帮助更多学习伙伴</em>
      </strong>
    </button>
  );
}

function SectionHeader({ title, action }: { title: string; action: string }) {
  return (
    <header className="companion-section-header">
      <h2>{title}</h2>
      <button>
        {action}
        <span aria-hidden="true" />
      </button>
    </header>
  );
}
