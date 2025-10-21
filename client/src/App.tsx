import { NavProvider } from './components/NavProvider';
import NavigationMenu from './components/NavigationMenu';
import { HomePage } from './sections/HomePage';
import { ProjectsPage } from './sections/ProjectsPage';
import { SkillsPage } from './sections/SkillsPage';
import { ContactPage } from './sections/ContactPage';

function App() {
  // const { isDark, toggle } = useDarkMode();
  // const ref = useRef(null);
  
  // console.log('test',isDark, toggle)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });

 

  return (
    <NavProvider>
    <NavigationMenu />
    <main className=' bg-gray-900 '>
      <HomePage />
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
    </main>
    
    </NavProvider>
    
  )
}

export default App
