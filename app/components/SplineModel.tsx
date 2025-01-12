 'use client';

import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  return (
    <div className="w-full h-[500px] relative">
      <Spline 
        scene="URL_DE_TU_ESCENA_SPLINE"  // Reemplaza con tu URL de Spline
        className="w-full h-full"
      />
    </div>
  );
}