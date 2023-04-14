import { create } from "zustand";

interface Local {
    hasReadWelcomes: boolean
    setHasReadWelcomes: (read: boolean) => void
}
const init = localStorage.getItem('hasReadWelcomes')
export const useLocalStore = create<Local>((set, get) => (
    {
        hasReadWelcomes: init === 'yes', // 读
        setHasReadWelcomes: (read: boolean) => { // 写
            // set({ count: get().count + 1 })
            const result = read ? 'yes' : 'no'
            localStorage.setItem('hasReadWelcomes', result)
            set({ hasReadWelcomes: result === 'yes'})
            // set(local => ({ count: state.count + 1 }))         
        }
    }
))