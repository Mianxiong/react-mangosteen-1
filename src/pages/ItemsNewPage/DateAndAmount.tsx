import { useState } from 'react';
import c from 'classnames'
import s from './DateAndAmount.module.scss'
type Props = {
    className?: string
}
export const DateAndAmount: React.FC<Props> = (props) => {
    const { className } = props
    const [x, setX] = useState('')
    return (
        <div className={c(className, s.DateAmount_wrapper)}>
            <input value={x} onChange={e => setX(e.target.value)} />
            DateAndAmount <br />
            DateAndAmount <br />
            DateAndAmount <br />
            DateAndAmount <br />
            DateAndAmount <br />
            DateAndAmount <br />
            DateAndAmount <br />
            DateAndAmount <br />
            DateAndAmount <br />
            DateAndAmount <br />
        </div>
    )
}