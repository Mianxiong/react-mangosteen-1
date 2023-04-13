import { NavLink } from "react-router-dom"
import * as React from 'react'
export const Welcome3: React.FC = () => {
    return (
        // <div>
        //     <header b-1 b-red h-40px></header>
        //     <main b-1 b-blue h-100px></main>
        //     <footer b-1 b-black h-55px></footer>
        // </div>
        <div> 3 <NavLink to="/welcome/4" >下一页</NavLink></div>
    )
}