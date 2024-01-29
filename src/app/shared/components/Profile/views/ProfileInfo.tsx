import { formateDate } from '../../../utils/dates';
import { CircularDivisor } from '../../CircularDivisor';
import { Text } from '../../Text';
import { profileInfoContentWrapperTv, profileInfoTitleTv, profileInfoTv } from '../ProfileTV';

interface ProfileInfoProps {
  cnpj: string;
  companySegment: string;
  corporateReason: string;
}

export function ProfileInfo({ cnpj, companySegment, corporateReason }: ProfileInfoProps) {
  return (
    <div className={profileInfoTv()}>
      <div className={profileInfoContentWrapperTv()}>
        <Text
          text={cnpj}
          weight="bold"
          size="xl"
          className={profileInfoTitleTv({ color: 'white' })}
        />
      </div>
      <div className={profileInfoContentWrapperTv()}>
        <Text
          text={companySegment}
          weight="bold"
          size="xl"
          className={profileInfoTitleTv({ color: 'white/75' })}
        />
        <CircularDivisor />{' '}
        <Text
          text={corporateReason}
          weight="bold"
          size="xl"
          className={profileInfoTitleTv({ color: 'white/75' })}
        />
      </div>
      <Text text={formateDate(new Date())} weight="light" size="md" />
    </div>
  );
}
