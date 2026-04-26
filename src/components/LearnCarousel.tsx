import { useMemo, useRef, useState, type PointerEvent } from 'react';
import { cards } from '../data/cards';
import { LearnCard } from './LearnCard';

const swipeThreshold = 54;

export function LearnCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const pointerId = useRef<number | null>(null);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < cards.length - 1;

  const trackStyle = useMemo(
    () => ({
      transform: `translate3d(calc(${-activeIndex * 100}% + ${dragOffset}px), 0, 0)`,
      transition: isDragging ? 'none' : 'transform 360ms cubic-bezier(.22, .8, .22, 1)',
    }),
    [activeIndex, dragOffset, isDragging],
  );

  const goTo = (index: number) => {
    setActiveIndex(Math.min(Math.max(index, 0), cards.length - 1));
    setDragOffset(0);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target instanceof Element && event.target.closest('[data-carousel-lock]')) {
      return;
    }

    pointerId.current = event.pointerId;
    startX.current = event.clientX;
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerId.current !== event.pointerId) {
      return;
    }

    const rawOffset = event.clientX - startX.current;
    const edgeResistance = (!canGoPrev && rawOffset > 0) || (!canGoNext && rawOffset < 0);
    setDragOffset(edgeResistance ? rawOffset * 0.28 : rawOffset);
  };

  const finishDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerId.current !== event.pointerId) {
      return;
    }

    const finalOffset = event.clientX - startX.current;
    setIsDragging(false);
    pointerId.current = null;

    if (finalOffset < -swipeThreshold && canGoNext) {
      goTo(activeIndex + 1);
      return;
    }

    if (finalOffset > swipeThreshold && canGoPrev) {
      goTo(activeIndex - 1);
      return;
    }

    setDragOffset(0);
  };

  return (
    <section className="learn-carousel">
      <div
        className="carousel-viewport"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        <div className="carousel-track" style={trackStyle}>
          {cards.map((card) => (
            <div className="carousel-slide" key={card.id}>
              <LearnCard card={card} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls" aria-label="卡片切换">
        <button className="arrow-button" onClick={() => goTo(activeIndex - 1)} disabled={!canGoPrev}>
          ‹
        </button>
        <div className="progress-dots">
          {cards.map((card, index) => (
            <button
              key={card.id}
              className={index === activeIndex ? 'dot active' : 'dot'}
              onClick={() => goTo(index)}
              aria-label={`切换到第 ${index + 1} 张卡片`}
            />
          ))}
        </div>
        <button className="arrow-button" onClick={() => goTo(activeIndex + 1)} disabled={!canGoNext}>
          ›
        </button>
      </div>
    </section>
  );
}
