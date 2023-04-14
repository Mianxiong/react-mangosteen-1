import s from './Welcome.module.scss'
import p from '../assets/images/welcome3.svg'
export const Welcome3: React.FC = () => {
    return (
        <div className={s.welcome}>
            <img src={p} className = {s.p3}/>
            <h2 className={s.h2}>
                数据可视化<br />
                收支一目了然
            </h2>
        </div>
    )
}