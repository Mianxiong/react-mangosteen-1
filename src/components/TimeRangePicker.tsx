import s from './TimeRangePicker.module.scss'
export type TimeRange = 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom'
interface Props {
    selected: TimeRange
    onSelected: (selected: TimeRange) => void
}
export const TimeRangePicker: React.FC<Props> = ({ selected, onSelected }) => {
    const timeRanges: { key: TimeRange; text: string }[] = [
        { key: 'thisMonth', text: '本月' },
        { key: 'lastMonth', text: '上月' },
        { key: 'thisYear', text: '今年' },
        { key: 'custom', text: '自定义时间' }
    ]
    return (
        <div>
            {/* <ol className={s.wrapper}>
                <li>本月</li>
                <li>上个月</li>
                <li>今年</li>
                <li>自定义时间</li>
            </ol> */}
            <ol className={s.wrapper}>
                {timeRanges.map(tr => <li key={tr.key} className={tr.key === selected ? s.selected : ''} onClick={() =>
                    onSelected(tr.key)
                }>
                    {tr.text}
                </li>)}
            </ol>
        </div>
    )
}