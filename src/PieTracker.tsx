import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

interface GoalProgressPieChartProps {
  goalPrice: number;
  currentPrice: number;
}

const GoalProgressPieChart: React.FC<GoalProgressPieChartProps> = ({ goalPrice, currentPrice }) => {
  const progress = Math.min(currentPrice / goalPrice, 1);
  const remaining = 1 - progress;

  const data = [
    { name: 'Progress', value: progress },
    { name: 'Remaining', value: remaining },
  ];

  const COLORS = ['#4CAF50', '#E0E0E0'];

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">House Deposit</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label
                value={`${(progress * 100).toFixed(0)}%`}
                position="center"
                fill="white"
                style={{ fontSize: '24px', fontWeight: 'bold' }}
            />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <p className="text-lg">
            Current: ${currentPrice.toFixed(2)} / Goal: ${goalPrice.toFixed(2)}
          </p>
          <p className="text-xl font-semibold mt-2">
            {(progress * 100).toFixed(0)}% Complete
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalProgressPieChart;