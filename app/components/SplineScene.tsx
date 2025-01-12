'use client';

import Spline from '@splinetool/react-spline';

interface Props {
  onLoad?: () => void;
}

export default function SplineScene({ onLoad }: Props) {
  return (
    <div className="absolute inset-0">
      <Spline 
        scene="https://prod.spline.design/aaAaIH4e-0EWT-Dg/scene.splinecode"
        className="w-full h-full"
        onLoad={() => onLoad?.()}
      />
    </div>
  );
} 