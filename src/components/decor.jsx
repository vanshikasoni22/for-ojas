// Scrapbook decorations: polaroids, washi tape, doodles, confetti bits.
// Kept as lightweight SVG / CSS so they're cheap even with many pages mounted.

export function Polaroid({ src, caption, rotate = -3, size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-28 sm:w-32',
    md: 'w-36 sm:w-44',
    lg: 'w-44 sm:w-56',
  };
  return (
    <div
      className={`relative bg-white p-2 pb-6 shadow-[0_8px_20px_rgba(0,0,0,0.35)] rounded-[2px] ${sizes[size]} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="w-full aspect-square overflow-hidden bg-[#e7dcc4] flex items-center justify-center">
        {src ? (
          <img src={src} alt={caption || 'memory'} className="w-full h-full object-cover" />
        ) : (
          <PlaceholderPhoto />
        )}
      </div>
      {caption && (
        <p className="font-hand text-[13px] sm:text-sm text-center text-[#4a3a24] mt-1.5 leading-tight px-1">
          {caption}
        </p>
      )}
    </div>
  );
}

export function PlaceholderPhoto() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1 border-2 border-dashed border-[#b8a578]/70 text-[#8a7550]">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <circle cx="12" cy="13" r="3.5" />
        <path d="M8 6l1.5-2h5L16 6" />
      </svg>
      <span className="text-[9px] sm:text-[10px] font-medium tracking-wide uppercase">your photo here</span>
    </div>
  );
}

export function WashiTape({
  color = 'var(--watermelon)',
  rotate = -6,
  top,
  left,
  right,
  bottom,
  width = 90,
  className = '',
}) {
  return (
    <div
      className={`absolute h-6 sm:h-7 opacity-80 pointer-events-none mix-blend-multiply ${className}`}
      style={{
        top,
        left,
        right,
        bottom,
        width,
        background: color,
        transform: `rotate(${rotate}deg)`,
        boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 4px, transparent 4px, transparent 9px)',
      }}
    />
  );
}

export function Sticker({ children, rotate = 0, className = '', ...rest }) {
  return (
    <span
      className={`sticker inline-block select-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      {...rest}
    >
      {children}
    </span>
  );
}

export function Star({ className = '', color = 'var(--mango)' }) {
  return (
    <svg viewBox="0 0 51 51" className={className} fill={color}>
      <path d="M25.5 0 L31 18 L51 18 L34.5 29.5 L40 47.5 L25.5 36.5 L11 47.5 L16.5 29.5 L0 18 L20 18 Z" />
    </svg>
  );
}

export function Heart({ className = '', color = 'var(--watermelon)' }) {
  return (
    <svg viewBox="0 0 32 29" className={className} fill={color}>
      <path d="M16 29S0 18.8 0 8.9C0 3.3 4.2 0 8.6 0c3 0 5.7 1.6 7.4 4.3C17.7 1.6 20.4 0 23.4 0 27.8 0 32 3.3 32 8.9 32 18.8 16 29 16 29z" />
    </svg>
  );
}

export function Squiggle({ className = '', color = 'var(--leaf)' }) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round">
      <path d="M2 18c8-16 16 16 24 0s16-16 24 0 16 16 24 0 16-16 24 0" />
    </svg>
  );
}

export function Sparkle({ className = '', color = 'var(--berry-soft)' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill={color}>
      <path d="M20 0c1.2 8.8 2.8 14.6 6.5 18.3 3.7 3.7 9.5 5.3 18.3 6.5-8.8 1.2-14.6 2.8-18.3 6.5C22.8 35 21.2 40.8 20 40c-1.2-8.8-2.8-14.6-6.5-18.3C9.8 18 4 16.4-4.8 20 4 18.8 9.8 17.2 13.5 13.5 17.2 9.8 18.8 4 20 0z" />
    </svg>
  );
}

export function ArrowScribble({ className = '', color = 'var(--ink)' }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
      <path d="M4 8c30 0 55 6 70 40" />
      <path d="M58 38 78 48 68 22" />
    </svg>
  );
}

export function TapeCorner({ className = '' }) {
  return (
    <div
      className={`absolute w-16 h-16 opacity-70 pointer-events-none ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1))',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
      }}
    />
  );
}

/** A handful of scattered confetti rectangles/dots, purely decorative. */
export function ConfettiScatter({ count = 10, seed = 1, className = '' }) {
  const colors = ['var(--mango)', 'var(--watermelon)', 'var(--berry-soft)', 'var(--leaf-bright)', 'var(--citrus)'];
  const pieces = Array.from({ length: count }, (_, i) => {
    const rand = (n) => {
      const x = Math.sin(seed * 999 + i * 57 + n * 13) * 10000;
      return x - Math.floor(x);
    };
    return {
      left: `${rand(1) * 100}%`,
      top: `${rand(2) * 100}%`,
      rotate: rand(3) * 360,
      color: colors[Math.floor(rand(4) * colors.length)],
      size: 5 + rand(5) * 6,
      round: rand(6) > 0.5,
      delay: rand(7) * 3,
    };
  });
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti-piece animate-floaty"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.round ? '50%' : '2px',
            '--r': `${p.rotate}deg`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
