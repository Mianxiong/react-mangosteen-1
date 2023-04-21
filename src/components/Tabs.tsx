import s from './TimeRangePicker.module.scss'
type Props<T> = {
    tabItems: {
        key: T
        text: string
    }[]
    value: T
    onChange: (key: T) => void
}
export const Tabs = <T extends string>(props: Props<T>) => {
    const {tabItems, value, onChange} = props
    return (
        <ol className={s.wrapper}>
            {tabItems.map(item => <li key={item.key} className={item.key === value ? s.value : ''} onClick={() =>
                onChange(item.key)
            }>
                {item.text}
            </li>)}
        </ol>
    )
}