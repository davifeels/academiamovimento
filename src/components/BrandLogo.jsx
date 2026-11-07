import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function BrandLogo({ size = "md", showSub = true, className = "" }) {
  const [imageError, setImageError] = useState(false);

  // Dimension presets
  const sizeMap = {
    sm: { img: "w-8 h-8", text: "text-sm", sub: "text-[9px]" },
    md: { img: "w-10 h-10 sm:w-11 sm:h-11", text: "text-base sm:text-lg", sub: "text-[10px]" },
    lg: { img: "w-13 h-13", text: "text-lg sm:text-xl", sub: "text-xs" },
    xl: { img: "w-16 h-16", text: "text-2xl", sub: "text-xs" }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none flex-shrink-0 ${className}`} aria-label="Academia Movimento - Movimento Growth">
      {/* Outer Glowing Ring */}
      <div className={`relative ${currentSize.img} rounded-full p-[2px] bg-gradient-to-tr from-blue-600 via-emerald-400 to-amber-500 shadow-lg shadow-emerald-950/40 ring-1 ring-white/20 flex-shrink-0 group overflow-hidden`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1120] relative">
          {!imageError ? (
            <img
              src={logoImg}
              alt="Logotipo oficial da Academia Movimento"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
              loading="eager"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-700 to-emerald-600 flex items-center justify-center text-white font-black text-xs">
              AM
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col whitespace-nowrap">
        <span className={`font-black tracking-tight text-white font-['Space_Grotesk'] ${currentSize.text} leading-none`}>
          ACADEMIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">MOVIMENTO</span>
        </span>
        {showSub && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
            <span className={`text-emerald-300 font-extrabold tracking-wider uppercase font-mono ${currentSize.sub}`}>
              MOVIMENTO GROWTH
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
