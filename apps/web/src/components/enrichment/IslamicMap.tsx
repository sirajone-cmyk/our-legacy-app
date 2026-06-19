/**
 * IslamicMap — Premium illustrated map panel for the reader.
 *
 * Renders an SVG-based map with:
 * - Illustrated parchment background
 * - Location markers (colour-coded by type)
 * - Animated route paths
 * - Tap-to-expand location detail cards
 * - Compass rose ornament
 *
 * Design philosophy: feels like a page from a hand-illustrated atlas,
 * not a digital navigation tool. Warm, timeless, premium.
 */

import { MapPin, X } from "lucide-react";
import { useState } from "react";
import { getMarkerColor, type MapLocation, type ReaderMap } from "../../data/mapData";

type IslamicMapProps = {
  map: ReaderMap;
  onClose: () => void;
  isOpen: boolean;
};

// ── Arabian Peninsula SVG base paths ─────────────────────────────────────
// Simplified illustrated coastline — not geographic data, artistic outline
const ARABIAN_PENINSULA_PATH = `
  M 30,10 C 35,8 40,7 50,8 C 60,9 70,12 78,18
  C 84,22 87,28 88,35 C 89,42 86,50 84,55
  C 82,60 78,65 72,70 C 68,74 63,76 58,76
  C 54,76 50,74 47,72 C 42,68 38,62 36,55
  C 32,44 30,33 28,25 C 27,18 28,13 30,10 Z

  M 18,28 C 22,25 26,23 30,22 L 30,35
  C 26,36 22,38 20,42 C 18,45 18,50 20,55
  C 22,58 26,60 30,62 L 30,72
  C 24,70 20,66 17,62 C 14,56 13,48 14,42
  C 14,36 16,31 18,28 Z
`;

// ── Compass Rose ──────────────────────────────────────────────────────────

function CompassRose({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`} aria-hidden="true">
      <circle r="12" fill="var(--paper)" stroke="var(--champagne)" strokeWidth="0.8" />
      <polygon points="0,-10 2,-4 0,-2 -2,-4" fill="var(--forest)" />
      <polygon points="0,10 2,4 0,2 -2,4" fill="var(--muted)" />
      <polygon points="-10,0 -4,2 -2,0 -4,-2" fill="var(--muted)" />
      <polygon points="10,0 4,2 2,0 4,-2" fill="var(--muted)" />
      <text y="1" textAnchor="middle" fontSize="4" fontFamily="var(--font-ui)" fontWeight="600" fill="var(--forest)">N</text>
    </g>
  );
}

// ── Map Marker ────────────────────────────────────────────────────────────

function MapMarker({
  location,
  isSelected,
  onClick,
}: {
  location: MapLocation;
  isSelected: boolean;
  onClick: () => void;
}) {
  const [cx, cy] = location.coords;
  const color = getMarkerColor(location.markerType);
  const r = isSelected ? 6 : location.markerType === "sacred" ? 5.5 : 4.5;

  return (
    <g
      className="map-marker"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={location.name}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); }
      }}
      style={{ cursor: "pointer" }}
    >
      {/* Outer ring */}
      <circle
        cx={cx}
        cy={cy}
        r={r + 3}
        fill={`${color}22`}
        stroke={`${color}55`}
        strokeWidth="0.8"
        style={{ transition: "r 0.2s ease" }}
      />
      {/* Core dot */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={color}
        stroke="white"
        strokeWidth="1.2"
      />
      {/* Sacred marker gets a tiny crescent */}
      {location.markerType === "sacred" && (
        <text
          x={cx}
          y={cy + 1.5}
          textAnchor="middle"
          fontSize="5"
          fill="white"
          fontFamily="serif"
        >
          ☽
        </text>
      )}
      {/* Battle marker gets an X */}
      {location.markerType === "battle" && (
        <text
          x={cx}
          y={cy + 2}
          textAnchor="middle"
          fontSize="6"
          fill="white"
          fontWeight="bold"
        >
          ✕
        </text>
      )}
      {/* Label */}
      <text
        x={cx}
        y={cy - r - 3}
        textAnchor="middle"
        fontSize="4.5"
        fontFamily="var(--font-ui)"
        fontWeight="600"
        fill="var(--ink)"
        stroke="var(--paper)"
        strokeWidth="2"
        paintOrder="stroke"
      >
        {location.name}
      </text>
    </g>
  );
}

// ── Route paths ───────────────────────────────────────────────────────────

function RoutePath({
  from,
  to,
  style,
  allLocations,
}: {
  from: string;
  to: string;
  style: "solid" | "dotted" | "dashed";
  allLocations: MapLocation[];
}) {
  const fromLoc = allLocations.find((l) => l.id === from);
  const toLoc = allLocations.find((l) => l.id === to);
  if (!fromLoc || !toLoc) return null;

  const [x1, y1] = fromLoc.coords;
  const [x2, y2] = toLoc.coords;

  // Gentle curve via midpoint offset
  const mx = (x1 + x2) / 2 + (y2 - y1) * 0.15;
  const my = (y1 + y2) / 2 - (x2 - x1) * 0.15;

  const dashArray =
    style === "dotted" ? "2 4" : style === "dashed" ? "6 4" : undefined;

  return (
    <path
      d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
      fill="none"
      stroke="var(--gold)"
      strokeWidth="1"
      strokeDasharray={dashArray}
      opacity="0.7"
      className="map-route"
    />
  );
}

// ── Location Detail Card ──────────────────────────────────────────────────

function LocationCard({
  location,
  onClose,
}: {
  location: MapLocation;
  onClose: () => void;
}) {
  return (
    <div className="map-location-card" role="region" aria-label={location.name}>
      <button
        className="map-location-close"
        onClick={onClose}
        type="button"
        aria-label="Close location details"
      >
        <X size={14} />
      </button>
      <div className="map-location-header">
        <MapPin size={14} color={getMarkerColor(location.markerType)} aria-hidden="true" />
        <h4 className="map-location-name">{location.name}</h4>
      </div>
      {location.nameAr && (
        <p className="map-location-ar" dir="rtl" lang="ar">{location.nameAr}</p>
      )}
      <p className="map-location-desc">{location.description}</p>
      {location.reference && (
        <p className="map-location-ref">{location.reference}</p>
      )}
    </div>
  );
}

// ── IslamicMap ────────────────────────────────────────────────────────────

export function IslamicMap({ map, onClose, isOpen }: IslamicMapProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedLocation = selectedId
    ? map.locations.find((l) => l.id === selectedId) ?? null
    : null;

  const handleMarkerClick = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="map-backdrop" onClick={onClose} aria-hidden="true" />
      )}

      {/* Panel */}
      <div
        className={`map-panel ${isOpen ? "map-panel--open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={map.title}
        aria-hidden={!isOpen}
      >
        {/* Map header */}
        <div className="map-header">
          <div>
            <h3 className="map-title">{map.title}</h3>
            {map.subtitle && <p className="map-subtitle">{map.subtitle}</p>}
          </div>
          <button
            className="map-close-btn"
            onClick={onClose}
            type="button"
            aria-label="Close map"
          >
            <X size={18} />
          </button>
        </div>

        {/* Decorative rule */}
        <div className="map-rule" aria-hidden="true"><span /></div>

        {/* SVG Map */}
        <div className="map-canvas-wrap">
          <svg
            className="map-canvas"
            viewBox="0 0 100 90"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={`Map: ${map.title}`}
          >
            {/* Parchment background */}
            <defs>
              <filter id="map-paper">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise" />
                <feColorMatrix type="saturate" values="0" in="noise" result="grey" />
                <feBlend in="SourceGraphic" in2="grey" mode="multiply" />
              </filter>
              <linearGradient id="map-bg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0e9d6" />
                <stop offset="100%" stopColor="#e8dcc4" />
              </linearGradient>
            </defs>

            {/* Background */}
            <rect width="100" height="90" fill="url(#map-bg)" rx="4" />

            {/* Subtle grid lines */}
            <g opacity="0.08" stroke="var(--ink)" strokeWidth="0.3">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((v) => (
                <g key={v}>
                  <line x1={v} y1="0" x2={v} y2="90" />
                  <line x1="0" y1={v} x2="100" y2={v} />
                </g>
              ))}
            </g>

            {/* Outer border frame */}
            <rect
              x="2" y="2" width="96" height="86"
              fill="none"
              stroke="var(--champagne)"
              strokeWidth="0.6"
              rx="3"
              opacity="0.8"
            />
            <rect
              x="3.5" y="3.5" width="93" height="83"
              fill="none"
              stroke="var(--champagne)"
              strokeWidth="0.3"
              rx="2"
              opacity="0.5"
            />

            {/* Route paths (under markers) */}
            {map.routes?.map((route, i) => (
              <RoutePath
                key={i}
                from={route.fromId}
                to={route.toId}
                style={route.style}
                allLocations={map.locations}
              />
            ))}

            {/* Location markers */}
            {map.locations.map((loc) => (
              <MapMarker
                key={loc.id}
                location={loc}
                isSelected={selectedId === loc.id}
                onClick={() => handleMarkerClick(loc.id)}
              />
            ))}

            {/* Compass rose */}
            <CompassRose x={88} y={10} />

            {/* Map title watermark */}
            <text
              x="50" y="86"
              textAnchor="middle"
              fontSize="3"
              fontFamily="var(--font-serif)"
              fontStyle="italic"
              fill="var(--muted)"
              opacity="0.5"
            >
              OUR LEGACY · SirajOne
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="map-legend" aria-label="Map legend">
          {[
            { type: "sacred" as const, label: "Sacred Site" },
            { type: "event" as const, label: "Key Event" },
            { type: "battle" as const, label: "Battle" },
            { type: "camp" as const, label: "Stop / Camp" },
          ].map(({ type, label }) => (
            <div key={type} className="map-legend-item">
              <span
                className="map-legend-dot"
                style={{ background: getMarkerColor(type) }}
                aria-hidden="true"
              />
              <span className="map-legend-label">{label}</span>
            </div>
          ))}
          <div className="map-legend-item">
            <span className="map-legend-route" aria-hidden="true" />
            <span className="map-legend-label">Route</span>
          </div>
        </div>

        {/* Selected location card */}
        {selectedLocation && (
          <LocationCard
            location={selectedLocation}
            onClose={() => setSelectedId(null)}
          />
        )}

        {/* Instruction (if nothing selected) */}
        {!selectedLocation && (
          <p className="map-tap-hint">
            <MapPin size={12} aria-hidden="true" />
            Tap any location marker to learn more
          </p>
        )}
      </div>
    </>
  );
}
