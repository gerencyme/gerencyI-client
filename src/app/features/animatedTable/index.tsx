'use client';

import { useRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { useObserver } from '~shared/hooks/useObserver';
import { Title } from '~shared/components/Title';
import { Graphics } from '~shared/components/Graphics';
import { animatedTableContentWrapperTv, animatedTableRootTv } from './animatedTableTV';
import { Table } from './views/Table';
import styled from './perspectiveTable.module.css';

interface AnimatedTableProps extends VariantProps<typeof animatedTableRootTv> {
  isTable: boolean;
  isPressable: boolean;
  togglePress: () => void;
}

export function AnimatedTable({ isTable, isPressable, state, togglePress }: AnimatedTableProps) {
  const tableRef = useRef(null);

  const { isVisible } = useObserver(tableRef);

  const isVisibeState: typeof state = isVisible ? 'isVisible' : 'notVisible';

  return (
    <div
      ref={tableRef}
      onMouseDown={togglePress}
      onMouseUp={togglePress}
      className={`${animatedTableRootTv({ state: isVisibeState })} ${styled.perspectiveTable}`}
    >
      <div className={animatedTableContentWrapperTv({ state: isVisibeState })}>
        {isTable ? (
          <Table isPressable={isPressable} />
        ) : (
          <>
            <Title
              color="white"
              size="xl"
              weigth="bold"
              title="Seu lucro semanal"
              className="text-center"
            />

            <Graphics.areaChart isPressable={isPressable} />
            <Graphics.pieChard isPressable={isPressable} />
            <Graphics.bestSellers isPressable={isPressable} />
          </>
        )}
      </div>
    </div>
  );
}
