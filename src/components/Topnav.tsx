import { Icon } from './Icon';
import s from './Topnav.module.scss'
import { useMenuStore } from '../stores/useMenuStore';
import { ReactNode } from 'react';


interface Props {
  title?: string
  icon: ReactNode
}
export const TopNav: React.FC<Props> = ({ title = '山竹记账', icon }) => {
  // const {setVisible} = useContext(menuContext)
  const { visible, setVisible } = useMenuStore()
  return (
    <div className={s.topnavWrapper}>
      <span className={s.menu}>
        {icon}
      </span>

      {/* <Icon name="menu" className={s.menu}
        onClick={() => { setVisible(!visible)}}/> */}
      <h1>{title}</h1>
    </div>
  )
}