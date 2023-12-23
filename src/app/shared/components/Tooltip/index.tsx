import * as TooltipRadix from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';
import { Text } from '~shared/components/Text';
import { capitalizeName } from '~utils/transformers';
import { contentTv } from './TooltipTv';
import { VariantProps } from 'tailwind-variants';

interface TooltipProps extends VariantProps<typeof contentTv> {
  children: ReactNode;
  text?: string;
  className?: string;
  isArrow?: boolean;
  content?: () => JSX.Element;
}

export function Tooltip({
  children,
  className,
  text,
  color,
  contentState,
  isArrow = true,
  content
}: TooltipProps) {
  const timeToAppear = 0;
  const hasContent: typeof contentState = content ? 'withContent' : 'withoutContent';

  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root delayDuration={timeToAppear}>
        <TooltipRadix.Trigger asChild>
          <span className="w-fit">{children}</span>
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className={contentTv({ color, className, contentState: hasContent })}
          >
            {content?.() ?? (
              <>
                <Text
                  text={capitalizeName(text ?? '')}
                  color={color === 'black' ? 'white' : 'black'}
                  size="sm"
                />
              </>
            )}
            {isArrow && <TooltipRadix.Arrow />}
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
