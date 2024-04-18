// import NavBar from "./NavBar"
import Footer from "./Footer"
import TitleCours from "./titleCours"
import TabBody from "./tabBody"
import BarDevaluation from "./barDevalution"
import { useState } from "react"
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import Rubrique from "./Rubrique"

const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.primaryColor};
`;
export default function Body() {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container className="mt-1">
                    <div className="null m-0">

                        {/* <!-- ------------------------------------------------------------------------------------------ --> */}

                        <div className="w-[100%] px-6 py-6  text-slate-500 m-0">
                            <Rubrique />
                            <TitleCours />


                            <div className="relative flex flex-col w-full min-w-0  break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border ">
                                <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl shadow-md">
                                    <h6>Etudiants</h6>
                                </div>
                                <TabBody />
                            </div>

                            {/* -------------------------------------------------- */}
                            <BarDevaluation />
                            {/* -------------------------------------------------- */}

                            <button type="button" onClick={toggleTheme} className="inline-block px-6 py-3 mr-3 font-bold text-center uppercase align-middle transition-all bg-transparent border rounded-lg cursor-pointer border-fuchsia-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-fuchsia-500 mb-4">Button</button><input type="text" placeholder="Default input" className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none mb-4" />
                            {/* -------------------------------------------------- */}
                            <button type="button" className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs mb-4">Button</button>
                        </div>
                        <Footer />
                    </div>
                </Container>
            </ThemeProvider>
        </>
    )
}

