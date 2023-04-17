import styled from 'styled-components';
import { Icon } from '../Icon';
import s from './Menu.module.scss'
import c from 'classnames'
interface Props {
    className?: string
}

const MyIcon = styled(Icon)`
    width: 32px;
    height: 32px;
    margin-right: 16px;
`
export const Menu: React.FC<Props> = ({ className }) => {
    return (
        <ul className={c(className, s.ul)}>
            <li><MyIcon name="chart" />统计图表</li>
            <li><MyIcon name="export" />导出数据</li>
            <li><MyIcon name="category" />自定义分类</li>
            <li><MyIcon name="noty" />记账提醒</li>
        </ul>
    )
}