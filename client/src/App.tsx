import { NavProvider } from './components/NavProvider';
import { ProjectsPage } from './sections/ProjectsPage';
import { SkillsPage } from './sections/SkillsPage';
import { ContactPage } from './sections/ContactPage';
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { TypographyBlockquote, TypographyH1,  } from './components/Typography';
import {
  FileItem,
  FolderItem,
  FolderTrigger,
  FolderContent,
  Files,
  SubFiles,
} from '@/components/animate-ui/components/radix/files';
import { useEffect, useState } from 'react';

const RadixFilesDemo = () => {
  const [open, setOpen] = useState(['projects'])

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
    <div className="relative text-white w-[500px] rounded-md border border-slate-700 bg-slate-950 overflow-auto z-100">
      <Files className="w-full" defaultOpen={['portfolio']} >
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
    </div>
  );
};

function App() {

 

  return (
    <div className='relative min-h-screen bg-black'>
      <GravityStarsBackground starsOpacity={.85} className='fixed text-emerald-500' />
    <NavProvider>
    {/* <NavigationMenu /> */}
    <div className='fixed flex items-center justify-center w-full p-4'>
      <RadixFilesDemo />
    </div>
    
    <main className='font-inter text-white p-8 z-50'>
      <div className='h-screen flex flex-col items-center space-y-12 pt-32'>
        <div className='text-slate-500'>
          <TypographyBlockquote>&quot;The only thing that is constant is change.&quot; {'-'} Heraclitus</TypographyBlockquote>
        </div>
        <div id={'home'} className='space-y-8'>
          <TypographyH1>Marcus Biddle</TypographyH1>
          {/* <div className='flex justify-around gap-4'>
            <TypographyInlineCode>Web Developer</TypographyInlineCode>
            <TypographyInlineCode>Entrepreneur</TypographyInlineCode>
            <TypographyInlineCode>Chess Enthusiast</TypographyInlineCode>
          </div> */}
        </div>
        

      </div>
      {/* <HomePage /> */}
      <ProjectsPage />
      <SkillsPage />
      <ContactPage />
    </main>
    
    </NavProvider>
    </div>
    
    
  )
}

export default App
