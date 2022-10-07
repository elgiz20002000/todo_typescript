import React from "react";
import { List } from "./App";

interface Props {
    list:List[] 
    Check: (id:number) => void
    removeItem: (e:React.MouseEvent , id:number) => void
}
 
const Lists:React.FC<Props> = ({list , Check , removeItem}) => {
     return (
    <ul className="collection">
       {list.map(item => {
        return <li key={item.id} className={!item.checked ? "collection-item" : "collection-item completed"}>
                    <label >
                    <input type="checkbox" onChange={(e) => Check( item.id) }  checked={item.checked}/>
                    <span>{item.text}</span>
                    <i className="material-icons red-text right" onClick={(e) => removeItem(e , item.id)}>delete</i>
                    </label>
                </li>
       })}
    </ul>
     )
}
 
export default Lists ;