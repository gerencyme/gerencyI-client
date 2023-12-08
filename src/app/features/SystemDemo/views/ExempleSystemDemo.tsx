import { SystemDemo } from '~/src/app/shared/components/SystemDemo';
import Logo from '~assets/svg/logo.svg';
import { segmentCardOptions } from '../SystemDemoUtils';

export function ExempleSystemDemo() {
  return (
    <SystemDemo.root>
      <div className="sm:absolute sm:top-72 lg:top-96 left-2 lg:left-6">
        <SystemDemo.simpleCard
          mainText="Contrate a GerencyI"
          secondaryText="Nós poupamos tempo e dinheiro"
          src={Logo}
        />
      </div>
      <div className="sm:absolute sm:top-[29rem] lg:top-[35rem] sm:left-6 lg:left-20">
        <SystemDemo.segmentCard options={segmentCardOptions} />
      </div>
      <div className="flex flex-col-reverse items-center justify-center gap-4">
        <div className="sm:absolute sm:top-[35rem] lg:top-[40rem] left-1/3">
          <SystemDemo.inventoryControl />
        </div>
        <div className="sm:absolute sm:top-96 lg:top-[28rem] right-2 lg:right-6">
          <SystemDemo.simpleCard
            mainText="Cuidar de um estabelecimento nuca foi tão fácil"
            secondaryText="Nós cuidamos do gerenciamento enquanto você aumenta seus lucros!"
          />
        </div>
      </div>
    </SystemDemo.root>
  );
}
