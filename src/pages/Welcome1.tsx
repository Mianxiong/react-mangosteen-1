// import c from 'classnames'
// import { NavLink } from 'react-router-dom'
import s from './Welcome.module.scss'
import p from '../assets/images/welcome1.svg'

export const Welcome1: React.FC = () => {
  return (
    <div className={s.welcome}>
      <img src={p} className={s.p1}/>
      <h2 className={s.h2}>
        会挣钱 <br />
        还要会省钱
      </h2>
    </div>
  )
}
    // <div className={c([s.wrapper, s.blue, 'hmx'])}>
    //   山竹记账
    // </div>
    // <div> 1 <NavLink to="/welcome/2" >下一页</NavLink></div>
