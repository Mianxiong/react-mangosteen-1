import s from './Welcome.module.scss'
import p from '../assets/images/welcome4.svg'
export const Welcome4: React.FC = () => {
    return (
        <div className={s.welcome}>
            <img src={p} className = {s.p4}/>
            <h2 className={s.h2}>
                云备份<br />
                再也不怕数据丢失
            </h2>
        </div>
    )
}