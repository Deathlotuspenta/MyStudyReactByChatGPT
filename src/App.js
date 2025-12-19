import './App.css';
import Header from './components/Header.tsx';
import List from './components/List.tsx';
import Foot from './components/Foot.tsx';
import { useState } from 'react';


function App() {
  const [showList,setShowList] = useState(false);


function changeIsHidden(value) {
  setShowList(!value);
}

  return (
    <div className="App">
      <Header showList={showList} onToggle={changeIsHidden} />
      {showList && <List />}
      <Foot />
    </div>
  );
}

export default App;
