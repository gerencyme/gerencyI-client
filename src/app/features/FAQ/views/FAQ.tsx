'use client';

import { Faq } from '~/src/app/shared/components/FAQ';
import { Collapsable } from '~/src/app/shared/components/collapsible';
import { useFAQController } from '../controller';

export function FAQ() {
  const { selecionedCollapsible, FaqItems } = useFAQController();

  return (
    <Faq.root>
      <Faq.title />
      <Faq.content>
        {FaqItems?.map((content, i) => (
          <Collapsable.root
            key={i}
            toggle={() => content.toggle(content)}
            isOpen={content.selecionedCollapsible}
          >
            <Collapsable.header title={content.title}>
              <Collapsable.icon isOpen={selecionedCollapsible?.id === content.id} />
            </Collapsable.header>
            <Collapsable.content text={selecionedCollapsible ? content.text : ''} />
          </Collapsable.root>
        ))}
      </Faq.content>
    </Faq.root>
  );
}
