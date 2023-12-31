'use client';

import { Section } from '~/src/app/shared/components/Section';
import { AnimatedTable } from '~features/animatedTable';
import { AboutService } from '~/src/app/features/aboutService';
import { Products } from '~/src/app/features/products';
import { useProductsController } from '~/src/app/features/products/controller/useProductsController';

export default function ProductsPage() {
  const { isPressable, isTable, togglePress, setIsTable } = useProductsController();

  return (
    <Products.root>
      <Products.header />
      <Products.actions setIsTable={setIsTable} togglePress={togglePress} />
      <AnimatedTable isPressable={isPressable} togglePress={togglePress} isTable={isTable} />
      <Section id="more">
        <AboutService.content />
      </Section>
    </Products.root>
  );
}
