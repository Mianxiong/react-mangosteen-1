import s from './Icon.module.scss'
import c from 'classnames'
interface Props {
  className?: string
  name: string
}
export const Icon: React.FC<Props> = ({ name, className }) => {
  return (
    <svg className={c(className, s.icon)}>
      <use xlinkHref={'#' + name}></use>
    </svg>
  )
}