import styled from 'styled-components';
import { Icon } from '../Icon';
import s from './Menu.module.scss'
import c from 'classnames'
import { NavLink } from 'react-router-dom';
interface Props {
    className?: string
}

const MyIcon = styled(Icon)`
    width: 32px;
    height: 32px;
    margin-right: 16px;
`
const items = [
    { key: 'chart', icon: 'chart', text: '统计图表', to: '/chart' },
    { key: 'export', icon: 'export', text: '导出数据', to: '/export' },
    { key: 'tags', icon: 'category', text: '自定义标签', to: '/tags' },
    { key: 'noty', icon: 'noty', text: '记账提醒', to: '/noty' }
]
export const Menu: React.FC<Props> = ({ className }) => {
    return (
        <ul className={c(className, s.ul)}>
            {items.map(item =>
                <li key={item.key}>
                    <NavLink to={item.to} className={s.link}>
                        <MyIcon name={item.icon}/>{item.text}
                    </NavLink>
                </li>
            )}
        </ul>
    )
}