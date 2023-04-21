import { ReactNode, useEffect, useRef, useState } from "react"
import { useLocation, useOutlet, useNavigate } from 'react-router';
import { animated, useTransition } from '@react-spring/web';
import logo from '../assets/images/logo.svg'
import { Link } from "react-router-dom";
import { useLocalStore } from '../stores/useLocalStore';
import s from './WelcomeLayout.module.scss'
import { useSwipe } from "../hooks/useSwipe";
// import { Link } from "react-router-dom";

const linkMap: Record<string, string> = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx'
}
export const WelcomeLayout: React.FC = () => {
  const animating = useRef(false)
  const map = useRef<Record<string, ReactNode>>({}) // useRef不会刷新
  const location = useLocation() // 获取当前地址栏的信息
  const outlet = useOutlet()
  map.current[location.pathname] = outlet // 存对应的outlet
  const [extraStyle, setExtraStyle] = useState<{ position: 'relative' | 'absolute' }>({ position: 'relative' })

  // location.pathname  === /welcome/1
  // location.pathname  === /welcome/2
  const transitions = useTransition(location.pathname, {
    from: pathname => (pathname === '/welcome/1' ? { transform: 'translateX(0%)' } : { transform: 'translateX(100%)' }),
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      animating.current = false
      setExtraStyle({ position: 'relative' })
    }
  })
  const main = useRef<HTMLElement>(null)
  useSwipe(main)
  const { direction } = useSwipe(main)
  console.log('direction', direction)
  const nav = useNavigate()
  useEffect(() => {
    if (direction === 'left') {
      if (animating.current) {
        return
      }
      animating.current = true
      nav(linkMap[location.pathname])
    }
  }, [direction, location.pathname])
  const { setHasReadWelcomes} = useLocalStore()
  const onSkip = () => {
    setHasReadWelcomes(true)
    nav('/welcome/xxx')
    // localStorage.setItem('hasReadWelcomes', 'yes')
  }

  return <div className={s.wrapper}>
    <header className={s.header}>
      <img src={logo} className={s.img} />
      <h1 className={s.h1}>山竹记账</h1>
    </header>
    <main className={s.main} ref={main}>
      {transitions((style, pathname) =>
        <animated.div key={pathname} style={{ ...style, ...extraStyle }} className={s.item}>
          <div className={s.current}>
            {map.current[pathname]}
          </div>
          {/* <div style={{ textAlign: 'center' }}> */}
          {/* {不显示最新的outlet，显示缓存的，用map来做缓存} */}

          {/* </div> */}
        </animated.div>
      )}
    </main>
    <footer className={s.footer}>
      <Link style={{ gridArea: '1/2/2/3' }} to={linkMap[location.pathname]}>下一页</Link>
      <span style={{ gridArea: '1/3/2/4' }} onClick={onSkip}>跳过</span>
    </footer>
  </div>

}