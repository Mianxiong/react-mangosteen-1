import s from './Icon.module.scss'
import c from 'classnames'
interface Props {
  className?: string
  name: string
  onClick?: (e:React.MouseEvent) => void
}
export const Icon: React.FC<Props> = ({ name, className, onClick }) => {
  return (
    <svg className={c(className, s.icon)} onClick={onClick}>
      <use xlinkHref={'#' + name}></use>
    </svg>
  )
}