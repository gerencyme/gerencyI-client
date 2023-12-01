'use client';

import styled from './perspectiveTable.module.css';
import { useRef } from 'react';
import { useObserver } from '~shared/hooks/useObserver';
import { Table } from './views/Table';
import { VariantProps } from 'tailwind-variants';
import { animatedTableContentWrapperTv, animatedTableRootTv } from './animatedTableTV';
import { AreaChartComp } from './views/graphics/AreaChart';
import { Title } from '../../shared/components/Title';
import { PieChartComp } from './views/graphics/PieChart';
import { BestSellers } from './views/graphics/BestSellers';

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

            <AreaChartComp isPressable={isPressable} />
            <PieChartComp />
            <BestSellers />
          </>
        )}
      </div>
    </div>
  );
}
