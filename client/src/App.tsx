import { NavProvider } from './components/NavProvider';
import { ProjectsPage } from './sections/ProjectsPage';
import { SkillsPage } from './sections/SkillsPage';
import { ContactPage } from './sections/ContactPage';
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { TypographyBlockquote, TypographyH3, TypographyP,  } from './components/Typography';
import {
  FileItem,
  FolderItem,
  FolderTrigger,
  FolderContent,
  Files,
  SubFiles,
} from '@/components/animate-ui/components/radix/files';
import { useEffect, useState } from 'react';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { IoDownloadOutline } from "react-icons/io5";
import { Button } from './components/ui/button';
import pfp from './assets/pfp.jpg';
import { AspectRatio } from './components/ui/aspect-ratio';
import { motion } from 'framer-motion'

const RadixFilesDemo = () => {
  const [open, setOpen] = useState(['projects'])
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to your threshold
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const highlightElem = document.querySelector('[data-slot="motion-highlight"]') as HTMLElement;
    if (!highlightElem) return;
    if (open.length === 0) {
      highlightElem.style.display = 'none';
    }
    if (open.length > 0 && highlightElem.style.display === 'none') {
      highlightElem.style.display = 'block'
    }
  }, [open])

  return (
    <motion.div
      className={` text-white border border-slate-700 bg-slate-950/80 overflow-auto z-90 ${
        scrolled
          ? "m-8 rounded-lg transition-all duration-300"
          : "m-0 rounded-none transition-all duration-300"
      }`}
    >
      <Files className="w-full" defaultOpen={[]} >
        <FolderItem value="portfolio">
          <FolderTrigger
            gitStatus="modified"
            className="w-full flex items-center justify-between"
          >
            Portfolio Menu
          </FolderTrigger>

          <FolderContent>
            <SubFiles open={open} onOpenChange={(open) => {
              console.log(open);
              setOpen(open)
              }}>
              <FolderItem value="pages">
                <FolderTrigger gitStatus="modified">Pages</FolderTrigger>

                <FolderContent onClick={(e) => {
                  const target = e.target as HTMLElement;
                  const baseName = target.innerText.split('.')[0].toLowerCase();

                  if (baseName !== 'projects') {
                    setOpen([]);
                  }

                  const element = document.getElementById(baseName);
                  if (element) {
                    element.scrollIntoView();
                  } else {
                    console.warn(`Element with id '${baseName}' not found.`);
                  }
                }}
                >
                  <FileItem gitStatus='modified' >Home.tsx</FileItem>
                  <FileItem>Skills.tsx</FileItem>
                  <FolderItem value="projects">
                    <FolderTrigger gitStatus="untracked">Projects</FolderTrigger>

                    <FolderContent>
                      <FileItem gitStatus="untracked">75hard.tsx</FileItem>
                      <FileItem gitStatus="untracked">MoodFinder.tsx</FileItem>
                      <FileItem gitStatus="untracked">MoodFinder.tsx</FileItem>
                    </FolderContent>
                  </FolderItem>
              <FileItem>Contact.tsx</FileItem>
              <FileItem gitStatus="deleted">blog.tsx</FileItem>
                </FolderContent>
              </FolderItem>

              <FolderItem value="socials">
                <FolderTrigger gitStatus="untracked">Socials</FolderTrigger>

                <FolderContent>
                  <FileItem>github.tsx</FileItem>
                  <FileItem gitStatus="untracked">linkedin.tsx</FileItem>
                </FolderContent>
              </FolderItem>
            </SubFiles>
          </FolderContent>
        </FolderItem>

        {/* <FileItem icon={FileJsonIcon}>package.json</FileItem> */}
      </Files>
    </motion.div>
  );
};

function App() {

 

  return (
    <div className='relative min-h-screen bg-black'>
      <GravityStarsBackground starsOpacity={.85} className='fixed z-40 text-emerald-500' />
    <NavProvider>
    {/* <NavigationMenu /> */}
    
    <main className='relative w-full font-inter text-white flex flex-col'>
      <div className='fixed w-full z-90'>
          <RadixFilesDemo />
        </div>
      <div className='relative h-screen w-full p-8 flex flex-col items-center justify-center rounded-xl space-y-8 Z-50'>
          <Card className='bg-slate-950/50 text-white border border-slate-700'>
          <CardHeader>
            <CardTitle className='text-slate-300'>
              <TypographyH3>Marcus Biddle</TypographyH3>
            </CardTitle>
            <CardDescription className='text-slate-500'>
              <TypographyP>Scroll down to learn more</TypographyP>
            </CardDescription>
            <CardAction>
              <Button variant={'outline'} size={'icon-lg'} className='bg-slate-900 border-slate-700'>
                <IoDownloadOutline className=' size-6' />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16/14} className="bg-transparent">
                <img
                  src={pfp}
                  alt="Photo by Drew Beamer"
                  className="h-full w-full rounded-4xl object-cover border border-slate-900"
                />
            </AspectRatio>
            <div className='text-emerald-700 p-2'>
            <TypographyBlockquote >&quot;The only thing that is constant is change.&quot; {'-'} Heraclitus</TypographyBlockquote>
          </div>
            {/* <TypographyH1>Marcus Biddle</TypographyH1> */}
          </CardContent>
          <CardFooter className='flex justify-end gap-4'>
            <Button variant={'outline'} className='bg-transparent border-slate-700'>Github</Button>
            <Button>Projects</Button>
          </CardFooter>
          
        </Card>
      </div>
      {/* <HomePage /> */}
      <ProjectsPage />
      {/* <SkillsPage /> */}
      <ContactPage />
    </main>
    
    </NavProvider>
    </div>
    
    
  )
}

export default App
