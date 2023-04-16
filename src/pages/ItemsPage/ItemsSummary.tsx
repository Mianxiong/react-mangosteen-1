import s from './ItemsSummary.module.scss'
export const ItemsSummary: React.FC = () => {
    return (
        <ol className={s.ol}>
            <li>
                <div>收入</div>
                <div>1000</div>
            </li>
            <li>
                <div>支出</div>
                <div>1000</div>
            </li>
            <li>
                <div>净收入</div>
                <div>1000</div>
            </li>
        </ol>
    )
}