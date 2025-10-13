const headerNavs = ['about', 'projects', 'contact']

function App() {

  return (
    <div className=" h-screen bg-[#0A0A0A] text-indigo-200">
      <header className="bg-indigo-900/10 border-b-1 border-indigo-900/50 px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-900">
          Marcus
        </div>
        <nav>
          <ul className="flex space-x-8 list-none m-0 p-0">
            {headerNavs.map((nav, index) => (
              <li key={index}>
                <a href={`#${nav}`} className="font-medium capitalize transition-colors duration-300 hover:text-[#B22222]">
                  {nav}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <section className="bg-[#0A0A0A] text-white min-h-screen flex flex-col justify-center items-center px-6 text-center gap-8">
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Welcome to my Page
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-400">
            Operations & Customer Service professional with a passion for web development and fitness. Explore my projects, experience, and skills.
          </p>
        </div>
        <code className=" italic text-indigo-900/80 text-md md:text-xl max-w-2xl">No man ever steps in the same river twice</code>
        <div className="flex gap-4 md:gap-8">
          <button className="bg-indigo-900/30 px-8 py-2 rounded-full">History</button>
          <button className="bg-indigo-900/60 px-8 py-2 rounded-full">Projects</button>
          <button className="bg-indigo-900 px-8 py-2 rounded-full">Goals</button>
        </div>
      </section>

      <section className="bg-[#0A0A0A] text-white min-h-screen flex flex-col  px-6 text-center gap-8">
        <div className="flex py-4">
          <h2 className=" text-3xl">Projects</h2>
        </div>
        <ul className="flex justify-center space-x-8 list-none m-0 p-0">
          <div className="flex-1">test1</div>
          <div className="flex-1">test2</div>
          <div className="flex-1">test3</div>
        </ul>
      </section>
    </div>
  )
}

export default App
