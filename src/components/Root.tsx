import { Navigate, Outlet } from 'react-router-dom';
import { useLocalStore } from '../stores/useLocalStore';
export const Root: React.FC = () => {
  const {hasReadWelcomes} = useLocalStore()
  // const hasRead = localStorage.getItem('hasReadWelcomes')
  if (hasReadWelcomes) {
    return <Navigate to="/home"/>
  } else {
    return <Navigate to="/welcome/1"/>
  }
}