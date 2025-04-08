            import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <Head>
        <title>Patrice ROS - Ostéopathe à Salin de Giraud</title>
        <meta name="description" content="Cabinet d'ostéopathie de Patrice ROS à Salin de Giraud. Prenez rendez-vous pour une consultation d'ostéopathie." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#3B82F6" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        
        {/* Mobile Web App */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Responsive Design */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="date=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
      </Head>

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden section-pattern">
          {/* Background Image with Parallax */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/images/ocean-waves.jpg"
              alt="Vagues océan"
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              className="opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/50"></div>
          </motion.div>

          {/* Floating Shapes */}
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.h1 
                  className="text-6xl md:text-7xl font-bold text-gradient-animated decorative-line"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Patrice ROS
                </motion.h1>
                <motion.h2 
                  className="text-3xl md:text-4xl text-blue-600 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Ostéopathe D.O.F
                </motion.h2>
                <motion.p 
                  className="text-xl text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  (Diplôme d'Ostéopathe Français)
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100/50 blur-xl"></div>
                <div className="card-premium p-8">
                  <p className="relative text-lg md:text-xl leading-relaxed text-gray-700">
                    Votre bien-être est ma priorité. À travers une approche personnalisée et des techniques douces, je vous accompagne pour retrouver équilibre et vitalité. Plus de 15 ans d'expérience au service de votre santé.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex justify-center space-x-6"
              >
                <a href="#contact" className="btn-premium hover-effect-premium">
                  Prendre rendez-vous
                </a>
                <a href="#osteopathie" className="btn btn-secondary hover-effect-premium">
                  En savoir plus
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-gray-500 hover-effect-premium">Découvrir</span>
              <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent animate-bounce"></div>
            </div>
          </motion.div>
        </section>

        {/* Qui suis-je Section */}
        <section id="qui-suis-je" className="py-20 section-premium">
          <div className="container relative">
            {/* Decorative Elements */}
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-12"
            >
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gradient-animated decorative-line mb-8">
                  Qui suis-je ?
                </h2>
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <Image
                    src="/images/patrice.png"
                    alt="Patrice ROS"
                    fill
                    className="rounded-full object-cover shadow-md"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
              </div>

              <div className="space-y-8 text-gray-700">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="card-premium p-8 space-y-6 leading-relaxed"
                >
                  <p className="text-lg font-medium text-gradient-animated">
                    Je me suis formé au Collège Ostéopathique de Provence à Marseille, à temps plein.
                  </p>

                  <div className="space-y-6">
                    <p className="text-lg font-medium text-blue-600">
                      J'ai développé ma pratique grâce à mon expérience pluridisciplinaire auprès de :
                    </p>
                    <ul className="custom-list space-y-6">
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <span className="font-medium text-blue-600">Chirurgiens orthopédistes:</span> 
                        <p className="mt-2">
                          J'ai acquis une expertise dans le traitement de consolidation, la prévention et le suivi post opératoire 
                          (Adultes et Enfants, Sportifs de haut niveau, Danseurs du Ballet National de Marseille).
                        </p>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <span className="font-medium text-blue-600">Médecins pédiatres homéopathes:</span>
                        <p className="mt-2">
                          Je me suis spécialisé dans le traitement et le suivi des nourrissons et des enfants
                        </p>
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <span className="font-medium text-blue-600">Médecins dentaires:</span>
                        <p className="mt-2">
                          J'assure le traitement et le suivi sur des soins d'orthodontie.
                        </p>
                      </motion.li>
                    </ul>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-8 p-8 card-premium bg-white/50"
                  >
                    <p className="text-lg leading-relaxed">
                      Ma collaboration avec <span className="font-medium text-blue-600">Mme Sophie Pointeau</span> et 
                      <span className="font-medium text-blue-600"> Mme Valérie Saracco-Abraini</span>,
                      Sages-femmes - D.E, installées sur Gardanne, m'a permis de développer mon expertise 
                      auprès des femmes enceintes et des nourrissons. Cette collaboration m'a également permis de participer 
                      à la conception d'un programme en Pilates pour les femmes enceintes avec le Studio 
                      Kinepilates de Montréal qui a été produit en DVD.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Ostéopathie Section */}
        <section id="osteopathie" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-16"
            >
              <div className="text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gradient-animated decorative-line">L'Ostéopathie</h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card-premium p-6 text-center space-y-4 hover:shadow-lg"
                  >
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Équilibre naturel</h3>
                    <p className="text-gray-600">
                      Rétablir le mouvement articulaire, musculaire, tissulaire, viscéral et liquidien.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card-premium p-6 text-center space-y-4 hover:shadow-lg"
                  >
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Techniques douces</h3>
                    <p className="text-gray-600">
                      Des manipulations manuelles précises et sécuritaires adaptées à chaque patient.
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card-premium p-6 text-center space-y-4 hover:shadow-lg"
                  >
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Suivi personnalisé</h3>
                    <p className="text-gray-600">
                      Une étude approfondie des antécédents pour un traitement adapté et sécurisé.
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="card-premium p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-gradient-animated mb-6">Pour qui ?</h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Du nourrisson à l'adulte, à chaque étape de la vie</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Les femmes enceintes, pour le bien-être de la maman et du bébé</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Les sportifs, pour l'amélioration des performances</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="card-premium p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold text-gradient-animated mb-6">Quand consulter ?</h3>
                    
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-white rounded-xl shadow-sm border border-blue-50"
                      >
                        <h4 className="text-xl font-semibold text-blue-600 mb-3">Bébé & Enfant</h4>
                        <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Régurgitation (RGO)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Troubles du sommeil</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Torticolis congénital</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Plagiocéphalie</span>
                          </li>
                        </ul>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-white rounded-xl shadow-sm border border-blue-50"
                      >
                        <h4 className="text-xl font-semibold text-blue-600 mb-3">Femmes enceintes</h4>
                        <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Douleurs dorsales</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Troubles digestifs</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Préparation accouchement</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Récupération post-natal</span>
                          </li>
                        </ul>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-white rounded-xl shadow-sm border border-blue-50"
                      >
                        <h4 className="text-xl font-semibold text-blue-600 mb-3">Adultes</h4>
                        <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Douleurs chroniques</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Problèmes de dos</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Troubles viscéraux</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            <span>Migraines</span>
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tarifs Section */}
        <section id="tarifs" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-2xl p-12 shadow-soft max-w-3xl mx-auto"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-gradient-animated mb-12">
                    Tarifs
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Tarifs */}
                    <div className="space-y-6">
                      <div className="card-premium p-8 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-900">Consultation</h3>
                        <p className="text-4xl font-bold text-blue-600">50 €</p>
                        <div className="text-gray-600 space-y-2">
                          <p>Durée : 45-60 minutes</p>
                          <p>Adultes & Enfants</p>
                        </div>
                      </div>
                    </div>

                    {/* Remboursements */}
                    <div className="space-y-6">
                      <div className="card-premium p-8 space-y-4 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">Remboursements</h3>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Prise en charge par de nombreuses mutuelles</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Remboursement selon votre contrat</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Facture fournie à chaque consultation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Moyens de paiement */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 p-6 bg-gray-50 rounded-xl"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Moyens de paiement acceptés</h3>
                    <div className="flex justify-center items-center space-x-8">
                      {/* Espèces */}
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">Espèces</span>
                      </div>

                      {/* CB */}
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">CB</span>
                      </div>

                      {/* Chèque */}
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-600">Chèque</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Citation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="max-w-2xl mx-auto mt-16"
                >
                  <blockquote className="relative bg-white/50 rounded-xl p-8">
                    <div className="absolute -top-3 -left-3 text-4xl text-blue-200">"</div>
                    <div className="absolute -bottom-3 -right-3 text-4xl text-blue-200">"</div>
                    <div className="relative z-10 italic text-lg leading-relaxed text-gray-600 space-y-3">
                      <p>
                        Apprendre l'ostéopathie, c'est apprendre la vie.
                      </p>
                      <p>
                        Comme la vie ne s'apprend vraiment qu'en la vivant, j'ai appris l'ostéopathie
                        en même temps que j'apprenais la vie : en la vivant d'abord quasi inconsciemment,
                        puis avec de plus en plus de conscience.
                      </p>
                      <p>
                        Mais le parcours n'est guère balisé, et le voyage pas toujours confortable.
                      </p>
                    </div>
                  </blockquote>
                  <div className="flex items-center justify-end mt-4 space-x-3 text-gray-500">
                    <span className="h-px w-8 bg-gray-300"></span>
                    <p className="text-sm font-medium">Pierre TRICOT</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient-animated text-center mb-16">Contact</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
                >
                  {/* Info Cards */}
                  <div className="space-y-6">
                    {/* Adresse */}
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 012.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900">Adresse</h3>
                          <div className="space-y-1 text-gray-600">
                            <p>Pôle Santé Studio n°3</p>
                            <p>8 rue du bois</p>
                            <p>13129 Salin de Giraud</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900">Téléphone</h3>
                          <a href="tel:0652807178" className="text-blue-600 hover:text-blue-700 transition-colors">
                            06 52 80 71 78
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                          <a href="mailto:contact@osteopatrice.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                            contact@osteopatrice.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <div className="h-[400px] rounded-2xl overflow-hidden shadow-soft">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2901.772649356673!2d4.425291715839386!3d43.41899397912802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b67c6b96e4cf93%3A0x91f13d12b3c7d8e0!2s8%20Rue%20du%20Bois%2C%2013129%20Salin-de-Giraud!5e0!3m2!1sfr!2sfr!4v1680528547424!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Cabinet d'ostéopathie"
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-soft">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Formulaire de contact</h3>
                    <form className="space-y-6" onSubmit={(e) => {
                      e.preventDefault();
                      // Ajoutez ici la logique d'envoi du formulaire
                    }}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-gray-50/30"
                          required
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-gray-50/30"
                          required
                          aria-required="true"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Sujet <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-gray-50/30"
                          required
                          aria-required="true"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="rdv">Prise de rendez-vous</option>
                          <option value="info">Demande d'informations</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors bg-gray-50/30 resize-none"
                          required
                          aria-required="true"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-soft hover:shadow-lg"
                      >
                        Envoyer
                      </button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto">
            {/* Top Footer with Pattern */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/5 pattern-grid-lg opacity-10"></div>
              
              <div className="relative py-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                  {/* Cabinet Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">Cabinet</h3>
                    </div>
                    <div className="pl-2 border-l-2 border-blue-500/30 space-y-2">
                      <p className="text-gray-300">Patrice ROS</p>
                      <p className="text-gray-300">Ostéopathe D.O.F</p>
                      <p className="text-gray-300">Pôle Santé Studio n°3</p>
                      <p className="text-gray-300">8 rue du bois</p>
                      <p className="text-gray-300">13129 Salin de Giraud</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">Contact</h3>
                    </div>
                    <div className="pl-2 border-l-2 border-blue-500/30 space-y-4">
                      <a href="tel:0652807178" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                        <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>06 52 80 71 78</span>
                      </a>
                      <a href="mailto:contact@osteopatrice.com" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group">
                        <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>contact@osteopatrice.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Horaires */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">Horaires</h3>
                    </div>
                    <div className="pl-2 border-l-2 border-blue-500/30 space-y-4">
                      <div className="space-y-2">
                        <p className="text-gray-300 font-medium">Lundi - Vendredi</p>
                        <p className="text-gray-400">9h00 - 19h00</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-300 font-medium">Samedi</p>
                        <p className="text-gray-400">Sur rendez-vous</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
              <div className="py-8 px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <p className="text-gray-400 text-sm">
                    {new Date().getFullYear()} Cabinet d'Ostéopathie Patrice ROS. Tous droits réservés.
                  </p>
                  <nav className="flex items-center space-x-6">
                    {['Accueil', 'Qui suis-je', 'Ostéopathie', 'Tarifs', 'Contact'].map((item) => (
                      <a
                        key={item}
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-400 hover:text-white transition-colors text-sm relative group"
                      >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
