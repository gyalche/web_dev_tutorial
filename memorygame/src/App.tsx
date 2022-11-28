import { useState } from 'react';
import './App.css';

function App() {
  const [grid, setGrid] = useState([
    [0, 3, 5, 1],
    [1, 2, 2, 4],
    [4, 3, 5, 0],
  ]);
  return (
    <div className="App">
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((column, columnIndex) => (
              <div key={columnIndex} className="card">
                {column}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
