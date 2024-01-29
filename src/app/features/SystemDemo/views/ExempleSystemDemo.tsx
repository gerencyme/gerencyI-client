import { SystemDemo } from '~/src/app/shared/components/SystemDemo';
import Logo from '~assets/svg/logo.svg';
import { segmentCardOptions } from '../SystemDemoUtils';
import * as tv from '../SystemDemoTV';

export function ExempleSystemDemo() {
  return (
    <SystemDemo.root>
      <div className={tv.systemDemoSimpleCardTv()}>
        <SystemDemo.simpleCard
          mainText="Contrate a GerencyI"
          secondaryText="Nós poupamos tempo e dinheiro"
          src={Logo}
        />
      </div>
      <div className={tv.systemDemoSegmentCardTv()}>
        <SystemDemo.segmentCard options={segmentCardOptions} />
      </div>
      <div className={tv.systemDemoFooterWrapperTv()}>
        <div className={tv.systemDemoInventoryControlTv()}>
          <SystemDemo.inventoryControl />
        </div>
        <div className={tv.systemDemoFooterSimpleCardTv()}>
          <SystemDemo.simpleCard
            mainText="Cuidar de um estabelecimento nuca foi tão fácil"
            secondaryText="Nós cuidamos do gerenciamento enquanto você aumenta seus lucros!"
          />
        </div>
      </div>
    </SystemDemo.root>
  );
}
