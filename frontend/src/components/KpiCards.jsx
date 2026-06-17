function KpiCards({ metrics }) {
  return (
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
  );
}

export default KpiCards;