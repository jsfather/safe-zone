type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Safe Zone">
      <span
        aria-hidden="true"
        className="font-english-numbers relative flex size-8 items-end rounded-[10px] bg-ink p-1.5 text-[13px] leading-none font-black tracking-[-0.14em] text-white"
      >
        sz
        <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-accent" />
      </span>
      {!compact && (
        <span
          aria-hidden="true"
          dir="ltr"
          className="font-english-numbers text-[15px] font-bold tracking-[-0.035em] text-ink"
        >
          safe zone
        </span>
      )}
    </span>
  );
}
