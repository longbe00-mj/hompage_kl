'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { id: 1, src: '/images/carousel-1.png', alt: 'B2B 플랫폼 소개 1' },
  { id: 2, src: '/images/carousel-2.png', alt: 'B2B 플랫폼 소개 2' },
  { id: 3, src: '/images/carousel-3.png', alt: 'B2B 플랫폼 소개 3' },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const dragStartRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    dragStartRef.current = e.clientX;
    setIsAutoPlay(false);

    const handleDocumentMouseUp = (event: MouseEvent) => {
      if (dragStartRef.current === null) return;

      const dragDistance = dragStartRef.current - event.clientX;
      const minDragDistance = 50;

      if (Math.abs(dragDistance) > minDragDistance) {
        if (dragDistance > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }

      dragStartRef.current = null;
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };

    document.addEventListener('mouseup', handleDocumentMouseUp);
  };

  return (
    <section className="w-full m-0 p-0">
      <div
        className="relative w-full aspect-[4506/1575] overflow-hidden group cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
      >
          {/* 이미지 표시 */}
          <div className="relative w-full h-full bg-gray-900">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain pointer-events-none select-none"
                  priority={index === 0}
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* 이전 버튼 */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>

          {/* 다음 버튼 */}
          <button
            onClick={goToNext}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          {/* 하단 인디케이터 */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-white/60 hover:bg-white/80 w-2'
                }`}
              />
            ))}
          </div>
        </div>
    </section>
  );
}
