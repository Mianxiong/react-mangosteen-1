import s from './Welcome.module.scss'
import p from '../assets/images/welcome2.svg'
export const Welcome2: React.FC = () => {
  return (
    <div className={s.welcome}>
      <img src={p} className = {s.p2}/>
      <h2 className={s.h2}>
        每日提醒<br />
        不会遗漏每一笔账单
      </h2>
    </div>
  )
}
// import styled from 'styled-components';
// const Div = styled.div`
//   border: 1px solid red;
//   &:hover{
//     background: red;
//   }
// `
// const BlueBox = styled(Div)`
//   border-color: blue;