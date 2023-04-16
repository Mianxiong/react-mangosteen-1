import s from './ItemsList.module.scss'
interface Props {
    items: Item[]
}
export const ItemsList: React.FC<Props> = ({ items }) => {
    return <div>
        <ol>
            {items.map(item =>
                <li key={item.id} className={s.li} gap-x-12px grid-cols="[auto_1fr_auto]">
                    <div className={s.div1}>
                        😊
                    </div>
                    <div className={s.div2}>
                        旅行
                    </div>
                    <div className={s.div3}>
                        2011年1月1日
                    </div>
                    <div className={s.div4}>
                        ￥999
                    </div>
                </li>)}
        </ol>
        <div className={s.btnBox}>
            <button className={s.btn}>加载更多</button>
        </div>
    </div>
}