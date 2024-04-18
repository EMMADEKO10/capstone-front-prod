import NavBar from "./NavBar"
import Footer from "./Footer"
import TitleCours from "./titleCours"
import TabBody from "./tabBody"
import BarDevaluation from "./barDevalution"


export default function Body() {
    return (
        <>
            <div className="">
                <NavBar />
                {/* <!-- ------------------------------------------------------------------------------------------ --> */}

                <div className="w-[60%] px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">

                    <TitleCours />

                    <button type="button" className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4">Button</button>
                    <div className="relative flex flex-col w-full min-w-0  break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
                            <h6>Etudiants</h6>
                        </div>
                        <TabBody />
                    </div>

                    {/* -------------------------------------------------- */}
                    <BarDevaluation />
                    {/* -------------------------------------------------- */}
                    {/* <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                            <h6 className="mb-0">PlathtmlForm Settings</h6>
                        </div>
                        <div className="flex-auto p-4">
                            <h6 className="font-bold leading-tight uppercase text-xs text-slate-500">Account</h6>
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="follow" className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" />
                                        <label htmlFor=" follow" className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Email me when someone follows me</label>
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="answer" className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" />
                                        <label htmlFor="answer" className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Email me when someone answers on my post</label>
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-b-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="mention" className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" />
                                        <label htmlFor="mention" className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Email me when someone mentions me</label>
                                    </div>
                                </li>
                            </ul>
                            <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">Application</h6>
                            <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                                <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="launches projects" className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" />
                                        <label htmlFor="launches projects" className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">New launches and projects</label>
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="product updates" className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" />
                                        <label htmlFor="product updates" className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Monthly product updates</label>
                                    </div>
                                </li>
                                <li className="relative block px-0 py-2 pb-0 bg-white border-0 rounded-b-lg text-inherit">
                                    <div className="min-h-6 mb-0.5 block pl-0">
                                        <input id="subscribe" className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" />
                                        <label htmlFor="subscribe" className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Subscribe to newsletter</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    {/* --------------------------------------------------------------------------------------------- */}

                    <button type="button" className="inline-block px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-lg cursor-pointer border-fuchsia-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-fuchsia-500 mb-4">Button</button><input type="text" placeholder="Default input" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none mb-4" />
                    {/*                    
                    <div className="w-full mb-4">
                        <div className="flex mb-2">
                            <span className="mr-2 font-semibold leading-normal capitalize text-sm">default progress</span>
                            <span className="ml-auto font-semibold leading-normal text-sm">50%</span>
                        </div>
                        <div>
                            <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                                <div className="bg-fuchsia-500 w-1/2 transition-width duration-600 ease-soft rounded-1 -mt-0.38 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-none w-full max-w-full px-3 mb-4">
                        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
                                <h6 className="mb-1">Projects</h6>
                                <p className="leading-normal text-sm">Architects design houses</p>
                            </div>
                            <div className="flex-auto p-4">
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                            <div className="relative">
                                                <a className="block shadow-xl rounded-2xl">
                                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/home-decor-1.jpg" alt="img-blur-shadow" className="max-w-full shadow-soft-2xl rounded-2xl" />
                                                </a>
                                            </div>
                                            <div className="flex-auto px-1 pt-6">
                                                <p className="relative z-10 mb-2 leading-normal text-transparent bg-slate-700 text-sm bg-clip-text">Project #2</p>
                                                <a href="javascript:;">
                                                    <h5>Modern</h5>
                                                </a>
                                                <p className="mb-6 leading-normal text-sm">As Uber works through a huge amount of internal management turmoil.</p>
                                                <div className="flex items-center justify-between">
                                                    <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Project</button>
                                                    <div className="mt-2">
                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-1.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-2.jpg" />
                                                        </a>
                                                        <div data-target="tooltip" className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm" role="tooltip" data-popper-placement="bottom" style={{
                                                            position: 'absolute',
                                                            inset: '0 auto auto 0',
                                                            margin: '0',
                                                            transform: 'translate(923px, 605px)'
                                                        }} >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-3.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-4.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                            <div className="relative">
                                                <a className="block shadow-xl rounded-2xl">
                                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/home-decor-2.jpg" alt="img-blur-shadow" className="max-w-full shadow-soft-2xl rounded-xl" />
                                                </a>
                                            </div>
                                            <div className="flex-auto px-1 pt-6">
                                                <p className="relative z-10 mb-2 leading-normal text-transparent bg-slate-700 text-sm bg-clip-text">Project #1</p>
                                                <a href="javascript:;">
                                                    <h5>Scandinavian</h5>
                                                </a>
                                                <p className="mb-6 leading-normal text-sm">Music is something that every person has his or her own specific opinion about.</p>
                                                <div className="flex items-center justify-between">
                                                    <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Project</button>
                                                    <div className="mt-2">
                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-3.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-4.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-1.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-2.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                                        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                            <div className="relative">
                                                <a className="block shadow-xl rounded-2xl">
                                                    <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/home-decor-3.jpg" alt="img-blur-shadow" className="max-w-full shadow-soft-2xl rounded-2xl" />
                                                </a>
                                            </div>
                                            <div className="flex-auto px-1 pt-6">
                                                <p className="relative z-10 mb-2 leading-normal text-transparent bg-slate-700 text-sm bg-clip-text">Project #3</p>
                                                <a href="javascript:;">
                                                    <h5>Minimalist</h5>
                                                </a>
                                                <p className="mb-6 leading-normal text-sm">Different people have different taste, and various types of music.</p>
                                                <div className="flex items-center justify-between">
                                                    <button type="button" className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View Project</button>
                                                    <div className="mt-2">
                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-4.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-3.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-2.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                        <a href="javascript:;" className="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30" data-target="tooltip_trigger" data-placement="bottom">
                                                            <img className="w-full rounded-circle" alt="Image placeholder" src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-1.jpg" />
                                                        </a>
                                                        <div
                                                            data-target="tooltip"
                                                            className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                                            role="tooltip"
                                                            data-popper-placement="bottom"
                                                            style={{
                                                                position: 'absolute',
                                                                inset: '0 auto auto 0',
                                                                margin: '0',
                                                                transform: 'translate(923px, 605px)'
                                                            }}
                                                        >
                                                            Peterson
                                                            <div
                                                                className="invisible absolute h-2 w-2 bg-inherit behtmlFore:visible behtmlFore:absolute behtmlFore:h-2 behtmlFore:w-2 behtmlFore:rotate-45 behtmlFore:bg-inherit behtmlFore:content-['']"
                                                                data-popper-arrow=""
                                                                style={{
                                                                    position: 'absolute',
                                                                    left: '0',
                                                                    transform: 'translate(0, 0)'
                                                                }}
                                                            ></div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                                        <div className="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border">
                                            <div className="flex flex-col justify-center flex-auto p-6 text-center">
                                                <a href="javascript:;">
                                                    <i className="mb-4 fa fa-plus text-slate-400" aria-hidden="true"></i>
                                                    <h5 className="text-slate-400 text-lg mb-0">New project</h5>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <Footer />
            </div>
        </>
    )
}

