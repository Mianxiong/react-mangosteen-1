import s from './Tabs.module.scss'
import c from 'classnames'
import { ReactNode } from 'react'
type Props<T> = {
    tabItems: {
        key: T
        text: string
        element?: ReactNode
    }[]
    value: T
    onChange: (key: T) => void
    className?: string
    classPrefix?: string
}
export const Tabs = <T extends string>(props: Props<T>) => {
    const { tabItems, value, onChange, className } = props
    return (
        <div className={className}>
            <ol className={s.wrapper}>
                {tabItems.map(item => <li key={item.key} className={item.key === value ? s.selected : ''} onClick={() =>
                    onChange(item.key)
                }>
                    {item.text}
                </li>)}
            </ol>
            <div className={s.pane}>
                {tabItems.filter(item => item.key === value)[0].element}
            </div>
        </div>

    )
}