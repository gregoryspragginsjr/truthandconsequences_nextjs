export default function Sticker({
  children,
  className
}: { children: React.ReactNode, className: string }) {
  return (
    <div className={`sticker ${ className }`}>
      <div className="sticker__float-out">
        <div className="sticker__y-float">
          <div className="sticker__hover-layer">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}