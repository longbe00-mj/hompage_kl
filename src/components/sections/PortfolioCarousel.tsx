'use client';

import { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioItem {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  client: string;
  description: string;
  result: string;
  resultColor: string;
  image: string;
}

interface PortfolioCarouselProps {
  items: PortfolioItem[];
}

export default function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
      inViewThreshold: 0.7,
      breakpoints: {
        '(max-width: 767px)': { slidesToScroll: 1 },
        '(min-width: 768px)': { slidesToScroll: 2 },
      },
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
      }),
    ]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    setScrollSnaps(emblaApi.scrollSnapList());

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.destroy();
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full">
      <div className="relative">
        {/* 캐러셀 컨테이너 */}
        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 min-w-0 md:basis-1/2 basis-full px-2"
              >
                {/* 카드 */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden card-shadow-hover h-full">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full ${
                        item.image.includes('placeholder')
                          ? 'object-contain'
                          : 'object-cover'
                      } hover:scale-105 transition-transform duration-300`}
                    />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${item.categoryColor}`}>
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">클라이언트: {item.client}</p>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    <div className={`text-sm font-semibold ${item.resultColor}`}>
                      {item.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 좌측 화살표 버튼 */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft size={24} className="text-gray-900" />
        </button>

        {/* 우측 화살표 버튼 */}
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="다음 슬라이드"
        >
          <ChevronRight size={24} className="text-gray-900" />
        </button>
      </div>

      {/* 하단 도트 인디케이터 */}
      <div className="flex justify-center gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-blue-600' : 'bg-gray-400'
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
}
