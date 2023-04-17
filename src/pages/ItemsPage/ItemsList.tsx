import s from './ItemsList.module.scss'
import useSWRInfinite from 'swr/infinite'
import { ajax } from '../../lib/ajax'
interface Props {
}
const getKey = (pageIndex: number) => {
    return `/api/v1/items?page=${pageIndex + 1}`
}
export const ItemsList: React.FC<Props> = () => {
    const { data, error } = useSWRInfinite(
        getKey, async (path) => (await ajax.get<Resources<Item>>(path)).data
    )
    const items:Item[] = []
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