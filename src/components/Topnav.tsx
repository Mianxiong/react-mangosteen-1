import { Icon } from './Icon';
import s from './Topnav.module.scss'
import { useMenuStore } from '../stores/useMenuStore';


interface Props {
  title?: string
}
export const TopNav: React.FC<Props> = ({ title = '山竹记账' }) => {
  // const {setVisible} = useContext(menuContext)
  const { visible, setVisible } = useMenuStore()
  return (
    <div className={s.topnavWrapper}>
      <Icon name="menu" className={s.menu}
        onClick={() => { setVisible(!visible)}}/>
      <h1>{title}</h1>
    </div>
  )
}