import { useContext } from 'react';
import { Icon } from './Icon';
import s from './Topnav.module.scss'
import { menuContext } from '../pages/ItemsPage';
interface Props {
  title?: string
}
export const TopNav: React.FC<Props> = ({ title = '山竹记账' }) => {
  const {setVisible} = useContext(menuContext)
  return (
    <div className={s.topnavWrrapper}>
      <Icon name="menu" className={s.menu}
        onClick={() => { setVisible(true)}}/>
      <h1>{title}</h1>
    </div>
  )
}