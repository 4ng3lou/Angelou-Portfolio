"use client";

export default function HoverAvatar() {
  return (
    <div
      style={{
        flexShrink: 0,
        width: 120,
        height: 140,
        borderRadius: 10,
        overflow: "hidden",
        border: "1px solid var(--border-2)",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        const imgs = e.currentTarget.querySelectorAll("img");
        (imgs[0] as HTMLImageElement).style.opacity = "0";
        (imgs[1] as HTMLImageElement).style.opacity = "1";
      }}
      onMouseLeave={e => {
        const imgs = e.currentTarget.querySelectorAll("img");
        (imgs[0] as HTMLImageElement).style.opacity = "1";
        (imgs[1] as HTMLImageElement).style.opacity = "0";
      }}
    >
      <img
        src="/images/download.jpg"
        alt="Angelou"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 55%",
          transform: "scale(1.5)", transformOrigin: "center 55%",
          transition: "opacity 0.3s",
        }}
      />
      <img
        src="/images/hover.jpg"
        alt="Angelou hover"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center 45%",
          opacity: 0, transition: "opacity 0.3s",
        }}
      />
    </div>
  );
}