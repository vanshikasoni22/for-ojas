export default function NoteCard({ children, rotate = -1, className = '', accent = 'var(--watermelon)' }) {
  return (
    <div
      className={`relative bg-[#fffaf0]/95 shadow-[0_10px_25px_rgba(0,0,0,0.18)] rounded-sm px-5 py-5 sm:px-7 sm:py-6 max-w-xl ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, borderLeft: `5px solid ${accent}` }}
    >
      <div className="font-hand text-[19px] sm:text-[22px] leading-relaxed text-[#3a2415] whitespace-pre-line">
        {children}
      </div>
    </div>
  );
}
