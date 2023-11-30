'use client';

import styled from './perspectiveTable.module.css';
import { useRef } from 'react';
import { useObserver } from '~shared/hooks/useObserver';
import { Text } from '~shared/components/Text';
import { Table } from './views/Table';
import { VariantProps } from 'tailwind-variants';
import { animatedTableContentWrapperTv, animatedTableRootTv } from './animatedTableTV';

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
          <Text text="Em construção" color="white" size="xl" weigth="semi-bold" />
        )}
      </div>
    </div>
  );
}
