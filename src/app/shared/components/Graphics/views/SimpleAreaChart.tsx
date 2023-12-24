'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { simpleAreaChartTv } from '../GraphicsTV';
import { VariantProps } from 'tailwind-variants';
import { AreaChartData } from '~types/graphics/AreaChartData';
import { areaChartData } from '~features/animatedTable/animatedTableUtils';

interface SimpleAreaChartProps extends VariantProps<typeof simpleAreaChartTv> {
  isPressable: boolean;
  chartData?: AreaChartData[];
}

export function SimpleAreaChart({ isPressable, chartData, pressableState }: SimpleAreaChartProps) {
  const state: typeof pressableState = isPressable ? 'isPressable' : 'notPressable';

  return (
    <ResponsiveContainer
      className={simpleAreaChartTv({ pressableState: state })}
      width="50%"
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
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="GerencyI" stroke="#583ED3" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
