import s from './ItemsList.module.scss'
import useSWRInfinite from 'swr/infinite'
import { ajax } from '../../lib/ajax'
interface Props {
}
const getKey = (pageIndex: number, prev: Resources<Item>) => {
    if (prev) {
        const sendCount = (prev.pager.page - 1) * prev.pager.per_page + prev.resources.length
        const count = prev.pager.count
        if (sendCount >= count) {
            return null
        }
    }
    return `/api/v1/items?page=${pageIndex + 1}`
}
export const ItemsList: React.FC<Props> = () => {
    const { data, error, size, setSize } = useSWRInfinite(
        getKey, async (path) => (await ajax.get<Resources<Item>>(path)).data
    )
    const onLoadMore = () => {
        setSize(size + 1)
    }
    const isLoadingInitialData = !data && !error
    const isLoadingMore = data?.[size - 1] === undefined && !error
    const isLoading = isLoadingInitialData || isLoadingMore
    if (!data) {
        return <div>
            {error && <div className={s.info}>数据加载失败，请刷新页面</div>}
            {isLoading && <div className={s.info}>数据加载中...</div>}
        </div>
    } else {
        const last = data[data.length - 1]
        const { page, per_page, count } = last.pager
        const hasMore = (page - 1) * per_page + last.resources.length < count
        return <div>
            <ol>
                {data.map(({ resources }) => {
                    return resources.map(item =>
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
                                ￥{item.amount / 100}
                            </div>
                        </li>
                    )
                })}
            </ol>
            {error && <div className={s.info}>数据加载失败，请刷新页面</div>}
            {!hasMore ? <div className={s.info}>没有更多数据了</div> : isLoading ? <div className={s.info}>数据加载中...</div> : <div className={s.btnBox}><button className={s.btn} onClick={onLoadMore}>加载更多</button></div>}
            {/* <div className={s.btnBox}>
                {hasMore && <button className={s.btn} onClick={onLoadMore}>加载更多</button>}
            </div> */}
        </div>
    }
}