import s from './Welcome.module.scss'
import p from '../assets/images/welcome4.svg'
import { useLocalStore } from '../stores/useLocalStore'
import { useNavigate } from 'react-router';
export const Welcome4: React.FC = () => {
    const { setHasReadWelcomes } = useLocalStore()
    const nav = useNavigate()
    const onSkip = () => {
        setHasReadWelcomes(true)
        nav('/welcome/xxx')
        // localStorage.setItem('hasReadWelcomes', 'yes')
    }
    return (
        <div className={s.welcome}>
            <img src={p} className = {s.p4}/>
            <h2 className={s.h2}>
                云备份<br />
                再也不怕数据丢失
            </h2>
            <div className={s.linkBox}>
                <span className={s.link} onClick={onSkip}>开启应用</span>
            </div>
        </div>
    )
}