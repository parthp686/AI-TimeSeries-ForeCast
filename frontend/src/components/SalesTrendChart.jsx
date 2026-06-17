import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SalesTrendChart({ data }) {

  return (
    <div>
      <h2>Monthly Sales Trend</h2>

      <ResponsiveContainer
        width="100%"
        height={400}
      >
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="Month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="Weekly_Sales"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesTrendChart;