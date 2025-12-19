import React from "react";

const Header: React.FC<{ showList: boolean; onToggle: (value: boolean) => void }> = ({ showList, onToggle }) => {
    return (
        <div>
            头部
            <br/>
            <button onClick={() => onToggle(showList)}>按钮</button>
        </div>
    )
}

export default Header