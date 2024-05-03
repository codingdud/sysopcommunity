import { Outlet,useNavigation } from 'react-router-dom'
import Nav from '../components/Nav'

export default function RootLayout() {
  return (<>
  <div className='d-none d-lg-block'>
    <Nav/>
  </div>
    <main> 
        <Outlet />
    </main>
  </>)
}
