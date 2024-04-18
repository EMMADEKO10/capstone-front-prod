

export default function Login() {
  return (
    <>

          <section>
              <div className="relative flex justify-center max-h-full overflow-hidden lg:px-0 md:px-12">
                  <div className="hidden bg-white lg:block lg:flex-1 lg:relative sm:contents">
                      <div className="absolute inset-0 object-cover w-full h-full bg-white" alt="" height="1866" width="1664">
                          <img className="object-center w-full h-auto bg-gray-200" src="../images/placeholders/square1.svg" alt="" width="1310" height="873"/>
                      </div>
                  </div>
                  <div className="relative z-10 flex flex-col flex-1 px-4 py-10 bg-white lg:border-r lg:py-24 md:flex-none md:px-28 sm:justify-center">
                      <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
                          <div className="flex flex-col">
                              <h1 className="text-3xl font-semibold tracking-tighter text-gray-900">
                                  Collaborating on single-page projects,
                                  <span className="text-gray-600">from any location</span>
                              </h1>
                              <p className="mt-4 text-base font-medium text-gray-500">
                                  A rapid approach to collaborate in staging and provisional settings.
                              </p>
                          </div>
                          <div className="mt-8">
                              <button className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium duration-200 bg-gray-100 rounded-xl hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" type="button" aria-label="Sign in with Google">
                                  <ion-icon name="logo-google" role="img" className="md hydrated" aria-label="logo google"></ion-icon>
                                  <span>Sign in with Google</span>
                              </button>
                              <div className="relative py-3">
                                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                      <div className="w-full border-t border-gray-300"></div>
                                  </div>
                                  <div className="relative flex justify-center">
                                      <span className="px-2 text-sm text-black bg-white">Or continue with</span>
                                  </div>
                              </div>
                          </div>
                          <form>
                              <div className="space-y-3">
                                  <div>
                                      <label htmlFor="name" className="block mb-3 text-sm font-medium text-black">
                                          First name
                                      </label>
                                      <input type="text" id="name" placeholder="Your name" className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"/>
                                  </div>
                                  <div className="col-span-full">
                                      <label htmlFor="password" className="block mb-3 text-sm font-medium text-black">
                                          Password
                                      </label>
                                      <input id="password" className="block w-full h-12 px-4 py-2 text-blue-500 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm" placeholder="Type password here..." type="password" />
                                  </div>
                                  <div className="col-span-full">
                                      <button type="submit" className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                          Sign in
                                      </button>
                                  </div>
                              </div>
                              <div className="mt-6">
                                  <p className="flex mx-auto text-sm font-medium leading-tight text-center text-black">
                                      Not have a password?
                                      <a className="ml-auto text-blue-500 hover:text-black" href="/forms/signup">
                                          Sign up now
                                      </a>
                                  </p>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>

    </>
  )
}
