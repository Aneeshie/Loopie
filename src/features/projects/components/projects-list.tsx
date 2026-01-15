
import { usePartialProjects } from '../hooks/use-project'
import { formatDistanceToNow } from "date-fns"
import { Spinner } from '@/components/ui/spinner'
import { Kbd } from '@/components/ui/kbd'
import { Doc } from '../../../../convex/_generated/dataModel'
import Link from 'next/link'
import { AlertCircleIcon, ArrowRight, GithubIcon, Globe2Icon, GlobeIcon, Loader2Icon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectsListProps {
  onViewAll: () => void
}

const getProjectIcon = (project: Doc<"projects">) => {
  if (project.importStatus === 'completed') {
    return <GithubIcon className="size-3.5 text-muted-foreground" />
  }
  if (project.importStatus === 'failed') {
    return <AlertCircleIcon className="size-3.5 text-muted-foreground" />
  }
  if (project.importStatus === 'importing') {
    return <Loader2Icon className="size-3.5 text-muted-foreground" />
  }

  return <GlobeIcon className="size-3.5 text-muted-foreground" />
}

const formatTimestamp = (timestamp: number) => {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
}

const ContinueCard = ({ data }: { data: Doc<"projects"> }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className='text-xs text-muted-foreground'>Last updated</span>
      <Button variant={"outline"} asChild className='h-auto items-start justify-start p-4 bg-background border rounded-none flex flex-col gap-2'>
        <Link href={`/project/${data._id}`} className='group'>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              {getProjectIcon(data)}
              <span className='font-medium truncate'>{data.name}</span>
            </div>
            <ArrowRight className='size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform' />
          </div>
          <div className="text-xs text-muted-foreground">
            {formatTimestamp(data.updatedAt)}
          </div>
        </Link>
      </Button>
    </div>
  )
}

const ProjectItem = ({ data }: { data: Doc<"projects"> }) => {
  return (
    <Link href={`/projects/${data._id}`} className='text-sm text-foreground/60 font-medium hover:text-foreground py-1 flex items-center justify-between w-full group'>
      <div className="flex items-center gap-2">
        {getProjectIcon(data)}
        <span className='truncate'>{data.name}</span>
      </div>
      <span className='text-xs text-muted-foreground group-hover:text-foreground/60 transition-colors'>
        {formatTimestamp(data.updatedAt)}
      </span>
    </Link>
  )
}

const ProjectsList = ({ onViewAll }: ProjectsListProps) => {
  const projects = usePartialProjects(6)

  if (projects === undefined) {
    return <Spinner className='size-4 text-ring' />
  }

  const [mostRecent, ...rest] = projects;
  return (
    <div className="flex flex-col gap-4">
      {mostRecent && <ContinueCard data={mostRecent} />}
      {rest.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className='text-xs text-muted-foreground'>
              Recent Projects
            </span>
            <button onClick={onViewAll} className='flex items-center gap-2 text-muted-foreground text-xs hover:text-foreground transition-colors'>
              <span>View All</span>
              <Kbd className='bg-accent border'>
                ⌘K
              </Kbd>
            </button>
          </div>
          <ul className='flex flex-col'>
            {rest.map((proj) => (
              <ProjectItem key={proj._id} data={proj} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProjectsList