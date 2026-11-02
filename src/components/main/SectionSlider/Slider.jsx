import { useState, useEffect } from 'react';
import { Caruosel, Slide } from './slider.styled';

export default function Slider({ images}) {
  const [center, setCenter] = useState(0);

  const total = images.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCenter(prev => (prev + 1) % total);
    }, 2000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <Caruosel>
      
      {images.map((img, idex) => {
        let offset = idex - center;

        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;

        const abs = Math.abs(offset);

        return (
          <Slide
            key={img.id}
            src={img.webformatURL}
            alt={img.tags}
            style={{
              transform: `translateX(${offset * 58}%) scale(${1 - abs * 0.2})`,
              opacity: abs > 2 ? 0 : 1,
              zIndex: 10 - abs,
            }}
          />
        );
      })}
    </Caruosel>
  );
}