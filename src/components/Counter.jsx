import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count])

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h1 className="text-3xl font-bold mb-6">
                Counter App
            </h1>

            <h2 className="text-4xl font-bold mb-6">
                {count}
            </h2>

            <div className="flex gap-3 justify-center">
                <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    -
                </button>

                <button
                    onClick={() => setCount(0)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Reset
                </button>

                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    +
                </button>
            </div>
        </div>
    );
}

export default Counter;