

export default function TitleCours() {
  return (
    <>
          <div className="relative flex flex-col min-w-0 break-words shadow-soft-xl rounded-2xl bg-clip-border mb-4 shadow-md">
              <div className="flex-auto p-4">
                  <div className="flex flex-row -mx-3">
                      <div className="flex-none w-2/3 max-w-full px-3">
                          <div>
                              <p className="mb-0 font-sans font-semibold leading-normal text-xl">Anglais</p>
                              <h5 className="mb-0 font-bold"><span className="leading-normal text-sm font-weight-bolder text-lime-500">55%</span>
                              </h5>
                          </div>
                      </div>
                      <div className="px-3 text-right basis-1/3">
                          <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                              <i className="ni ni-money-coins leading-none text-lg relative top-3.5 text-white"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
