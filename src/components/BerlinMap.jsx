import { useEffect, useState } from "react";

const NAME_TO_ID = {
  "Mitte": "mitte",
  "Friedrichshain-Kreuzberg": "friedrichshain",
  "Pankow": "pankow",
  "Charlottenburg-Wilmersdorf": "charlottenburg",
  "Spandau": "spandau",
  "Steglitz-Zehlendorf": "steglitz",
  "Tempelhof-Schöneberg": "tempelhof",
  "Neukölln": "neukoelln",
  "Treptow-Köpenick": "treptow",
  "Marzahn-Hellersdorf": "marzahn",
  "Lichtenberg": "lichtenberg",
  "Reinickendorf": "reinickendorf",
};

// Geographic bounds of Berlin
const MIN_LNG = 13.088, MAX_LNG = 13.762;
const MIN_LAT = 52.338, MAX_LAT = 52.677;
// Latitude correction at Berlin's center (~52.5°N): cos(52.5°) ≈ 0.607
// Shrinks effective lng span so x/y scales match real-world km
const LAT_COS = Math.cos(((MIN_LAT + MAX_LAT) / 2) * (Math.PI / 180));
const LNG_SPAN = MAX_LNG - MIN_LNG;
const LAT_SPAN = MAX_LAT - MIN_LAT;

const SVG_W = 1000;
// Equal-area aspect ratio: LAT_SPAN / (LNG_SPAN × cos(lat)) — no stretch, geographically correct.
const SVG_H = Math.round(SVG_W * LAT_SPAN / (LNG_SPAN * LAT_COS));

function project(lng, lat) {
  const x = ((lng - MIN_LNG) / LNG_SPAN) * SVG_W;
  const y = ((MAX_LAT - lat) / LAT_SPAN) * SVG_H;
  return `${x.toFixed(1)},${y.toFixed(1)}`;
}

function ringToD(ring) {
  return ring.map((c, i) => `${i === 0 ? "M" : "L"}${project(c[0], c[1])}`).join("") + "Z";
}

function featureToD(geom) {
  if (geom.type === "Polygon") return geom.coordinates.map(ringToD).join("");
  if (geom.type === "MultiPolygon")
    return geom.coordinates.flatMap((p) => p.map(ringToD)).join("");
  return "";
}

export default function BerlinMap({ onSelect, selectedId, highlightedIds = [] }) {
  const [districts, setDistricts] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    fetch("/berlin_bezirke.geojson")
      .then((r) => r.json())
      .then((data) =>
        setDistricts(
          data.features.map((f) => ({
            id: NAME_TO_ID[f.properties.name] ??
              f.properties.name.toLowerCase().replace(/\s/g, "-"),
            name: f.properties.name,
            d: featureToD(f.geometry),
          }))
        )
      );
  }, []);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        style={{ width: "95%", height: "auto", display: "block", margin: "0 auto", cursor: "pointer" }}
        aria-label="Berlin Bezirkskarte"
      >
        {districts.map((d) => {
          const isHighlighted = highlightedIds.includes(d.id);
          const sel = d.id === selectedId;
          const isNeon = sel || isHighlighted;
          const hov = d.id === hovered && !isNeon;
          return (
            <path
              key={d.id}
              d={d.d}
              fill={isNeon ? "#D6FF1D" : hov ? "#28113D" : "#502379"}
              fillOpacity={isNeon ? 0.9 : 1}
              stroke="#D6FF1D"
              strokeWidth={isNeon ? 4 : hov ? 3 : 2}
              strokeOpacity={0.9}
              style={{ transition: "fill .15s, fill-opacity .15s", cursor: "pointer" }}
              onClick={() => onSelect?.({ id: d.id, name: d.name })}
              onMouseEnter={(e) => {
                setHovered(d.id);
                setTooltip({ name: d.name, x: e.clientX, y: e.clientY });
              }}
              onMouseMove={(e) =>
                setTooltip((t) => ({ ...t, x: e.clientX, y: e.clientY }))
              }
              onMouseLeave={() => {
                setHovered(null);
                setTooltip(null);
              }}
            />
          );
        })}
      </svg>

      {tooltip && (
        <div
          style={{
            position: "fixed",
            left: tooltip.x + 14,
            top: tooltip.y - 10,
            background: "#28113D",
            color: "#D6FF1D",
            border: "1.5px solid #D6FF1D",
            borderRadius: 4,
            padding: "3px 8px",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "Ubuntu, sans-serif",
            pointerEvents: "none",
            zIndex: 1000,
            whiteSpace: "nowrap",
          }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}
