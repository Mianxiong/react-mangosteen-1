import styled from "styled-components"
import { Icon } from "./Icon"
import s from './Loading.module.scss'
import c from 'classnames'

const Div = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  svg {
    animation: spin 1.25s linear infinite;
  }
`
interface Props {
  className?: string
  message?: string
}
export const Loading: React.FC<Props> = ({ className, message }) => {
  return (
    <Div className={c(s.wrapper, className)}>
      <Icon name="loading" className={s.loading} />
      <p>{message || '加载中......'}</p>
    </Div>
  )
}