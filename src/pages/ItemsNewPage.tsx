import { ReactNode, useState } from "react"
import { Gradient } from "../components/Gradient"
import { Icon } from "../components/Icon"
import { Tabs } from "../components/Tabs"
import { TopNav } from "../components/TopNav"
import s from "./ItemsNewPage.module.scss"
import { DateAndAmount } from "./ItemsNewPage/DateAndAmount"
import { Tags } from "./ItemsNewPage/Tags"

export const ItemsNewPage: React.FC = () => {
    const tabItems: { key: Item['kind'], text: string, element?: ReactNode }[] = [{ key: 'expenses', text: '支出', element: <Tags kind="expenses" /> }, { key: 'income', text: '收入', element: <Tags kind="income" /> }]
    const [tabItem, setTabItem] = useState<Item['kind']>('expenses')
    return (
        <div className={s.newPageWrapper}>
            <Gradient className={s.gradient}>
                <TopNav title="记一笔" icon={<Icon name="back" />} />
            </Gradient>
            <Tabs tabItems={tabItems} value={tabItem}
                onChange={(item) => { setTabItem(item) }} className={s.tabs} />
            <DateAndAmount className={s.dateAndAmount} />
        </div>
    )
}