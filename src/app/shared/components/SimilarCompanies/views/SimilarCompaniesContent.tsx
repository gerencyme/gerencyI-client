import { SimilarCompaniesContent as SimilarCompaniesContentType } from '~types/SimilarCompaniesContent';
import { Avatar } from '../../Avatar';
import { Text } from '../../Text';
import { Tooltip } from '../../Tooltip';

export interface SimilarCompaniesContentProps {
  similarCompanies: SimilarCompaniesContentType[];
}

export function SimilarCompaniesContent({ similarCompanies = [] }: SimilarCompaniesContentProps) {
  return (
    <div className="relative py-0.5 md:py-3 w-full h-fit flex flex-col justify-center gap-1.5 md:gap-3">
      {similarCompanies.map((companie) => (
        <>
          <div className="flex items-center gap-1.5 md:gap-3">
            <Avatar.root size="small" key={companie.id}>
              <>
                {companie.src ? (
                  <Avatar.image src={companie.src} alt={companie.alt} />
                ) : (
                  <Avatar.default companyName={companie.companyName} />
                )}
              </>
            </Avatar.root>
            <Tooltip color="black" text={companie.companyName}>
              <Text
                text={companie.companyName}
                weight="light"
                color="white"
                size="sm"
                className="w-28 truncate"
              />
            </Tooltip>
          </div>
          <div className="h-0.5 w-full bg-lightPurple" />
        </>
      ))}
    </div>
  );
}
