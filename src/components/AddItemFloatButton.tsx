import s from '../pages/Home.module.scss'
import { Icon } from './Icon'
export const AddItemFloatButton: React.FC = () => {
    return (
        <button className={s.btnBottom}>
            <Icon name="add" className={s.addIcon} />
        </button>)
}
