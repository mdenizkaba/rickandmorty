// components/Headings.tsx

import { JSX } from "react";

interface HeadingsProps {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Başlık seviyesinin yalnızca 1 ile 6 arasında olmasını sağlıyoruz
  children: React.ReactNode; // Başlık içeriği (metin) tipi
  className?: string;
}

const Headings: React.FC<HeadingsProps> = ({ level = 1, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Dinamik olarak doğru HTML etiketi seçiyoruz

  return (
    <Tag className={`font-semibold text-zinc-50 tracking-wide ${getHeadingClass(level)} ${className ?? ""}`}>
      {children}
    </Tag>
  );
};

// Başlık seviyelerine göre stilleri belirleyen yardımcı fonksiyon
function getHeadingClass(level: number): string {
  switch (level) {
    case 1:
      return 'text-4xl md:text-4xl leading-tight'; // h1 için stil
    case 2:
      return 'text-3xl md:text-3xl leading-tight'; // h2 için stil
    case 3:
      return 'text-2xl md:text-2xl leading-snug'; // h3 için stil
    case 4:
      return 'text-xl md:text-xl leading-snug'; // h4 için stil
    case 5:
      return 'text-lg md:text-lg leading-snug'; // h5 için stil
    case 6:
      return 'text-base md:text-md leading-snug'; // h6 için stil
    default:
      return '';
  }
}

export default Headings;
