import { Icon } from './Icon';
import s from './Topnav.module.scss'
interface Props {
  title?: string
}
export const Topnav: React.FC<Props> = ({ title = '山竹记账' }) => {
  return (
    <div className={s.topnavWrrapper}>
      <Icon name="menu" className={s.menu}/>
      <h1>{title}</h1>
    </div>
  )
}