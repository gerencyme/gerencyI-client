'use client';

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { simpleAreaChartTv } from '../GraphicsTV';
import { VariantProps } from 'tailwind-variants';
import { AreaChartData } from '~types/graphics/AreaChartData';
import { areaChartData } from '~features/animatedTable/animatedTableUtils';

interface SimpleAreaChartProps extends VariantProps<typeof simpleAreaChartTv> {
  isPressable: boolean;
  width?: string;
  chartData?: AreaChartData[];
}

export function SimpleAreaChart({
  isPressable,
  chartData,
  pressableState,
  visibility,
  width = '50%'
}: SimpleAreaChartProps) {
  const state: typeof pressableState = isPressable ? 'isPressable' : 'notPressable';

  return (
    <ResponsiveContainer
      className={simpleAreaChartTv({ pressableState: state, visibility })}
      width={width}
      height="100%"
    >
      <AreaChart
        width={500}
        height={400}
        data={chartData ?? areaChartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="GerencyI" stroke="#00F519" fill="#37A18F" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
