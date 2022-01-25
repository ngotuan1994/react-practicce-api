import { useEffect, useState } from 'react';
import './App.css';
import Content from './Component/Content/Content';
function App() {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(prev => !prev)
  }

  return (
    <div className="App">
      <button onClick={handleToggle}> Toggle

      </button>
      {show ? <Content></Content> : null}
    </div>
  );
}

export default App;
