import React, { useState } from "react"


const List: React.FC<{nameList: {id:number,name:string}[],removeName: (id: number) => boolean}> = ({nameList, removeName}) => {

    return (
        <div>
            {/* <button onClick={()=> setIsHidden(!isHidden)}>是否显示</button>     */}
            <ul>
                {nameList.map(name => (
                    <li key={name.id}>
                        {name.name}
                        <button style={{marginLeft: '10px'}} onClick={() => {
                            let isSuecces = removeName(name.id);
                            if (isSuecces) {
                                alert(`删除${name.name}成功`);
                            }
                            
                        }}>删除</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default List