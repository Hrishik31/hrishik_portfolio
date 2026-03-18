import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isCrosshair, setIsCrosshair] = useState(false);
  const [clickBursts, setClickBursts] = useState<{ id: number; x: number; y: number }[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  const burstId = useRef(0);

  useEffect(() => {
    // Hide on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      burstId.current++;
      const burst = { id: burstId.current, x: mousePos.current.x, y: mousePos.current.y };
      setClickBursts(prev => [...prev, burst]);
      setTimeout(() => {
        setClickBursts(prev => prev.filter(b => b.id !== burst.id));
      }, 600);
      setTimeout(() => setIsClicking(false), 150);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, [role="button"], .cursor-pointer, input, textarea, select');
      const isCard = target.closest('.tech-card, [data-card]');
      setIsHovering(!!isClickable);
      setIsCrosshair(!!isCard && !isClickable);
    };

    // Animate ring with lag
    let animFrame: number;
    const animateRing = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      ringPos.current.x += dx * 0.15;
      ringPos.current.y += dy * 0.15;

      const tdx = mousePos.current.x - trailPos.current.x;
      const tdy = mousePos.current.y - trailPos.current.y;
      trailPos.current.x += tdx * 0.08;
      trailPos.current.y += tdy * 0.08;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPos.current.x - 12}px, ${trailPos.current.y - 12}px)`;
      }
      animFrame = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseover', handleMouseOver);
    animFrame = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrame);
      document.body.style.cursor = '';
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Trail (softest, most lag) */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          className="w-6 h-6 rounded-full transition-all duration-200"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Ring (follows with lag) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full border transition-all duration-200"
          style={{
            width: isHovering ? '48px' : isCrosshair ? '44px' : '40px',
            height: isHovering ? '48px' : isCrosshair ? '44px' : '40px',
            marginLeft: isHovering ? '-4px' : isCrosshair ? '-2px' : '0',
            marginTop: isHovering ? '-4px' : isCrosshair ? '-2px' : '0',
            borderColor: `hsl(var(--primary) / ${isHovering ? '0.6' : '0.25'})`,
            boxShadow: isHovering
              ? '0 0 20px hsl(var(--primary) / 0.3), inset 0 0 10px hsl(var(--primary) / 0.1)'
              : '0 0 8px hsl(var(--primary) / 0.1)',
            borderWidth: isCrosshair ? '1px' : '1.5px',
          }}
        />
        {/* Crosshair lines for cards */}
        {isCrosshair && (
          <svg
            viewBox="0 0 44 44"
            className="absolute top-0 left-0"
            style={{ width: '44px', height: '44px', marginLeft: '-2px', marginTop: '-2px' }}
          >
            <line x1="22" y1="4" x2="22" y2="14" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
            <line x1="22" y1="30" x2="22" y2="40" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
            <line x1="4" y1="22" x2="14" y2="22" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
            <line x1="30" y1="22" x2="40" y2="22" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
          </svg>
        )}
      </div>

      {/* Dot (instant follow) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          className="rounded-full transition-all duration-100"
          style={{
            width: isClicking ? '6px' : isHovering ? '12px' : '10px',
            height: isClicking ? '6px' : isHovering ? '12px' : '10px',
            background: 'hsl(var(--primary))',
            boxShadow: `0 0 ${isHovering ? '15px' : '8px'} hsl(var(--primary) / ${isHovering ? '0.6' : '0.4'})`,
          }}
        />
      </div>

      {/* Click burst effects */}
      {clickBursts.map((burst) => (
        <div
          key={burst.id}
          className="fixed pointer-events-none z-[9998]"
          style={{ left: burst.x, top: burst.y }}
        >
          <div className="cursor-burst" />
          <div className="cursor-burst-ring" />
        </div>
      ))}
    </>
  );
};

export default CustomCursor;
