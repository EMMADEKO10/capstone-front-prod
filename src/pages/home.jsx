import SideBar from '../components/SideBar'
import Body from '../components/Body'

export default function Home() {
  return (
    <>
          <nav className="bg-white shadow-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                      <div className="flex items-center">
                          {/* Logo ou titre de votre site */}
                          <span className="text-2xl font-bold text-fuchsia-800 ">School_Eva</span>
                      </div>
                      <div className="flex items-center">
                          {/* Liens de la NavBar */}
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Home</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">About Us</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign In</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign Up</a>
                      </div>
                  </div>
              </div>
          </nav>

          {/* <NavBar /> */}
          <div className='flex flex-row '>
              <SideBar />
              <Body />
          </div>

    </>
  )
}
