import p from '../assets/images/pig.svg'
import s from './Home.module.scss'
import add from '../assets/icons/add.svg'

export const Home: React.FC = () => {
    return <div>
        <div className={s.imgBox}>
            <img src={p} className={s.pig} />
        </div>
        <div className={s.btnBox}>
            <button className={s.btn}>开始记账</button>
        </div>

        <button className={s.btnBottom}>
            <img src={add} />
        </button>
    </div>
}