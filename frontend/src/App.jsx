import { useEffect, useState } from "react";
import api from "./api";
import SalesTrendChart from "./components/SalesTrendChart";
import FeatureImportanceChart from "./components/FeatureImportanceChart";

function App() {
  const [metrics, setMetrics] = useState(null);
  const [salesTrend, setSalesTrend] = useState([]);
  const [featureImportance, setFeatureImportance] = useState([]);

  useEffect(() => {
    api.get("/metrics").then((res) => {
      setMetrics(res.data);
    });

    api.get("/sales-trend").then((res) => {
      setSalesTrend(res.data);
    });
    api.get("/feature-importance")
      .then((res) => {
        setFeatureImportance(res.data);
      });
  }, []);

  if (!metrics) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 shadow-lg">
        <h1 className="text-4xl font-bold">
          AI Demand Forecasting Dashboard
        </h1>

        <p className="mt-2 text-lg">
          Walmart Sales Analytics & Forecasting
        </p>
      </div>

      <div className="p-8">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-gray-500">Total Sales</h3>
            <p className="text-2xl font-bold mt-2">
              ${(metrics.total_sales / 1000000000).toFixed(2)}B
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-gray-500">Average Sales</h3>
            <p className="text-2xl font-bold mt-2">
              ${metrics.average_sales.toFixed(0)}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-gray-500">MAE</h3>
            <p className="text-2xl font-bold mt-2">
              {metrics.mae}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-gray-500">R² Score</h3>
            <p className="text-2xl font-bold mt-2">
              {metrics.r2}
            </p>
          </div>

        </div>

        {/* Chart Section */}

        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-6">
            Monthly Sales Trend
          </h2>

          <div className="h-[500px]">
            <SalesTrendChart data={salesTrend} />
          </div>

        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-6">
            Feature Importance
          </h2>

          <FeatureImportanceChart
            data={featureImportance}
          />

        </div>

      </div>
    </div>
  );
}

export default App;