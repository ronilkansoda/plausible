import React, { useState } from 'react';

function App() {
  const [result, setResult] = useState('Click results will appear here...');

  const handleClick = (buttonNumber) => {
    setResult(`Button ${buttonNumber} was clicked!`);
    if (window.plausible) {
      const eventName = buttonNumber === 1 ? 'button1Click' : 'button2Click';

      window.plausible(eventName);
      console.log(eventName)
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-5 font-sans">
      <h1 className="text-3xl text-center text-gray-800 font-bold mb-4">Test Frontend</h1>
      <p className="text-gray-700 mb-6">
        This is a simple test frontend with buttons to click. Click the buttons below to see their effects:
      </p>

      <div className="flex flex-col gap-3 mb-6">
        {[1, 2].map((num) => (
          <button
            key={num}
            onClick={() => handleClick(num)}
            className="bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded text-lg"
          >
            Button {num}
          </button>
        ))}
      </div>

      <div className="border p-4 rounded min-h-[100px] text-gray-800 bg-gray-50">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
