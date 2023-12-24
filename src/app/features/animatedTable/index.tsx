'use client';

import { useRef } from 'react';
import { VariantProps } from 'tailwind-variants';
import { useObserver } from '~shared/hooks/useObserver';
import { Title } from '~shared/components/Title';
import { Graphics } from '~shared/components/Graphics';
import { Table } from './views/Table';
import * as tv from './animatedTableTV';
import styled from './perspectiveTable.module.css';

interface AnimatedTableProps extends VariantProps<typeof tv.animatedTableRootTv> {
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
      className={`${tv.animatedTableRootTv({ state: isVisibeState })} ${styled.perspectiveTable}`}
    >
      <div className={tv.animatedTableContentWrapperTv({ state: isVisibeState })}>
        {isTable ? (
          <Table isPressable={isPressable} />
        ) : (
          <>
            <Title
              color="white"
              size="xl"
              weight="bold"
              title="Seu lucro semanal"
              className={tv.animatedTabledGraphicsTitletv()}
            />

            <Graphics.areaChart isPressable={isPressable} />
            <div className={tv.animatedTabledNiddleContenttv()}>
              <Graphics.pieChard isPressable={isPressable} />
              <Graphics.simpleAreaChart isPressable={isPressable} />
            </div>
            <Graphics.bestSellers hoverState="hovered" isPressable={isPressable} />
          </>
        )}
      </div>
    </div>
  );
}
