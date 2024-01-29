import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface SegmentCardOptions {
  src: string | StaticImport;
  optionTitle: string;
  optionDescription: string;
}
