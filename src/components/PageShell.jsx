import { forwardRef } from 'react';

/**
 * Generic scrapbook page wrapper. react-pageflip needs every direct child
 * of <HTMLFlipBook> to forward a ref to its root DOM node, so every page
 * component in src/pages wraps its content in this shell.
 */
const PageShell = forwardRef(function PageShell(
  { children, bg = 'var(--cream)', pageNumber, className = '', contentClassName = '', dim = false },
  ref
) {
  return (
    // NOTE: react-pageflip drives this exact ref'd node imperatively and
    // overwrites its inline `style` attribute on every render (position,
    // size, z-index...), so the page background must live on a child layer
    // instead of on this element directly, or it gets wiped out.
    <div ref={ref} className={`relative w-full h-full overflow-hidden select-none ${className}`}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: bg }} />
      <div className="paper-texture absolute inset-0 pointer-events-none" />
      {dim && <div className="absolute inset-0 bg-black/15 pointer-events-none" />}

      {/* torn edge along the spine side is handled per-page via className if needed */}
      <div
        className={`relative w-full h-full flex flex-col overflow-y-auto scrollbar-thin px-5 py-6 sm:px-9 sm:py-9 ${contentClassName}`}
      >
        {children}
      </div>

      {pageNumber != null && (
        <div className="absolute bottom-2 right-3 font-hand text-sm text-[#5c4326]/60 z-10">
          {pageNumber}
        </div>
      )}
    </div>
  );
});

export default PageShell;
