import { useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { pieChartData as mockedPieChartData } from '~features/animatedTable/animatedTableUtils';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';
import { PieChartData } from '~types/graphics/PieChartData';
import { VariantProps } from 'tailwind-variants';
import { pieChartCompTv } from '../GraphicsTV';
import { useWindow } from '../../../hooks/useWindow';

interface RenderActiveShapeProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: {
    name: string;
  };
  percent: number;
  value: number;
}

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value
}: RenderActiveShapeProps) => {
  const RADIAN = Math.PI / 180;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  const splitedName = payload.name.split(' ')[0];

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {splitedName}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#eee"
      >{`${splitedName} ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#fff">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

interface PieChartCompProps extends VariantProps<typeof pieChartCompTv> {
  isPressable: boolean;
  pieChartData?: PieChartData[];
}

export function PieChartComp({ pieChartData, isPressable, pressableState }: PieChartCompProps) {
  const { width } = useWindow();
  const [activeIndex, setActiveIndex] = useState(0);
  const state: typeof pressableState = isPressable ? 'isPressable' : 'notPressable';

  return (
    <ResponsiveContainer
      height="100%"
      width={width > 768 ? '42%' : '100%'}
      className={pieChartCompTv({ pressableState: state })}
    >
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape as PieSectorDataItem}
          data={pieChartData ?? mockedPieChartData}
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={40}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={({ payload }) => setActiveIndex(payload.id)}
          className="text-xxs md:text-md"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
