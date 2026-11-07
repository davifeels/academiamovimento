import React, { useState } from 'react';
import logoImg from '../assets/logo.png';

export default function BrandLogo({ size = "md", showSub = true, className = "" }) {
  const [imageError, setImageError] = useState(false);

  // Dimension presets
  const sizeMap = {
    sm: { img: "w-8 h-8", text: "text-base", sub: "text-[10px]" },
    md: { img: "w-11 h-11", text: "text-lg", sub: "text-xs" },
    lg: { img: "w-14 h-14", text: "text-xl", sub: "text-xs" },
    xl: { img: "w-20 h-20", text: "text-2xl", sub: "text-sm" }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} aria-label="Academia Movimento - Movimento Growth">
      <div className={`relative ${currentSize.img} rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-blue-600 via-emerald-500 to-orange-500 shadow-lg shadow-blue-900/30 ring-2 ring-white/10 flex-shrink-0 group`}>
        {!imageError ? (
          <img
            src={logoImg}
            alt="Logotipo oficial da Academia Movimento com nadador e sol nascente"
            className="w-full h-full object-cover rounded-full bg-blue-600 transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="eager"
          />
        ) : (
          <div className="w-full h-full rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs" aria-label="AM Logo">
            AM
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-extrabold tracking-tight text-white font-['Space_Grotesk'] ${currentSize.text} leading-none`}>
            ACADEMIA <span className="text-emerald-400">MOVIMENTO</span>
          </span>
        </div>
        {showSub && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
            <span className={`text-slate-400 font-semibold tracking-wider uppercase font-mono ${currentSize.sub}`}>
              MOVIMENTO <span className="text-emerald-400">GROWTH</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
