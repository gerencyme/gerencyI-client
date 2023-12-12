interface ProductCardIdentifyColorProps {
  color: string;
}

export function ProductCardIdentifyColor({ color }: ProductCardIdentifyColorProps) {
  return (
    <div className="flex items-center justify-center absolute -top-1 w-56 h-3 rounded-lg bg-private">
      <div className={`${color} rounded-lg h-1 w-52 m-auto`} />
    </div>
  );
}
