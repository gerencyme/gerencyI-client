'use client';

import { Fac } from '~/src/app/shared/components/FAQ';
import { Collapsable } from '~/src/app/shared/components/collapsible';
import { useFAQController } from '../controller';
import { Suspense } from 'react';

export function FAQ() {
  const { selecionedCollapsible, FaqItems } = useFAQController();

  return (
    <Fac.root>
      <Fac.title />
      <Fac.content>
        {FaqItems?.map((content, i) => (
          <Suspense key={i} fallback={<p>Carregando...</p>}>
            <Collapsable.root
              toggle={() => content.toggle(content)}
              isOpen={content.selecionedCollapsible}
            >
              <Collapsable.header title={content.title}>
                <Collapsable.icon isOpen={selecionedCollapsible?.id === content.id} />
              </Collapsable.header>
              <Collapsable.content text={selecionedCollapsible ? content.text : ''} />
            </Collapsable.root>
          </Suspense>
        ))}
      </Fac.content>
    </Fac.root>
  );
}
