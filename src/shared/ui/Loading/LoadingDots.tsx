"use client";

export const LoadingDots = () => {
  return (
    <span className="flex items-center gap-1">
      <span className="dot-animate" style={{ animationDelay: "0ms" }}>
        •
      </span>
      <span className="dot-animate" style={{ animationDelay: "150ms" }}>
        •
      </span>
      <span className="dot-animate" style={{ animationDelay: "300ms" }}>
        •
      </span>
    </span>
  );
};
