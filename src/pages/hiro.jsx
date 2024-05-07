// import React from 'react'
import { Link } from 'react-router-dom';

export default function Hiro() {
  return (
    <>
        
          <div className="bg-gradient-to-tl from-purple-700 to-pink-500 h-screen flex justify-center items-center relative">
              <div className="max-w-3xl text-white text-center z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">Bienvenue sur notre plateforme de cours en ligne</h1>
                  <p className="text-lg md:text-xl mb-12">Découvrez une expérience d apprentissage interactive et efficace.</p>
                  <div className="flex justify-center space-x-6">
                      <Link to="/login" className="bg-white text-purple-700 py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">Connexion</Link>
                      <Link to="/register" className="bg-white text-pink-500 py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out">Inscription</Link>
                  </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 opacity-25 z-0">
                  <img src="public/image/background_cours/home-page-banner.png" alt="Hero background" className="object-cover w-full h-full" />
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50 z-0"></div>
          </div>

  
    </>
  )
}


{/* <div className="bg-gradient-to-tl from-purple-700 to-pink-500 min-h-screen flex flex-col justify-center items-center px-4">
    <div className="max-w-3xl text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Bienvenue sur notre plateforme de cours en ligne</h1>
        <p className="text-lg md:text-xl mb-12">Découvrez une expérience d apprentissage interactive et efficace. Accédez à une variété de cours de qualité, suivez votre progression et évaluez vos compétences.</p>
        <div className="flex justify-center space-x-6">
            <a href="/login" className="bg-white text-purple-700 py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">Connexion</a>
            <a href="/register" className="bg-white text-pink-500 py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 hover:text-white transition duration-300 ease-in-out">Inscription</a>
        </div>
    </div>
    <div className="relative mt-12 md:mt-24">
        <img src="https://via.placeholder.com/1500x1000" alt="Hero background" className="object-cover w-full h-full rounded-lg shadow-xl" />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-purple-700 via-pink-500 to-purple-700 opacity-75 rounded-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Découvrez notre collection de cours</h2>
            <p className="text-lg md:text-xl mb-6">Explorez des sujets variés, des experts de renom et des méthodes d apprentissage modernes.</p>
            <a href="/courses" className="bg-white text-purple-700 py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">Voir les cours</a>
        </div>
    </div>
</div> */}