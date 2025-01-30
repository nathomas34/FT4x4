import React, { useState } from 'react';
import { Truck, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Configurator3D from './components/Configurator3D';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm border-b border-red-600/20 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-white">FT4x4</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#accueil"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                Accueil
              </a>
              <a
                href="#solutions"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                Nos Solutions
              </a>
              <a
                href="#configurateur"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                Configurateur 3D
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95">
              <a
                href="#accueil"
                className="block px-3 py-2 text-gray-300 hover:text-red-500"
              >
                Accueil
              </a>
              <a
                href="#solutions"
                className="block px-3 py-2 text-gray-300 hover:text-red-500"
              >
                Nos Solutions
              </a>
              <a
                href="#configurateur"
                className="block px-3 py-2 text-gray-300 hover:text-red-500"
              >
                Configurateur 3D
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-red-500"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative h-screen flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_0OoYuB57g2aqG-cKvRP8yLH4EadkBco-vHZh_8eoMSmTht7K")',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            FT4x4
            <span className="block text-2xl md:text-3xl mt-4 text-red-500 animate-pulse">
              Experts en Plateaux Australiens
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Transformez votre 4x4 avec nos solutions sur mesure
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-red-500">Nos Solutions</span>
          </h2>
          <div className="bg-black/50 p-8 rounded-lg border border-red-600/20">
            <h3 className="text-2xl font-bold mb-6 text-center text-red-500">
              FT4x4, la référence des plateaux australiens en Occitanie
            </h3>
            <div className="max-w-3xl mx-auto space-y-6 text-gray-300 leading-relaxed">
              <p>
                Vous rêvez d'un 4x4 parfaitement équipé pour vos escapades ?
                FT4x4, filiale de Montpellier4x4, vous propose une solution sur
                mesure.
              </p>
              <p>
                Grâce à notre configurateur 3D intuitif, composez le plateau
                australien idéal : choisissez votre modèle, ajoutez les
                accessoires de votre choix (galeries, porte-vélos, coffres...)
                et visualisez le résultat en temps réel.
              </p>
              <p>
                Nos équipes, expertes en aménagement 4x4, se chargent ensuite de
                réaliser votre projet dans les règles de l'art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurateur 3D Section */}
      <section id="configurateur" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-red-500">Configurateur 3D</span>
          </h2>
          <Configurator3D />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-red-500">Contact</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="text-red-500" />
                <span>04 67 43 07 61</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-red-500" />
                <span>contact@ft4x4.fr</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-red-500" />
                <span>
                  ZA de la Clau, 8 Rue André Marie Ampère, 34770 Gigean
                </span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nom"
                className="w-full p-3 bg-gray-900 rounded-lg border border-red-600/20 focus:border-red-500 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-900 rounded-lg border border-red-600/20 focus:border-red-500 outline-none"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 bg-gray-900 rounded-lg border border-red-600/20 focus:border-red-500 outline-none"
              ></textarea>
              <button className="w-full bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-red-600/20">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 FT4x4. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
