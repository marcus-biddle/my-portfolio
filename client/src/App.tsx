import { NavProvider } from './components/NavProvider';
import NavigationMenu from './components/NavigationMenu';
import { HomePage } from './sections/HomePage';
import { ProjectsPage } from './sections/ProjectsPage';
import { SkillsPage } from './sections/SkillsPage';
import { ContactPage } from './sections/ContactPage';

// const colorThemes = {
//   light: {
//   background: 'bg-white',             // bright white base
//   secondaryBackground: 'bg-indigo-100',
//   surface: 'bg-gray-100',             // very light neutral surface
//   primaryText: 'text-rose-900',       // deep warm red for contrast
//   secondaryText: 'text-amber-700',    // warm amber/orange secondary text
//   accent: 'text-blue-600',             // cooler blue accent for balance
//   muted: 'text-gray-400',              // muted mid gray
//   border: 'border-amber-300',          // soft amber border
//   buttonBg: 'bg-blue-500',             // strong blue button
//   buttonText: 'text-white',            // light text on buttons
//   header: 'text-rose-800',
//   tagBg: 'bg-amber-200',
//   tagText: 'text-blue-700',
//   link: 'text-blue-600 hover:text-blue-800',
//   codeBg: 'bg-gray-50',
//   codeText: 'text-rose-700',
//   error: 'text-red-600',
//   secondaryButtonBg: 'bg-transparent',           // typically transparent or lightly colored
//   secondaryButtonText: 'text-amber-700',          // amber text for contrast
//   secondaryButtonBorder: 'border-amber-700',
// },
//   dark: {
//   background: 'bg-gray-900',          // very dark base
//   secondaryBackground: 'bg-cyan-800',
//   surface: 'bg-gray-800',             // dark panel
//   primaryText: 'text-pink-400',       // neon pink
//   secondaryText: 'text-purple-400',  // neon purple
//   accent: 'text-cyan-400',            // vivid cyan
//   muted: 'text-gray-500',             // muted gray
//   border: 'border-purple-600',        // neon purple
//   buttonBg: 'bg-pink-600',            // neon pink button
//   buttonText: 'text-gray-900',        // dark text on bright button
//   header: 'text-pink-500',
//   tagBg: 'bg-purple-700',
//   tagText: 'text-cyan-300',
//   link: 'text-cyan-400 hover:text-cyan-300',
//   codeBg: 'bg-gray-800',
//   codeText: 'text-pink-400',
//   error: 'text-red-500',
//   secondaryButtonBg: 'bg-transparent',
//   secondaryButtonText: 'text-purple-400',
//   secondaryButtonBorder: 'border-purple-400',
// },
// };



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
    <main className=' bg-gray-900'>
      <HomePage />
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
    </main>
    
    </NavProvider>
    
  )
}

export default App
