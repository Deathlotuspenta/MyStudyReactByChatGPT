import React from "react";

const Header: React.FC<{ showList: boolean; changeIsHidden: (value: boolean) => void }> = ({ showList, changeIsHidden }) => {
    return (
        <div>
            头部
            <br/>
            <button onClick={() => changeIsHidden(showList)}>按钮</button>
        </div>
    )
}

export default Header