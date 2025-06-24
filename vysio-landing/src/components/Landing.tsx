import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import sunkalp from "../assets/sunkalp.png"
import saketh from "../assets/saketh.png"
import gautham from "../assets/gautham.png"

const Eye = () => {
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={'#e0e0e0'} />
      </mesh>
      <mesh position={[0, 0, 0.9]}>
        <circleGeometry args={[0.3, 32]} />
        <meshStandardMaterial color={'black'} />
      </mesh>
    </group>
  )
}

const teamMembers = [
  {
    src: sunkalp,
    name: 'Sunkalp Chandra',
    description: 'High school senior with experience and interest in several domains, including machine learning, software development, web development, economics, financial markets, and policy-making'
  },
  {
    src: saketh,
    name: 'Saketh Satti',
    description: 'Specialist in reinforcement learning and cognitive modeling, worked at multiple research labs, and has experience with computational biology, machine learning, and EEG signals.'
  },
  {
    src: gautham,
    name: 'Gautham Korrapati',
    description: 'Background in web development, machine learning, ECG signal decoding, encoder-free LLMs, and interested in learning more about RAG and rendering physics-bound reinforcement learning functions'
  }
]

const Landing: React.FC = () => {
  return (
    <div className="relative bg-white text-black font-sans overflow-x-hidden">
      {/* Right Navbar */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 text-sm font-medium text-gray-700 space-y-6">
        <a href="#about" className="block hover:text-blue-600">About</a>
        <a href="#team" className="block hover:text-blue-600">Team</a>
        <a href="#hiring" className="block hover:text-blue-600">Hiring</a>
        <a href="#contact" className="block hover:text-blue-600">Contact</a>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-64 h-64">
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate />
              <Eye />
            </Canvas>
          </div>
          <div>
            <h1 className="text-6xl font-bold">vysio</h1>
            <p className="text-gray-600 max-w-xl text-lg px-4 mt-4">
              building non-invasive neuroplastic machine learning models with hebbian learning
            </p>
          </div>
        </div>
        <div className="mt-12 animate-bounce text-gray-500"><a href="#about">↓ scroll down</a></div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 max-w-3xl mx-auto text-center py-28">
        <h2 className="text-4xl font-bold mb-6">About</h2>
        <p className="text-gray-700 leading-relaxed text-lg text-left">
          I’m trying to solve the problem of how to non-invasively promote targeted neuroplasticity in the visual cortex to help people with visual impairments caused by neurodegenerative or neurodevelopmental conditions. Current therapies do not go deep enough because they treat symptoms or try to compensate for loss, but don’t even attempt to rewire the brain. My goal is to develop a system that uses precise patterns of light stimulation through the retina to guide the brain’s natural ability to reorganize itself. By pairing these retinal signals with specific visual tasks and adapting them in real time using EEG or fNIRS feedback, I believe we can enhance Hebbian learning and create a more effective, personalized therapy. Ultimately, I want to build a platform that empowers the brain to relearn how to see, offering new hope for restoring function in a non-invasive, accessible way.
        </p>
        <a
          href="https://docs.google.com/document/d/11F0ZaCtUrNoyw1sh_EOJLPAuTMPTMblCxG24SIxMyX4/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-blue-600 underline hover:text-blue-800"
        >
          Read our white paper →
        </a>
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 max-w-6xl mx-auto text-center py-28">
        <h2 className="text-4xl font-bold mb-12">Team</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-gray-100 border border-gray-300 rounded-xl p-6 shadow-lg w-72">
              <img
                src={member.src}
                alt={member.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hiring Section */}
      <section id="hiring" className="px-6 max-w-3xl mx-auto text-center py-28">
        <h2 className="text-4xl font-bold mb-6">Hiring</h2>
        <p className="text-gray-700 mb-4 text-lg">
          Our team is a tight-knit group of second time technical founders with deep experience across AI and infrastructure. We work to win and are only looking to recruit the best: ISEF/JSHS/STS winners, Q1 Journal Research Publications/Conferences, etc.
        </p>
        <p className="text-xl font-medium mb-4">We are looking for specialists in:</p>
        <ul className="text-gray-600 text-left list-disc pl-8 space-y-2 inline-block text-lg">
          <li>Reinforcement Learning — Remote</li>
          <li>Hebbian Learning — Remote</li>
          <li>Gen AI Models (GANS, VAE, etc.) — Remote</li>
          <li>Transformers and Spatial RNNS - Remote</li>
          <li>EEGNet and similar networks — Remote</li>
        </ul>
        <p className="mt-6">
          To apply, send an email to <a href="mailto:sunkalp.chandra@gmail.com" className="text-blue-500 underline">sunkalp.chandra@gmail.com</a>
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 max-w-2xl mx-auto text-center py-28">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <form
          action="https://formsubmit.co/sunkalp.chandra@gmail.com"
          method="POST"
          className="bg-white border-2 border-blue-200 shadow-2xl rounded-xl p-8 space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full px-4 py-3 border border-gray-300 rounded-md h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition text-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Landing
