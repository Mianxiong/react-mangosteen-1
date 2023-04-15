import p from '../assets/images/pig.svg'
import s from './Home.module.scss'
import add from '../assets/icons/add.svg'
import useSWR from "swr";
import { ajax } from '../lib/ajax';
import { Navigate } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { Loading } from '../components/Loading';
import { AddItemFloatButton } from '../components/AddItemFloatButton';
interface Props {
    title?: string
}
export const Home: React.FC<Props> = (props) => {
    useTitle(props.title)
    // 单数类型 resource: 数据
    const { data: meData, error: meError } = useSWR('/api/v1/me', async (path) =>
        (await ajax.get<Resource<User>>(path)).data.resource
    )
    // 复数类型 resources: 数据
    const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, async (path) =>
        (await ajax.get<Resources<Item>>(path)).data
    )

    const isLoadingMe = !meData && !meError
    const isLoadingItems = meData && !itemsData && !itemsError

    if (isLoadingMe || isLoadingItems) {
        return <Loading className={s.loading}/>
    }

    if(itemsData?.resources[0]) {
        return <Navigate to="/items"/>
    }

    console.log(meData, meError, itemsData, itemsError)
    // mock
    // 1. 使用第三方服务 APIFox
    // 2. 自己写本地 mock 服务器
    // useEffect(() => {
    //     axios.get('http://121.196.236.94:8080/api/v1/me')
    //     .then(() => {}, ()=>{})
    // })
    return <div>
        <div className={s.imgBox}>
            <img src={p} className={s.pig} />
        </div>
        <div className={s.btnBox}>
            <button className={s.btn}>开始记账</button>
        </div>
        <AddItemFloatButton/>
        
    </div>
}