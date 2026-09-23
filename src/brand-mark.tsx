"use client";

/** Shared brand mark without next/image (works in Storybook + all apps). */
export function BrandMark({
  size = 28,
  className = "",
  alt = "Pulse",
  src = "/brand/pulse-logo.png",
}: {
  size?: number;
  className?: string;
  alt?: string;
  src?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-lg object-contain ${className}`}
    />
  );
}
