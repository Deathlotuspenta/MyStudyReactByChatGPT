import './App.css';
import Header from './components/Header.tsx';
import List from './components/List.tsx';
import Foot from './components/Foot.tsx';
import { useState } from 'react';


function App() {
  const [showList,setShowList] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowList(!showList)}>{showList ? '隐藏' : '显示'}</button>
      <Header />
      {showList && <List />}
      <Foot />
    </div>
  );
}

export default App;
