

export default function TabBody() {
  return (
    <>
          <div className="flex-auto px-0 pt-0 pb-2 shadow-md mb-10 mt-1">
              <div className="p-0 overflow-x-auto">
                  <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                      <thead className="align-bottom">
                          <tr>
                              <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Etudiants</th>
                              <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 sm:table-cell">Function</th>
                              <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Moyenne/20</th>
                              <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Date</th>
                              <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70 sm:table-cell"></th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <div className="flex px-2 py-1">
                                      <div>
                                          <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user1" />
                                      </div>
                                      <div className="flex flex-col justify-center">
                                          <h6 className="mb-0 leading-normal text-sm">John Michael</h6>
                                          <p className="mb-0 leading-tight text-xs text-slate-400">john@creative-tim.com</p>
                                      </div>
                                  </div>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <p className="mb-0 font-semibold leading-tight text-xs">Manager</p>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">Organization</p>
                              </td>
                              <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                  <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xxs rounded py-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">12</span>
                              </td>
                              <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <span className="font-semibold leading-tight text-xs text-slate-400">23/04/18</span>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                              </td>
                          </tr>
                          <tr>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <div className="flex px-2 py-1">
                                      <div>
                                          <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-3.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user2" />
                                      </div>
                                      <div className="flex flex-col justify-center">
                                          <h6 className="mb-0 leading-normal text-sm">Alexa Liras</h6>
                                          <p className="mb-0 leading-tight text-xs text-slate-400">alexa@creative-tim.com</p>
                                      </div>
                                  </div>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <p className="mb-0 font-semibold leading-tight text-xs">Programator</p>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">Developer</p>
                              </td>
                              <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                  <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2 text-xxs rounded py-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">8</span>
                              </td>
                              <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <span className="font-semibold leading-tight text-xs text-slate-400">11/01/19</span>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                              </td>
                          </tr>
                          <tr>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <div className="flex px-2 py-1">
                                      <div>
                                          <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-4.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user3" />
                                      </div>
                                      <div className="flex flex-col justify-center">
                                          <h6 className="mb-0 leading-normal text-sm">Laurent Perrier</h6>
                                          <p className="mb-0 leading-tight text-xs text-slate-400">laurent@creative-tim.com</p>
                                      </div>
                                  </div>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <p className="mb-0 font-semibold leading-tight text-xs">Executive</p>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">Projects</p>
                              </td>
                              <td className="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
                                  <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xxs rounded py-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">15</span>
                              </td>
                              <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <span className="font-semibold leading-tight text-xs text-slate-400">19/09/17</span>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                                  <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                              </td>
                          </tr>
                          <tr>
                              <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                  <div className="flex px-2 py-1">
                                      <div>
                                          <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-1.jpg" className="inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl" alt="user6" />
                                      </div>
                                      <div className="flex flex-col justify-center">
                                          <h6 className="mb-0 leading-normal text-sm">Miriam Eric</h6>
                                          <p className="mb-0 leading-tight text-xs text-slate-400">miriam@creative-tim.com</p>
                                      </div>
                                  </div>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                  <p className="mb-0 font-semibold leading-tight text-xs">Programtor</p>
                                  <p className="mb-0 leading-tight text-xs text-slate-400">Developer</p>
                              </td>
                              <td className="p-2 leading-normal text-center align-middle bg-transparent border-b-0 text-sm whitespace-nowrap shadow-transparent">
                                  <span className="bg-gradient-to-tl from-green-600 to-lime-400 px-2 text-xxs rounded py-1 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">11</span>
                              </td>
                              <td className="p-2 text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                  <span className="font-semibold leading-tight text-xs text-slate-400">14/09/20</span>
                              </td>
                              <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                                  <a href="javascript:;" className="font-semibold leading-tight text-xs text-slate-400"> Edit </a>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
    </>
  )
}
