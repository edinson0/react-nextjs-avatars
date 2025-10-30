import React, { useState } from 'react';
import Avvvatars from 'avvvatars-react';
import './App.css';

function App() {
  const [value, setValue] = useState('Maria Garcia');
  const [style, setStyle] = useState('shape');
  const [size, setSize] = useState(40);

  const styles = ['character', 'shape'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎨 Avvvatars React Demo</h1>
        
        <div className="avatar-container">
          <Avvvatars 
            value={value} 
            style={style} 
            size={size}
          />
        </div>

        <div className="controls">
          <div className="control-group">
            <label>Texto para el avatar:</label>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Escribe un nombre..."
            />
          </div>

          <div className="control-group">
            <label>Estilo:</label>
            <select value={style} onChange={(e) => setStyle(e.target.value)}>
              {styles.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Tamaño: {size}px</label>
            <input
              type="range"
              min="20"
              max="200"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;