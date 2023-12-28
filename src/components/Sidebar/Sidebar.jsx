'use client'
import SidebarView from './SidebarView'
import { useSidebarData } from '@/hooks/useSidebarData'

const Sidebar = () => {
  const { name, city } = useSidebarData()

  return <SidebarView name={name} city={city} />
}
export default Sidebar
