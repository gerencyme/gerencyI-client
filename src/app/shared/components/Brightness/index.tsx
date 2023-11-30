// tamanhos devem ser ajustados conforme necessidade futura caso usado em outros lugares

interface BrightnessProps {
  gradient: string;
}

export function Brightness({ gradient }: BrightnessProps) {
  return <div className={`absolute w-full max-w-[800px] h-full max-h-[850px] ${gradient}`} />;
}
