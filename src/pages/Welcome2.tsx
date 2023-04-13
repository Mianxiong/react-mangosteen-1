// import styled from 'styled-components';
// const Div = styled.div`
//   border: 1px solid red;
//   &:hover{
//     background: red;
//   }
// `
// const BlueBox = styled(Div)`
//   border-color: blue;

import { NavLink } from "react-router-dom"

// `
export const Welcome2: React.FC = () => {
  return (
    // <div>
    //   <Div>
    //     Hi
    //   </Div>
    //   <BlueBox>
    //     hi
    //   </BlueBox>
    // </div>
    <div> 2 <NavLink to="/welcome/3" >下一页</NavLink></div>
  )
}