import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function BrandLogo({ size = "md", showSub = true, className = "" }) {
  const [imageError, setImageError] = useState(false);

  // Dimension presets
  const sizeMap = {
    sm: { img: "w-8 h-8", text: "text-sm", sub: "text-[9px]" },
    md: { img: "w-11 h-11", text: "text-base sm:text-lg", sub: "text-[10px] sm:text-xs" },
    lg: { img: "w-14 h-14", text: "text-lg sm:text-xl", sub: "text-xs" },
    xl: { img: "w-20 h-20", text: "text-2xl sm:text-3xl", sub: "text-xs sm:text-sm" }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} aria-label="Academia Movimento - Movimento Growth">
      {/* Outer Glowing Ring */}
      <div className={`relative ${currentSize.img} rounded-full p-[2px] bg-gradient-to-tr from-blue-600 via-emerald-400 to-amber-500 shadow-xl shadow-emerald-950/40 ring-1 ring-white/20 flex-shrink-0 group overflow-hidden`}>
        <div className="w-full h-full rounded-full overflow-hidden bg-[#0a1120] relative">
          {!imageError ? (
            <img
              src={logoImg}
              alt="Logotipo oficial da Academia Movimento com nadador e sol nascente"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={() => setImageError(true)}
              loading="eager"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-700 to-emerald-600 flex items-center justify-center text-white font-black text-xs">
              AM
            </div>
          )}
          {/* Subtle glossy glass specular reflection */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight text-white font-['Space_Grotesk'] ${currentSize.text} leading-tight drop-shadow-sm`}>
            ACADEMIA <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">MOVIMENTO</span>
          </span>
        </div>
        {showSub && (
          <div className="flex items-center gap-2 mt-0.5">
            <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className={`text-emerald-300 font-extrabold tracking-widest uppercase font-mono ${currentSize.sub}`}>
                GROWTH PLATFORM
              </span>
            </span>
            <span className="text-slate-500 text-[10px] hidden sm:inline font-mono">Planaltina-DF</span>
          </div>
        )}
      </div>
    </div>
  );
}
