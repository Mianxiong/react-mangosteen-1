import { AddItemFloatButton } from "../components/AddItemFloatButton"
import { TimeRangePicker, TimeRange } from '../components/TimeRangePicker';
import { TopNav } from "../components/TopNav"
import { ItemsList } from "./ItemsPage/ItemsList"
import { ItemsSummary } from "./ItemsPage/ItemsSummary"
import styled from 'styled-components';
import { useState } from 'react';
import React from "react";
import { TopMenu } from "../components/TopMenu";
import { useMenuStore } from '../stores/useMenuStore';

const Div = styled.div`
  background: linear-gradient(0deg,rgba(143,76,215,1) 0%,rgba(92,51,190,1) 100%);
`

export const ItemsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth') //useState类型是TimeRange
  const [items] = useState<Item[]>([
    {
      id: 1,
      user_id: 1,
      amount: 1000,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
      kind: 'incomes'
    },
    {
      id: 2,
      user_id: 1,
      amount: 1000,
      tag_ids: [1],
      happen_at: '2021-01-01T00:00:00.000Z',
      created_at: '2021-01-01T00:00:00.000Z',
      updated_at: '2021-01-01T00:00:00.000Z',
      kind: 'incomes'
    },

  ])
  const { visible, setVisible } = useMenuStore()
  return (
    <div>
      {/* <menuContext.Provider value={{setVisible}}> */}
        <Div>
          <TopNav />
          {/* <TimeRangePicker selected={timeRange} onSelected={key => setTimeRange(key)}/> */}
          <TimeRangePicker selected={timeRange} onSelected={setTimeRange} />
        </Div>

        <ItemsSummary />
        <ItemsList items={items} />
        <AddItemFloatButton />
        <TopMenu visible={visible} onClickMask={()=>setVisible(false)}/>
      {/* </menuContext.Provider> */}
    </div>
  )
}