import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/web'
import s from './TopMenu.module.scss'
import { CurrentUser } from './TopMenu/CurrentUser'
import { Menu } from './TopMenu/Menu'
import { useState } from 'react';
interface Props {
  onClickMask?: () => void
  visible?: boolean
}
export const TopMenu: React.FC<Props> = (props) => {
  const { onClickMask, visible } = props
  const [maskVisible, setMaskVisible] = useState(false)
  const maskStyles = useSpring({
    opacity: visible ? 1 : 0,
    // config: {duration: 500},
    onStart: (result) => {
      // 打开动画 0 -> 1
      // 关闭动画 1 -> 0
      if (result.value.opacity < 0.1) {
        setMaskVisible(true)
      }
    },
    onRest: ({ value }) => {
      // 打开动画 0 -> 1
      // 关闭动画 1 -> 0
      if (value.opacity < 0.1) {
        setMaskVisible(false)
      }
    }
  })
  const menuStyles = useSpring({
    // config: {duration: 500},
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0%)' : 'translateX(-100%)'
  })
  const styles = { ...maskStyles, visibility: (maskVisible ? 'visible' : 'hidden') as 'visible' | 'hidden' }
  return (
    <>
      <animated.div className={s.mask} onClick={onClickMask} style={styles}>

      </animated.div>
      <animated.div className={s.wrapper} style={menuStyles}>
        <CurrentUser className={s.currentUser} />
        <Menu className={s.menu} />
      </animated.div>
    </>

  )
}