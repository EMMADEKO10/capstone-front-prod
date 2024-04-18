

export default function BarDevaluation() {
  return (
    <>
          <div className="flex flex-wrap -mx-3 removable">
              <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                      <div className="flex-auto p-4">
                          <div className="flex flex-row -mx-3">
                              <div className="flex-none w-2/3 max-w-full px-3">
                                  <div>
                                      <p className="mb-0 font-sans font-semibold leading-normal text-sm">Moyen des cotes</p>
                                      <h5 className="mb-0 font-bold"><span className="leading-normal text-sm font-weight-bolder text-lime-500">55%</span>
                                      </h5>
                                  </div>
                              </div>
                              <div className="px-3 text-right basis-1/3">
                                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                      <i className="ni ni-money-coins text-lg leading-none relative top-3.5 text-white"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                      <div className="flex-auto p-4">
                          <div className="flex flex-row -mx-3">
                              <div className="flex-none w-2/3 max-w-full px-3">
                                  <div>
                                      <p className="mb-0 font-sans font-semibold leading-normal text-sm">Moyenne d interrogation</p>
                                      <h5 className="mb-0 font-bold"><span className="leading-normal text-sm font-weight-bolder text-lime-500">3%</span>
                                      </h5>
                                  </div>
                              </div>
                              <div className="px-3 text-right basis-1/3">
                                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                      <i className="ni ni-world text-lg leading-none relative top-3.5 text-white"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                      <div className="flex-auto p-4">
                          <div className="flex flex-row -mx-3">
                              <div className="flex-none w-2/3 max-w-full px-3">
                                  <div>
                                      <p className="mb-0 font-sans font-semibold leading-normal text-sm">Totale</p>
                                      <h5 className="mb-0 font-bold"><span className="leading-normal text-red-600 text-sm font-weight-bolder">62%</span>
                                      </h5>
                                  </div>
                              </div>
                              <div className="px-3 text-right basis-1/3">
                                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                      <i className="ni ni-paper-diploma leading-none text-lg relative top-3.5 text-white"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                      <div className="flex-auto p-4">
                          <div className="flex flex-row -mx-3">
                              <div className="flex-none w-2/3 max-w-full px-3">
                                  <div>
                                      <p className="mb-0 font-sans font-semibold leading-normal text-sm">Sales</p>
                                      <h5 className="mb-0 font-bold"> $103,430 <span className="leading-normal text-sm font-weight-bolder text-lime-500">+5%</span>
                                      </h5>
                                  </div>
                              </div>
                              <div className="px-3 text-right basis-1/3">
                                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                      <i className="ni ni-cart leading-none text-lg relative top-3.5 text-white"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
