import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ArcReactor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Particles state
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    angle: (i * 30 * Math.PI) / 180,
    delay: i * 0.25,
  }));

  return (
    <div
      ref={containerRef}
      className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="-300 -300 600 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Core glow gradient */}
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="30%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          {/* Outer halo */}
          <radialGradient id="outerHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="70%" stopColor="hsl(var(--primary))" stopOpacity="0.03" />
            <stop offset="90%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          {/* Glow filter */}
          <filter id="arcGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="coreBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        {/* Background halo */}
        <circle cx="0" cy="0" r="280" fill="url(#outerHalo)" />

        {/* === LAYER 4: Energy Lines (radial connectors) === */}
        <g className="arc-energy-lines" style={{ animationDuration: isHovered ? "15s" : "40s" }}>
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const innerR = 35;
            const outerR = 250;
            return (
              <line
                key={`energy-${i}`}
                x1={innerR * Math.cos(rad)}
                y1={innerR * Math.sin(rad)}
                x2={outerR * Math.cos(rad)}
                y2={outerR * Math.sin(rad)}
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                opacity={isHovered ? 0.2 : 0.08}
                className="transition-opacity duration-500"
                strokeDasharray="4 12"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-32"
                  dur={`${2 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </line>
            );
          })}
        </g>

        {/* === LAYER 3: Outer Ring with tick marks === */}
        <g className="animate-arc-spin" style={{ transformOrigin: "0 0" }}>
          <circle
            cx="0" cy="0" r="250"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={isHovered ? "1.2" : "0.8"}
            opacity={isHovered ? 0.35 : 0.2}
            className="transition-all duration-500"
          />
          {/* Tick marks */}
          {Array.from({ length: 72 }, (_, i) => {
            const deg = i * 5;
            const rad = (deg * Math.PI) / 180;
            const isMajor = i % 6 === 0;
            const innerR = isMajor ? 240 : 245;
            return (
              <line
                key={`tick-${i}`}
                x1={innerR * Math.cos(rad)}
                y1={innerR * Math.sin(rad)}
                x2={250 * Math.cos(rad)}
                y2={250 * Math.sin(rad)}
                stroke="hsl(var(--primary))"
                strokeWidth={isMajor ? "1" : "0.4"}
                opacity={isMajor ? 0.4 : 0.15}
              />
            );
          })}
        </g>

        {/* Oscillating glow ring */}
        <circle
          cx="0" cy="0" r="250"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          filter="url(#arcGlow)"
          className="transition-opacity duration-500"
        >
          <animate
            attributeName="opacity"
            values={isHovered ? "0.15;0.4;0.15" : "0.05;0.15;0.05"}
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* === LAYER 2: Inner rotating ring with segmented arcs === */}
        <g className="animate-arc-spin-reverse" style={{ transformOrigin: "0 0" }}>
          {/* Segmented arcs */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const startAngle = i * 60 + 10;
            const endAngle = i * 60 + 50;
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;
            const r = 180;
            return (
              <path
                key={`seg-${i}`}
                d={`M ${r * Math.cos(startRad)} ${r * Math.sin(startRad)} A ${r} ${r} 0 0 1 ${r * Math.cos(endRad)} ${r * Math.sin(endRad)}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={isHovered ? "2" : "1.5"}
                opacity={isHovered ? 0.5 : 0.3}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            );
          })}
        </g>

        {/* Second inner ring */}
        <g className="animate-arc-spin" style={{ transformOrigin: "0 0", animationDuration: "20s" }}>
          {[0, 1, 2, 3].map((i) => {
            const startAngle = i * 90 + 15;
            const endAngle = i * 90 + 75;
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = (endAngle * Math.PI) / 180;
            const r = 130;
            return (
              <path
                key={`inner-seg-${i}`}
                d={`M ${r * Math.cos(startRad)} ${r * Math.sin(startRad)} A ${r} ${r} 0 0 1 ${r * Math.cos(endRad)} ${r * Math.sin(endRad)}`}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                opacity={isHovered ? 0.4 : 0.2}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            );
          })}
        </g>

        {/* Thin detail ring */}
        <circle
          cx="0" cy="0" r="100"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          opacity={isHovered ? 0.3 : 0.12}
          strokeDasharray="2 6"
          className="animate-arc-spin-reverse transition-opacity duration-500"
          style={{ transformOrigin: "0 0" }}
        />

        {/* === LAYER 1: Core === */}
        {/* Core glow blur */}
        <circle
          cx="0" cy="0" r="50"
          fill="url(#coreGlow)"
          filter="url(#coreBlur)"
        >
          <animate
            attributeName="r"
            values={isHovered ? "50;60;50" : "45;55;45"}
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Core bright center */}
        <circle
          cx="0" cy="0" r="18"
          fill="hsl(var(--primary))"
          filter="url(#strongGlow)"
        >
          <animate
            attributeName="opacity"
            values={isHovered ? "0.6;0.9;0.6" : "0.3;0.6;0.3"}
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="0" cy="0" r="8"
          fill="hsl(var(--primary))"
        >
          <animate
            attributeName="opacity"
            values={isHovered ? "0.8;1;0.8" : "0.5;0.8;0.5"}
            dur="2.5s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Core ring */}
        <circle
          cx="0" cy="0" r="28"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          opacity={isHovered ? 0.6 : 0.35}
          className="transition-opacity duration-500"
        />

        {/* === Particle emission from core === */}
        {particles.map((p) => (
          <circle key={`particle-${p.id}`} r="1.5" fill="hsl(var(--primary))">
            <animate
              attributeName="cx"
              values={`${20 * Math.cos(p.angle)};${80 * Math.cos(p.angle)};${20 * Math.cos(p.angle)}`}
              dur="4s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`${20 * Math.sin(p.angle)};${80 * Math.sin(p.angle)};${20 * Math.sin(p.angle)}`}
              dur="4s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.4;0;0.4"
              dur="4s"
              begin={`${p.delay}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Energy nodes at intersections */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <g key={`node-${i}`}>
              <circle
                cx={180 * Math.cos(rad)}
                cy={180 * Math.sin(rad)}
                r={isHovered ? "5" : "3.5"}
                fill="hsl(var(--primary))"
                filter="url(#arcGlow)"
                className="transition-all duration-500"
              >
                <animate
                  attributeName="opacity"
                  values={isHovered ? "0.5;0.9;0.5" : "0.2;0.5;0.2"}
                  dur="2s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Hover ripple effect */}
        {isHovered && (
          <>
            <circle cx="0" cy="0" r="100" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5">
              <animate attributeName="r" from="30" to="280" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="100" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3">
              <animate attributeName="r" from="30" to="280" dur="2s" begin="1s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.2" to="0" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
};

export default ArcReactor;
