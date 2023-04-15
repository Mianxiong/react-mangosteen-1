import s from '../pages/Home.module.scss'
import add from '../assets/icons/add.svg'
export const AddItemFloatButton: React.FC = () => {
    return (
        <button className={s.btnBottom}>
            <img src={add} />
        </button>)
}