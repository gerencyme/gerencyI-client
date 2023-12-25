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
import { VariantProps } from 'tailwind-variants';
import { AreaChartData } from '~types/graphics/AreaChartData';
import { areaChartCompTv } from '../GraphicsTV';
import { areaChartData } from '~/src/app/features/animatedTable/animatedTableUtils';

interface AreaChartCompProps extends VariantProps<typeof areaChartCompTv> {
  isPressable: boolean;
  chartData?: AreaChartData[];
}

export function AreaChartComp({ isPressable, chartData, pressableState }: AreaChartCompProps) {
  const state: typeof pressableState = isPressable ? 'isPressable' : 'notPressable';

  return (
    <ResponsiveContainer className={areaChartCompTv({ pressableState: state })}>
      <AreaChart
        width={730}
        height={250}
        data={chartData ?? areaChartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
            <stop offset="25%" stopColor="#583ED3" stopOpacity={0.8} />
            <stop offset="75%" stopColor="#583ED3" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorGerencyI" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#37A18F" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#37A18F" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis className="text-xs md:text-md" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="GerencyI"
          stroke="#37A18F"
          fillOpacity={1}
          fill="url(#colorGerencyI)"
        />
        <Area
          type="monotone"
          dataKey="Autônomo"
          stroke="#583ED3"
          fillOpacity={1}
          fill="url(#colorAuto)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
