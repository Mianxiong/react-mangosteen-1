import { Tabs } from './Tabs'
export type TimeRange = 'thisMonth' | 'lastMonth' | 'thisYear' | 'custom'
interface Props {
    selected: TimeRange
    onSelect: (selected: TimeRange) => void
}
const timeRanges: { key: TimeRange; text: string }[] = [
    { key: 'thisMonth', text: '本月' },
    { key: 'lastMonth', text: '上月' },
    { key: 'thisYear', text: '今年' },
    { key: 'custom', text: '自定义时间' }
]
export const TimeRangePicker: React.FC<Props> = ({ selected, onSelect }) => {
    return (
        <div>
            {/* <ol className={s.wrapper}>
                <li>本月</li>
                <li>上个月</li>
                <li>今年</li>
                <li>自定义时间</li>
            </ol> */}
            <Tabs tabItems={timeRanges} value={selected} onChange={onSelect} />
            {/* <ol className={s.wrapper}>
                {timeRanges.map(tr => <li key={tr.key} className={tr.key === selected ? s.selected : ''} onClick={() =>
                    onSelect(tr.key)
                }>
                    {tr.text}
                </li>)}
            </ol> */}
        </div>
    )
}