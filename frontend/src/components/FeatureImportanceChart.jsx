import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function FeatureImportanceChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart
        data={data}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis type="number" />

        <YAxis
          dataKey="Feature"
          type="category"
          width={100}
        />

        <Tooltip />

        <Bar
          dataKey="Importance"
          radius={[0, 6, 6, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default FeatureImportanceChart;