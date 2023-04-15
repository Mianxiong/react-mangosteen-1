import s from '../pages/Home.module.scss'
export const AddItemFloatButton: React.FC = () => {
    return (
        <button className={s.btnBottom}>
            <svg style={{ fill: 'red', width: '1.2em', height: '1.2em' }}>
                <use xlinkHref='#menu'></use>
            </svg>
        </button>)
}