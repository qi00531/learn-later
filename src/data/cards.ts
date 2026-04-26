export type LearnCardType = 'route' | 'starMap' | 'tree' | 'task' | 'social';

export interface LearnMetric {
  label: string;
  value: string;
  hint?: string;
}

export interface LearnSection {
  label: string;
  value: string;
  meta?: string;
}

export interface LearnNode {
  label: string;
  status: 'done' | 'active' | 'locked';
  meta?: string;
}

export interface LearnCardData {
  id: number;
  type: LearnCardType;
  eyebrow: string;
  title: string;
  subtitle: string;
  tag: string;
  sections: LearnSection[];
  metrics: LearnMetric[];
  nodes: LearnNode[];
  buttons: [string, string];
  backgroundClass: string;
}

export const cards: LearnCardData[] = [
  {
    id: 1,
    type: 'route',
    eyebrow: '推荐',
    title: '你收藏的 23 条 AI 工具视频',
    subtitle: '已经够组成一门小课了',
    tag: 'AI 自动识别 · 4 个主题',
    sections: [
      { label: 'Day 1', value: '认识 AI 能帮你做什么', meta: '3 条精选视频 · 8 分钟' },
      { label: 'Day 2', value: '学会写有效 Prompt', meta: '5 条精选视频 · 12 分钟' },
      { label: 'Day 3', value: '做出一个真实成果', meta: '4 条精选视频 · 15 分钟' },
    ],
    metrics: [
      { label: '今日学习', value: '25', hint: '分钟' },
      { label: '同路人', value: '3284', hint: '人在学' },
    ],
    nodes: [
      { label: 'AI 基础认知', status: 'done', meta: '已完成' },
      { label: '提示工程', status: 'done', meta: '已完成' },
      { label: 'AI 文本创作', status: 'active', meta: '进行中' },
      { label: 'AI 图像生成', status: 'active', meta: '进行中' },
      { label: 'AI 效率办公', status: 'locked', meta: '待探索' },
      { label: 'AI 合规风控', status: 'locked', meta: '待探索' },
    ],
    buttons: ['稍后再看', '开始学习'],
    backgroundClass: 'bg-route',
  },
  {
    id: 2,
    type: 'starMap',
    eyebrow: '技能星图',
    title: '你已经从收藏夹里点亮了 6 项技能',
    subtitle: '在宇宙中探索了 6 颗星星',
    tag: '已点亮 / 学习中 / 已收藏未开始',
    sections: [
      { label: '本周新点亮', value: '2 项', meta: '比上周 +100%' },
      { label: '连续学习', value: '4 天', meta: '继续保持' },
      { label: '常收藏方向', value: 'AI 工具 · 职场表达 · 剪辑' },
    ],
    metrics: [
      { label: '已点亮', value: '6', hint: '项技能' },
      { label: '学习中', value: '3', hint: '个星系' },
    ],
    nodes: [
      { label: 'AI 写周报', status: 'done' },
      { label: 'PPT 封面排版', status: 'active' },
      { label: 'Prompt 基础结构', status: 'done' },
      { label: '视频剪辑转场', status: 'locked' },
      { label: 'Excel 数据透视表', status: 'done' },
      { label: 'AI 工具组合使用', status: 'locked' },
    ],
    buttons: ['继续探索更多技能', '探索更多技能'],
    backgroundClass: 'bg-star',
  },
  {
    id: 3,
    type: 'social',
    eyebrow: '同路人',
    title: '有 3284 人正在和你学同一条路线',
    subtitle: '3 天 AI 工具入门路线',
    tag: '同路人学习 / 打卡作品 / 学习成果',
    sections: [
      { label: '同路人学习中', value: '小雨一直学 · Day 1 认识 AI' },
      { label: '正在直播学习', value: '一起探索 AI 的无限可能' },
      { label: '看看别人学习后的实践作业', value: '周报、PPT、Excel 分析' },
    ],
    metrics: [
      { label: '正在学习', value: '3284', hint: '人' },
      { label: '今日作业', value: '128', hint: '份' },
    ],
    nodes: [
      { label: '小雨', status: 'active', meta: '直播中' },
      { label: '阿泽', status: 'active', meta: 'Day 2' },
      { label: 'Luna', status: 'active', meta: 'Day 1' },
      { label: 'Kevin', status: 'done', meta: 'Day 3' },
    ],
    buttons: ['看看大家的作业', '我也交作业'],
    backgroundClass: 'bg-social',
  },
  {
    id: 4,
    type: 'task',
    eyebrow: '今日任务',
    title: '今天只学 5 分钟',
    subtitle: '把收藏变成一个能交付的小成果',
    tag: '今日学习任务 / 复习提醒',
    sections: [
      { label: '今日学习任务', value: '看 1 条 Prompt 案例视频', meta: '预计 5 分钟' },
      { label: '复习提醒', value: '昨天的输出格式技巧', meta: '60 秒回顾' },
      { label: '完成后可获得', value: 'AI 入门星星进度 +1' },
    ],
    metrics: [
      { label: '今日目标', value: '5', hint: '分钟' },
      { label: '压缩复习', value: '60', hint: '秒' },
    ],
    nodes: [
      { label: '任务描述', status: 'done' },
      { label: '上下文补充', status: 'active' },
      { label: '输出格式', status: 'locked' },
      { label: '多轮优化', status: 'locked' },
    ],
    buttons: ['太累了，压缩成 60 秒', '开始学习'],
    backgroundClass: 'bg-task',
  },
];
