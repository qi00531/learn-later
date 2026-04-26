import type { LearnCardData, LearnNode } from '../data/cards';
import { CompanionPage } from './CompanionPage';
import { LearningResultPage } from './LearningResultPage';

interface LearnCardProps {
  card: LearnCardData;
}

export function LearnCard({ card }: LearnCardProps) {
  if (card.type === 'route') {
    return <RouteFeatureCard card={card} />;
  }

  if (card.type === 'starMap') {
    return <SkillMapReferenceCard card={card} />;
  }

  if (card.type === 'social') {
    return <CompanionPage />;
  }

  if (card.type === 'task') {
    return <LearningResultPage />;
  }

  return (
    <article className={`learn-card ${card.backgroundClass} card-${card.type}`}>
      <div className="card-stars" aria-hidden="true" />
      <div className="card-content">
        <header className="card-hero">
          <span className="card-eyebrow">{card.eyebrow}</span>
          <h1>{card.title}</h1>
          <p>{card.subtitle}</p>
          <span className="card-tag">{card.tag}</span>
        </header>

        <div className="visual-stage">{renderVisual(card)}</div>

        <section className="glass-panel card-panel">
          {renderPanel(card)}
          <div className="card-actions">
            <button className="secondary-action">{card.buttons[0]}</button>
            <button className="primary-action">{card.buttons[1]}</button>
          </div>
        </section>
      </div>
    </article>
  );
}

function SkillMapReferenceCard({ card }: LearnCardProps) {
  return (
    <article className={`learn-card ${card.backgroundClass} card-starMap skill-reference-card`}>
      <img className="skill-reference-bg" src="/assets/p2.png" alt="" aria-hidden="true" />
      <div className="skill-reference-shade" aria-hidden="true" />
      <div className="skill-reference-content">
        <header className="skill-reference-top">
          <button className="skill-plain-icon" aria-label="返回">
            ‹
          </button>
          <span>技能星图</span>
          <button className="skill-plain-icon" aria-label="打开详情">
            ↗
          </button>
        </header>

        <section className="skill-reference-hero">
          <h1>你已经在宇宙中探索了7颗星</h1>
          <div className="skill-legend">
            <span className="done">已点亮</span>
            <span className="active">学习中</span>
            <span className="locked">已收藏未开始</span>
          </div>
        </section>

        <section className="skill-map-crop" aria-label="技能星图">
          <img src="/assets/p2.png" alt="技能星图" />
        </section>

        <div className="skill-action-stack">
          <SkillActionModule
            label="继续学习"
            skill="视频剪辑"
            comment="富贵花开：这个技巧真的太牛逼了！膜拜大佬！"
            videoTitle="视频剪辑转场入门"
            cover="/assets/p2v1.png"
            url="https://v.douyin.com/XT3i-AGVqG8/"
            tone="active"
          />
          <SkillActionModule
            label="探索未知"
            skill="摄影技巧"
            comment="小熊软糖：兄弟们，又又又被对象说拍照丑，怎么办？"
            videoTitle="手机摄影构图技巧"
            cover="/assets/p2v2.png"
            url="https://v.douyin.com/tigYkyX2RaY/"
            tone="locked"
          />
        </div>
      </div>
    </article>
  );
}

function SkillActionModule({
  label,
  skill,
  comment,
  videoTitle,
  cover,
  url,
  tone,
}: {
  label: string;
  skill: string;
  comment: string;
  videoTitle: string;
  cover: string;
  url: string;
  tone: 'active' | 'locked';
}) {
  return (
    <section className={`skill-action-module glass-panel ${tone}`}>
      <div className="skill-action-copy">
        <span>
          {label}<b>{skill}</b>
        </span>
        <p>{comment}</p>
      </div>
      <a
        className="skill-action-video"
        data-carousel-lock
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <img src={cover} alt="" aria-hidden="true" />
          <span>▶</span>
          <em>04:18</em>
        </div>
        <strong>{videoTitle}</strong>
      </a>
    </section>
  );
}

function RouteFeatureCard({ card }: LearnCardProps) {
  return (
    <article className={`learn-card ${card.backgroundClass} card-route feature-route-card`}>
      <div className="card-stars" aria-hidden="true" />
      <div className="route-feature-content">
        <header className="route-feature-hero">
          <div>
            <h1>
              你收藏的 23 条
              <br />
              AI 工具视频
            </h1>
            <p>{card.subtitle}</p>
          </div>
        </header>

        <section className="route-constellation" aria-label="AI 学习主题概览">
          <img className="route-map-image" src="/assets/p1_skill_map.png" alt="AI 学习主题星图" />
        </section>

        <RouteLearningPanel card={card} />
      </div>
    </article>
  );
}

function KnowledgeNode({ node, index }: { node: LearnNode; index: number }) {
  return (
    <div className={`knowledge-node knowledge-${index + 1} ${node.status}`}>
      <span className="knowledge-star" aria-hidden="true" />
      <div className="knowledge-label">
        <strong>{node.label}</strong>
        <em>{node.meta}</em>
      </div>
    </div>
  );
}

const featuredVideos = [
  {
    title: '3 分钟看懂 AI 工具分类',
    time: '03:12',
    className: 'thumb-blue',
    cover: '/assets/p1v1.png',
    url: 'https://v.douyin.com/SzIpd5i_VhI/',
  },
  {
    title: '小白也能学会的 Prompt 技巧',
    time: '05:36',
    className: 'thumb-gold',
    cover: '/assets/p1v2.png',
    url: 'https://v.douyin.com/bVx18V3vZ8Y/',
  },
  {
    title: '用 AI 快速写出一页 PPT',
    time: '04:18',
    className: 'thumb-purple',
    cover: '/assets/p1v3.png',
    url: 'https://v.douyin.com/SSTh9vVEkcM/',
  },
];

const routeComments = [
  '终于知道收藏夹怎么学起来了',
  '这条路线比我自己瞎刷效率高很多',
  'Day 2 的 Prompt 内容特别实用',
  '视频不长，学起来没有压力',
];

function RouteLearningPanel({ card }: LearnCardProps) {
  return (
    <section className="glass-panel route-learning-panel" aria-label="自动生成学习路线">
      <header className="route-panel-header">
        <div>
          <span className="panel-title-mini">✦ 自动生成学习路线</span>
          <h2>3 天 AI 工具入门路线</h2>
        </div>
        <div className="learner-count">
          <span className="avatar-stack-mini">
            <i />
            <i />
            <i />
          </span>
          <strong>3284 人正在学</strong>
        </div>
      </header>

      <div className="route-panel-body">
        <div className="day-list-large">
          {card.sections.map((section, index) => {
            const [videoCount, duration] = section.meta?.split(' · ') ?? ['', ''];
            return (
              <article className={`day-card-large day-${index + 1}`} key={section.label}>
                <span className="day-dot" aria-hidden="true" />
                <div className="day-main">
                  <span>{section.label}</span>
                  <strong>{section.value}</strong>
                  <div className="day-meta">
                    <em>{videoCount}</em>
                    <em>{duration ? `预计 ${duration.replace('预计 ', '')}` : ''}</em>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="featured-videos" aria-label="精选视频">
          <div className="featured-title">精选视频</div>
          {featuredVideos.map((video) => (
            <a
              className="video-thumb-card"
              data-carousel-lock
              href={video.url}
              key={video.title}
              target="_blank"
              rel="noreferrer"
            >
              <div className={`video-thumb ${video.className}`}>
                <img src={video.cover} alt="" aria-hidden="true" />
                <span>▶</span>
                <em>{video.time}</em>
              </div>
              <strong>{video.title}</strong>
            </a>
          ))}
        </aside>
      </div>

      <div className="route-comments" aria-label="用户反馈">
        {routeComments.map((comment) => (
          <span key={comment}>“{comment}”</span>
        ))}
      </div>
    </section>
  );
}

function renderVisual(card: LearnCardData) {
  if (card.type === 'route') {
    return (
      <div className="route-visual" aria-hidden="true">
        <div className="daily-chip">
          <span>今日学习</span>
          <strong>25</strong>
          <em>分钟</em>
        </div>
        <span className="galaxy-core" />
        <span className="rocket">▶</span>
        {card.nodes.map((node, index) => (
          <NodeBubble key={node.label} node={node} index={index} />
        ))}
      </div>
    );
  }

  if (card.type === 'starMap') {
    return (
      <div className="star-map-visual" aria-hidden="true">
        <span className="orbit-line orbit-a" />
        <span className="orbit-line orbit-b" />
        <span className="astronaut">✦</span>
        {card.nodes.map((node, index) => (
          <NodeBubble key={node.label} node={node} index={index} />
        ))}
      </div>
    );
  }

  if (card.type === 'tree') {
    return (
      <div className="tree-visual" aria-hidden="true">
        <span className="galaxy-core large">AI 工具<br />入门星系</span>
        {card.nodes.map((node, index) => (
          <NodeBubble key={node.label} node={node} index={index} />
        ))}
      </div>
    );
  }

  if (card.type === 'task') {
    return (
      <div className="task-visual" aria-hidden="true">
        <div className="timer-ring">5</div>
        <div className="task-ladder">
          {card.nodes.map((node, index) => (
            <span key={node.label} className={`task-step ${node.status}`}>
              <i>{index + 1}</i>
              {node.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="social-visual" aria-hidden="true">
      <span className="planet-ground" />
      <span className="astronaut social-astro">⚑</span>
      <div className="social-orbit">
        {card.nodes.map((node, index) => (
          <NodeBubble key={node.label} node={node} index={index} compact />
        ))}
      </div>
    </div>
  );
}

function renderPanel(card: LearnCardData) {
  if (card.type === 'route') {
    return (
      <>
        <div className="panel-title">自动生成学习路线</div>
        <div className="timeline-list">
          {card.sections.map((section) => (
            <div className="timeline-row" key={section.label}>
              <span>{section.label}</span>
              <strong>{section.value}</strong>
              <em>{section.meta}</em>
              <button aria-label={`播放 ${section.label}`}>▶</button>
            </div>
          ))}
        </div>
      </>
    );
  }

  if (card.type === 'starMap') {
    return (
      <>
        <div className="panel-title">本周学习概览</div>
        <div className="metric-grid">
          {card.sections.map((section) => (
            <div className="metric-card" key={section.label}>
              <span>{section.label}</span>
              <strong>{section.value}</strong>
              {section.meta ? <em>{section.meta}</em> : null}
            </div>
          ))}
        </div>
      </>
    );
  }

  if (card.type === 'tree') {
    return (
      <>
        <div className="panel-title">推荐下一步</div>
        <div className="next-task">
          <span className="task-icon">✦</span>
          <div>
            <strong>{card.sections[0].value}</strong>
            <em>{card.sections[0].meta}</em>
          </div>
        </div>
        <div className="metric-grid three">
          {card.sections.slice(1).map((section) => (
            <div className="metric-card" key={section.label}>
              <span>{section.label}</span>
              <strong>{section.value}</strong>
              {section.meta ? <em>{section.meta}</em> : null}
            </div>
          ))}
        </div>
      </>
    );
  }

  if (card.type === 'task') {
    return (
      <>
        <div className="panel-title">今日任务与复习</div>
        <div className="compact-list">
          {card.sections.map((section) => (
            <div key={section.label}>
              <span>{section.label}</span>
              <strong>{section.value}</strong>
              {section.meta ? <em>{section.meta}</em> : null}
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="panel-title">同路人与成果</div>
      <div className="peer-strip">
        {card.nodes.map((node) => (
          <div className="peer-card" key={node.label}>
            <span>{node.label.slice(0, 1)}</span>
            <strong>{node.label}</strong>
            <em>{node.meta}</em>
          </div>
        ))}
      </div>
      <div className="compact-list social-list">
        {card.sections.slice(1).map((section) => (
          <div key={section.label}>
            <span>{section.label}</span>
            <strong>{section.value}</strong>
          </div>
        ))}
      </div>
    </>
  );
}

function NodeBubble({ node, index, compact = false }: { node: LearnNode; index: number; compact?: boolean }) {
  return (
    <span className={`node-bubble node-${index + 1} ${node.status} ${compact ? 'compact' : ''}`}>
      <i />
      <b>{node.label}</b>
      {node.meta ? <em>{node.meta}</em> : null}
    </span>
  );
}
