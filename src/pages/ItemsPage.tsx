import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { TimeRangePicker, TimeRange } from '../components/TimeRangePicker';
import { Topnav } from "../components/Topnav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"
import styled from 'styled-components';
import { useState } from 'react';

const Div = styled.div`
  background: linear-gradient(0deg,rgba(143,76,215,1) 0%,rgba(92,51,190,1) 100%);
`

export const ItemsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth') //useState类型是TimeRange
  return (
    <div>
      <Div>
        <Topnav />
        {/* <TimeRangePicker selected={timeRange} onSelected={key => setTimeRange(key)}/> */}
        <TimeRangePicker selected={timeRange} onSelected={setTimeRange} />
      </Div>

      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  )
}