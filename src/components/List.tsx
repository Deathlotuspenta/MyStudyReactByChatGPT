import React, { useState } from "react"
const userNameList = ["Tom", "Jack", "Rose"]

const List: React.FC = () => {

    return (
        <div>
            {/* <button onClick={()=> setIsHidden(!isHidden)}>是否显示</button>     */}
            <ul>
                {userNameList.map(username => (
                    <li key={username}>{username}</li>
                ))}
            </ul>

        </div>
    )
}

export default List