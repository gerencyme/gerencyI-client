'use client';

import { Button } from '~/src/app/shared/components/Button';
import { useMyDataController } from '../controller';

export function MyDataHeader() {
  const { actions } = useMyDataController();

  return (
    <div className="w-full flex md:justify-end pb-5">
      <div className="flex gap-2 sm:gap-4 ">
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
