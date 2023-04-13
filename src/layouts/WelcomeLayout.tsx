import { ReactNode, useRef } from "react"
import { useLocation, useOutlet } from 'react-router';
import { animated, useTransition } from '@react-spring/web';

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({}) // useRef不会刷新
  const location = useLocation() // 获取当前地址栏的信息
  const outlet = useOutlet()
  map.current[location.pathname] = outlet // 存对应的outlet
  // location.pathname  === /welcome/1
  // location.pathname  === /welcome/2
  const transitions = useTransition(location.pathname, {
    from: pathname => (pathname === '/welcome/1' ? { transform: 'translateX(0%)' } : { transform: 'translateX(100%)' }),
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 1000 }
  })
  return transitions((style, pathname) => {
    return <animated.div key={pathname} style={style}>
      <div style={{ textAlign: 'right' }}>
        {/* {不显示最新的outlet，显示缓存的，用map来做缓存} */}
        {map.current[pathname]}
      </div>
    </animated.div>
  })

}