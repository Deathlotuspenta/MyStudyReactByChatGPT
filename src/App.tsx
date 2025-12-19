import './App.css';
import Header from './components/Header.tsx';
import List from './components/List.tsx';
import Foot from './components/Foot.tsx';
import { useState } from 'react';


function App() {
  const [showList, setShowList] = useState(true);
  const [nameList, setNameList] = useState([{ id: 1, name: '张三' }, { id: 2, name: '李四' }, { id: 3, name: '王五' }]);
  const [userInputName, setUserInputName] = useState('');
  const [lastRemovedName, setLastRemovedName] = useState<string | null>(null);

  function changeIsHidden() {
    // react中状态更新不是立刻生效的，是异步的
    // 所以不能通过showList的值来更新showList setShowList(!showList) 这样写是错误的 如果连续调用两次 则结果会出错
    // 推荐使用函数式的写法 如果不依赖旧值可以直接写成setShowList(true or false) 如果依赖旧值则写成setShowList(prev => !prev)
    setShowList(prev => !prev);
  }


  function addName(id: number, name: string) {
    setNameList(prev => [...prev, { id, name }]);
  }

  function removeName(id: number): boolean {
    const removedItem = nameList.find(item => item.id === id);
    if (!removedItem) return false;

    const confirmDelete = window.confirm(`确定要删除${removedItem.name}吗？`);
    if (!confirmDelete) return false;

    setNameList(prev => prev.filter(item => item.id !== id));
    setLastRemovedName(removedItem.name);

    return true;
  }


  return (
    <div className="App">

      {lastRemovedName && <div className='removedName'>上次删除的名字是: {lastRemovedName}</div>}
      <hr />

      <div className='addNameButton'>
        <button onClick={() => addName(nameList.length + 1, '赵六')}>添加名字</button>
      </div>
      <hr />

      {/* value 是清空输入框的关键！！如果没有绑定着无法清空输入框 */}
      <input type="text" placeholder='请输入要添加的名字' value={userInputName} onChange={(e) => setUserInputName(e.target.value)} />
      <button onClick={() => {
        if (userInputName.trim() === '') {
          alert('名字不能为空');
          return;
        }
        addName(nameList.length + 1, userInputName.trim());
        // 用于清空输入框
        setUserInputName('');
      }}>
        添加名字
      </button>

      <hr />
      <Header showList={showList} changeIsHidden={changeIsHidden} />
      {showList && (nameList.length > 0 ? <List nameList={nameList} removeName={removeName} /> : <div>暂无数据</div>)}

      <hr />
      <Foot />
    </div>
  );
}

export default App;
