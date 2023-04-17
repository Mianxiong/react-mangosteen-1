import c from 'classnames'
import s from './CurrentUser.module.scss'
interface Props {
    className?: string
}
export const CurrentUser: React.FC<Props> = ({className}) => {
    return (
        <div className={c(className,s.wrapper)}>
            <h2>未登录用户</h2>
            <div>点击这里登录</div>
        </div>
    )
}