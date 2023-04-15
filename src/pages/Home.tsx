import p from '../assets/images/pig.svg'
import s from './Home.module.scss'
import add from '../assets/icons/add.svg'
import { useEffect } from 'react';
import axios from 'axios';
import useSWR from "swr";

export const Home: React.FC = () => {
    const { data: meData, error: meError } = useSWR('/api/v1/me', (path) => {
        return axios.get(`http://121.196.236.94:8080${path}`)
    })
    const { data: itemsData, error: itemsError } = useSWR(meData ? '/api/v1/items' : null, (path) => {
        return axios.get(`http://121.196.236.94:8080${path}`)
    })
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

        <button className={s.btnBottom}>
            <img src={add} />
        </button>
    </div>
}