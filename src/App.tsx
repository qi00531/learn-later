import { BottomNav } from './components/BottomNav';
import { DouyinTopNav } from './components/DouyinTopNav';
import { LearnCarousel } from './components/LearnCarousel';
import { PhoneFrame } from './components/PhoneFrame';
import { TopStatusBar } from './components/TopStatusBar';

export default function App() {
  return (
    <PhoneFrame>
      <TopStatusBar />
      <DouyinTopNav />
      <main className="app-main" aria-label="以后再学卡片流">
        <LearnCarousel />
      </main>
      <BottomNav />
    </PhoneFrame>
  );
}
