"use client"
import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'
import { cn } from '@/lib/utils'
import { GithubIcon, SparkleIcon } from 'lucide-react'
import { Poppins } from 'next/font/google'
import {
  adjectives, animals, colors, uniqueNamesGenerator
} from "unique-names-generator"
import ProjectsList from './projects-list'
import { useCreateProject } from '../hooks/use-project'
import { useEffect, useState } from 'react'
import { ProjectCommandDialog } from './components/project-command-dialog'



const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const ProjectView = () => {

  const createProject = useCreateProject();
  const [CommandDialog, setCommandDialog] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandDialog(true);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <>
      <ProjectCommandDialog
        open={CommandDialog}
        onOpenChange={setCommandDialog}
      />
      <div className='min-h-screen bg-sidebar flex flex-col items-center justify-center p-6 md:p-16'>
        <div className="w-full max-w-sm mx-auto flex flex-col gap-4 items-center">
          <div className="flex justify-between  gap-4 w-full items-center">
            <div className="flex items-center gap-2 w-ful group/logo">
              <img src={"/vercel.svg"} alt='Loopie' className='size-[32px] md:size-[46px]' />
              <h1 className={cn(
                "text-4xl md:text-5xl font-semibold text-white",
                font.className,
              )}>Loopie</h1>
            </div>
          </div>

          <div className='flex flex-col gap-4 w-full'>
            <div className="grid grid-cols-2 gap-2">
              <Button variant={"outline"} onClick={() => {
                const projectName = uniqueNamesGenerator({
                  dictionaries: [adjectives, animals, colors],
                  separator: "-",
                  length: 3
                })
                createProject({
                  name: projectName
                })
              }} className='h-full items-start justify-start p-4 bg-background border flex flex-col gap-6 rounded-none'>
                <div className='flex items-center justify-between w-full'>
                  <SparkleIcon className='size-4' />
                  <Kbd className='bg-accent border'>
                    ⌘J
                  </Kbd>
                </div>
                <div>
                  <span className='text-sm'>
                    New
                  </span>
                </div>
              </Button>

              <Button variant={"outline"} onClick={() => { }} className='h-full items-start justify-start p-4 bg-background border flex flex-col gap-6 rounded-none'>
                <div className='flex items-center justify-between w-full'>
                  <GithubIcon className='size-4' />
                  <Kbd className='bg-accent border'>
                    ⌘I
                  </Kbd>
                </div>
                <div>
                  <span className='text-sm'>
                    Import
                  </span>
                </div>
              </Button>
            </div>

            <ProjectsList onViewAll={() => setCommandDialog(true)} />
          </div>
        </div>
      </div >
    </>
  )
}

export default ProjectView