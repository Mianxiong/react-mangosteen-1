import s from './TopMenu.module.scss'
import { CurrentUser } from './TopMenu/CurrentUser'
import { Menu } from './TopMenu/Menu'
export const TopMenu: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <CurrentUser className={s.currentUser}/>
      <Menu className={s.menu}/>
    </div>
  )
}