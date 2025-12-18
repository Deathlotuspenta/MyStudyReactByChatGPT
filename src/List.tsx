import React, { useState } from "react"
const userNameList = ["Tom", "Jack", "Rose"]



const List: React.FC = () => {

    const [isHidden, setIsHidden] = useState(true)

    const changeIsHidden = (value: boolean) => {
        setIsHidden(value)
    }

    return (
        <div>
            {/* <button onClick={()=> setIsHidden(!isHidden)}>是否显示</button>     */}

            <button onClick={() => changeIsHidden(!isHidden)}>是否显示</button>

            {
                !isHidden &&
                <ul>
                    {userNameList.map(username => (
                        <li key={username}>{username}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default List