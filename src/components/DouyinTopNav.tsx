const tabs = ['团购', '经验', '北京', '关注', '商城', '推荐'];

export function DouyinTopNav() {
  return (
    <nav className="douyin-top-nav" aria-label="顶部频道">
      <button className="icon-button menu-button" aria-label="打开菜单">
        <span />
        <span />
        <span />
      </button>
      <div className="top-tabs">
        {tabs.map((tab) => (
          <button key={tab} className={tab === '推荐' ? 'top-tab active' : 'top-tab'}>
            {tab}
          </button>
        ))}
      </div>
      <button className="icon-button search-button" aria-label="搜索">
        <span />
      </button>
    </nav>
  );
}
