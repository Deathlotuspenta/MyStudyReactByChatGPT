import './App.css';
import Header from './components/Header.tsx';
import List from './components/List.tsx';
import Foot from './components/Foot.tsx';
import { useState } from 'react';


function App() {
  const [showList,setShowList] = useState(false);


function changeIsHidden() {
  // react中状态更新不是立刻生效的，是异步的
  // 所以不能通过showList的值来更新showList setShowList(!showList) 这样写是错误的 如果连续调用两次 则结果会出错
  // 推荐使用函数式的写法 如果不依赖旧值可以直接写成setShowList(true or false) 如果依赖旧值则写成setShowList(prev => !prev)
  setShowList(prev => !prev);
}

  return (
    <div className="App">
      <Header showList={showList} changeIsHidden={changeIsHidden} />
      {showList && <List />}
      <Foot />
    </div>
  );
}

export default App;
