import SideBar from "../components/SideBar"

export default function Admin() {
  return (
    <>
          <nav className="bg-white shadow-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                      <div className="flex items-center">
                          {/* Logo ou titre de votre site */}
                          <span className="text-2xl font-bold text-fuchsia-800 ">MonSite</span>
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
          
          <div className='flex flex-row gap-2'>
              <SideBar />
              <div className="flex flex-col  w-[90%] ">
           
                  <div className="cours mt-4 relative w-[90%] rounded-2xl mb-1 shadow-md h-40 mr-10 text-center items-center pl-20 pb-20">
                      <div className="absolute bottom-0 left-0 mb-0 p-2">
                          <p className="font-sans font-semibold leading-normal text-gray-500 text-[32px]">Anglais</p>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
