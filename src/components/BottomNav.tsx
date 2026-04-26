const items = ['首页', '朋友', '消息', '我'];

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="底部导航">
      <button className="bottom-item active">首页</button>
      <button className="bottom-item">朋友</button>
      <button className="add-button" aria-label="发布">
        +
      </button>
      {items.slice(2).map((item) => (
        <button key={item} className="bottom-item">
          {item}
        </button>
      ))}
    </nav>
  );
}
