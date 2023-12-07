import { ConnectBanner } from '~/src/app/shared/animations/connectBanner';
import * as tv from '../ProductsTV';

const renderRosarivoText = (text: string) => (
  <span className={tv.ProductsRosarivoTextTv()}>{text}</span>
);

export function ProductsHeader() {
  return (
    <>
      <ConnectBanner />
      <p className={tv.ProductsHeaderTitleTv()}>
        Nós {renderRosarivoText('gerenciamos')} sua empresa
      </p>
      <p className={tv.ProductsHeaderTextTv()}>
        E {renderRosarivoText('garantimos')} sua lucrabilidade
      </p>
      <p className={tv.ProductsHeaderSubtextTv()}>
        Conectando-se à rede da {renderRosarivoText('GerencyI')}, nós podemos lhe ajudar a{' '}
        {renderRosarivoText('gerenciar')} seu estoque de forma eficiente e econômica. Focados em
        vocês, nossos {renderRosarivoText('clientes')}, temos como objetivo ajudar a reduzir seus
        custos de estoque, aumentar sua satisfação com seus clientes e melhorar sua competitividade.
      </p>
    </>
  );
}
