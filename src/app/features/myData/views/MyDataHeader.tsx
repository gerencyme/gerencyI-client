'use client';

import { Button } from '~/src/app/shared/components/Button';
import { useMyDataController } from '../controller';
import { myDataHeaderContentTv, myDataHeaderRootTv } from '../MyDataTV';

export function MyDataHeader() {
  const { actions } = useMyDataController();

  return (
    <div className={myDataHeaderRootTv()}>
      <div className={myDataHeaderContentTv()}>
        {actions.map((action) => (
          <Button.root type={action.type} size="small" key={action.id} color={action.color}>
            <Button.contentWrapper>
              <Button.label text={action.label} color="white" />
            </Button.contentWrapper>
          </Button.root>
        ))}
      </div>
    </div>
  );
}
