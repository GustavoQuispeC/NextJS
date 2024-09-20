import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';



const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualización'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador Client Side'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subTitle: 'Generación Estática'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={40} />,
    title: 'Favorites',
    subTitle: 'Generación Estática'
  },
]


export const Sidebar = () => {
  return (

    <div id="menu" 
      style={{ width: '400px' }}
      className="left-0 z-10 w-64 min-h-screen overflow-y-scroll bg-gray-900 text-slate-300">


      <div id="logo" className="px-6 my-4">
        <h1 className="flex items-center text-lg font-bold text-white md:text-2xl">
          <IoLogoReact className='mr-2' />
          <span> Dash</span> 
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-sm text-slate-500">Manage your actions and activities</p>
      </div>


      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <Image className="w-8 h-8 rounded-full" 
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
              alt="User avatar" 
              width={50}
              height={50}
              priority
            />
          </span>
          <span className="text-sm font-bold md:text-base">
            Fernando Herrera
          </span>
        </a>
      </div>


      <div id="nav" className="w-full px-6">
      
        {
          menuItems.map( item => (
              <SidebarMenuItem  key={ item.path } {...item} />
          ))
        }

{/* 
        <a href="#" className="inline-flex items-center w-full px-2 py-3 space-x-2 transition duration-150 ease-linear border-b border-slate-700 hover:bg-white/5">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-5 text-slate-300">Counter</span>
            <span className="hidden text-sm text-slate-500 md:block">Estado local</span>
          </div>
        </a> */}



      </div>
    </div>
  )
}
