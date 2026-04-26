import type { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="device-frame" aria-label="手机外壳预览">
      <span className="device-side-button side-left" aria-hidden="true" />
      <span className="device-side-button side-right" aria-hidden="true" />
      <div className="device-speaker" aria-hidden="true" />
      <div className="device-camera" aria-hidden="true" />
      <div className="phone-shell">{children}</div>
    </div>
  );
}
