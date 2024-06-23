import { Outlet } from 'react-router-dom'
import { CoreHeader, CoreFooter } from '@/components/index.ts'

const UserLayout = () => {
  return (
    <>
      <CoreHeader></CoreHeader>
      <Outlet />
      <CoreFooter></CoreFooter>
    </>
  )
}
export default UserLayout
