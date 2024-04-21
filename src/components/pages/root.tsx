import NavigationTopBar from 'components/navigation/topbar'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="h-screen w-screen flex flex-col items-stretch">
        <NavigationTopBar />
        <div className="relative overflow-auto flex-1 w-full h-full pt-5 px-32">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
