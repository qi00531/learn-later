export function TopStatusBar() {
  return (
    <header className="status-bar" aria-label="手机状态栏">
      <span className="status-time">9:41</span>
      <div className="status-icons" aria-hidden="true">
        <span className="signal-bars">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="wifi-icon" />
        <span className="battery-icon">
          <i />
        </span>
      </div>
    </header>
  );
}
