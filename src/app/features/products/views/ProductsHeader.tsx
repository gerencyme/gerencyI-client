import { ConnectBanner } from '~/src/app/shared/animations/connectBanner';
import * as tv from '../ProductsTV';

const renderHighlightedText = (text: string) => (
  <strong className={tv.ProductsHighlightTextTv()}>{text}</strong>
);

export function ProductsHeader() {
  return (
    <>
      <ConnectBanner />
      <p className={tv.ProductsHeaderTitleTv()}>
        Nós {renderHighlightedText('gerenciamos')} sua empresa
      </p>
      <p className={tv.ProductsHeaderTextTv()}>
        E {renderHighlightedText('garantimos')} sua lucrabilidade
      </p>
      <p className={tv.ProductsHeaderSubtextTv()}>
        Conectando-se à rede da {renderHighlightedText('GerencyI')}, nós podemos lhe ajudar a{' '}
        {renderHighlightedText('gerenciar')} seu estoque de forma eficiente e econômica. Focados em
        vocês, nossos {renderHighlightedText('clientes')}, temos como objetivo ajudar a reduzir seus
        custos de estoque, aumentar sua satisfação com seus clientes e melhorar sua competitividade.
      </p>
    </>
  );
}
