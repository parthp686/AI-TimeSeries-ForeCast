import { useState } from "react";
import api from "../api";

function PredictionForm() {

    const [prediction, setPrediction] = useState(null);

    const [formData, setFormData] = useState({
        Store: 1,
        Dept: 1,
        Temperature: 50,
        Fuel_Price: 3,
        Size: 151315,
        Lag_1: 20000
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: Number(e.target.value)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const payload = {
                Store: formData.Store,
                Dept: formData.Dept,
                Temperature: formData.Temperature,
                Fuel_Price: formData.Fuel_Price,

                MarkDown1: 0,
                MarkDown2: 0,
                MarkDown3: 0,
                MarkDown4: 0,
                MarkDown5: 0,

                CPI: 210,
                Unemployment: 8,

                Type: 0,
                Size: formData.Size,

                Year: 2026,
                Month: 6,
                Week: 25,
                Quarter: 2,

                Lag_1: formData.Lag_1,
                Lag_2: formData.Lag_1,
                Lag_4: formData.Lag_1,
                Lag_8: formData.Lag_1,
                Lag_12: formData.Lag_1,

                Rolling_4_Week: formData.Lag_1,
                Rolling_8_Week: formData.Lag_1,
                Rolling_12_Week: formData.Lag_1
            };

            const response = await api.post(
                "/predict",
                payload
            );

            setPrediction(
                response.data.predicted_sales
            );

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-8">

            <h2 className="text-2xl font-bold mb-6">
                AI Sales Prediction
            </h2>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-4"
            >

                <div>
                    <label className="block mb-1 font-medium">
                        Store ID
                    </label>

                    <input
                        type="number"
                        name="Store"
                        value={formData.Store}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Department
                    </label>

                    <input
                        type="number"
                        name="Dept"
                        value={formData.Dept}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Temperature
                    </label>

                    <input
                        type="number"
                        name="Temperature"
                        value={formData.Temperature}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Fuel Price
                    </label>

                    <input
                        type="number"
                        name="Fuel_Price"
                        value={formData.Fuel_Price}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Store Size
                    </label>

                    <input
                        type="number"
                        name="Size"
                        value={formData.Size}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Last Week Sales
                    </label>

                    <input
                        type="number"
                        name="Lag_1"
                        value={formData.Lag_1}
                        onChange={handleChange}
                        className="border p-2 rounded w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="col-span-2 bg-blue-600 text-white p-3 rounded-lg"
                >
                    Predict Sales
                </button>

            </form>

            {prediction && (
                <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-6 rounded-2xl shadow-md">

                    <h3 className="text-2xl font-bold text-green-700">
                        AI Forecast Result
                    </h3>

                    <p className="text-5xl font-bold mt-4 text-gray-800">
                        ₹ {prediction.toLocaleString()} to be excepted sale of this week...
                    </p>

                    <div className="mt-4 text-gray-600">

                        <p>
                            Model Accuracy:
                            <span className="font-semibold text-green-600 ml-2">
                                98.23%
                            </span>
                        </p>

                        <p>
                            Average Error:
                            <span className="font-semibold text-orange-600 ml-2">
                                8.70%
                            </span>
                        </p>

                    </div>

                </div>
            )}

        </div>
    );
}

export default PredictionForm;