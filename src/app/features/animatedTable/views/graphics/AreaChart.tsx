import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { areaChartdata } from '../../animatedTableUtils';

interface AreaChartCompProps {
  isPressable: boolean;
}

export function AreaChartComp({ isPressable }: AreaChartCompProps) {
  return (
    <ResponsiveContainer
      width={700}
      height="80%"
      className={`duration-300 pointer-events-auto ${isPressable ? 'scale-95' : 'scale-100'}`}
    >
      <AreaChart
        width={730}
        height={250}
        data={areaChartdata}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#583ED3" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#583ED3" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorGerencyI" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#37A18F" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#37A18F" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
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
