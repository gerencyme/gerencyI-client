import { SimilarCompaniesContent as SimilarCompaniesContentType } from '~types/SimilarCompaniesContent';
import { Avatar } from '../../Avatar';
import { Text } from '../../Text';
import { Tooltip } from '../../Tooltip';
import { Fragment } from 'react';
import * as tv from '../SimilarCompaniesTV';

export interface SimilarCompaniesContentProps {
  similarCompanies: SimilarCompaniesContentType[];
}

export function SimilarCompaniesContent({ similarCompanies = [] }: SimilarCompaniesContentProps) {
  return (
    <ul className={tv.similarCompaniesRootTv()}>
      {similarCompanies.map((companie) => (
        <Fragment key={companie.id}>
          <li className={tv.similarCompaniesContentListTv()}>
            <Avatar.root size="small">
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
                size="sm"
                className="w-28 truncate"
              />
            </Tooltip>
          </li>
          <div className={tv.similarCompaniesDivisorTv()} />
        </Fragment>
      ))}
    </ul>
  );
}
