import s from './TopMenu.module.scss'
import { CurrentUser } from './TopMenu/CurrentUser'
import { Menu } from './TopMenu/Menu'
interface Props {
  onClickMask?: () => void
}
export const TopMenu: React.FC<Props> = (props) => {
  const { onClickMask } = props
  return (
    <>
      <div className={s.mask} onClick={onClickMask}>

      </div>
      <div className={s.wrapper}>
        <CurrentUser className={s.currentUser} />
        <Menu className={s.menu} />
      </div>
    </>

  )
}