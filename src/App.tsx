import './App.css';
import Header from './components/Header.tsx';
import List from './components/List.tsx';
import Foot from './components/Foot.tsx';
import { useState } from 'react';


function App() {
  const [showList, setShowList] = useState(false);
  const [nameList, setNameList] = useState([{ id: 1, name: '张三' }, { id: 2, name: '李四' }, { id: 3, name: '王五' }]);


  function changeIsHidden() {
    // react中状态更新不是立刻生效的，是异步的
    // 所以不能通过showList的值来更新showList setShowList(!showList) 这样写是错误的 如果连续调用两次 则结果会出错
    // 推荐使用函数式的写法 如果不依赖旧值可以直接写成setShowList(true or false) 如果依赖旧值则写成setShowList(prev => !prev)
    setShowList(prev => !prev);
  }


  function addName(id: number, name: string) {
    setNameList(prev => [...prev, {id,name}]);
  }

  function removeName(id: number): boolean {
    let removed = nameList.some(name => name.id === id);
    setNameList(prev => prev.filter(name => {return name.id !== id}));
    return removed;
  }


  return (
    <div className="App">

      <div className='addNameButton'>
        <button onClick={() => addName(nameList.length + 1, '赵六')}>添加名字</button>
      </div>

      <Header showList={showList} changeIsHidden={changeIsHidden} />
      {showList && <List nameList={nameList} removeName={removeName} />}
      <Foot />
    </div>
  );
}

export default App;
