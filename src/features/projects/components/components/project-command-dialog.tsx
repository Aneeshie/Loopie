import { useRouter } from "next/navigation";
import { AlertCircleIcon, Github, GithubIcon, GlobeIcon, Loader2Icon } from "lucide-react";
import { useProjects } from "../../hooks/use-project";
import { Doc } from "../../../../../convex/_generated/dataModel";
import { CommandDialog } from "@/components/ui/command";
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "cmdk";


interface ProjectCommandDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const getProjectIcon = (project: Doc<"projects">) => {
    if (project.importStatus === 'completed') {
        return <GithubIcon className="size-4 text-muted-foreground" />
    }
    if (project.importStatus === 'failed') {
        return <AlertCircleIcon className="size-4 text-muted-foreground" />
    }
    if (project.importStatus === 'importing') {
        return <Loader2Icon className="size-4 text-muted-foreground" />
    }

    return <GlobeIcon className="size-4 text-muted-foreground" />
}

export const ProjectCommandDialog = ({ open, onOpenChange }: ProjectCommandDialogProps) => {
    const router = useRouter();
    const projects = useProjects()

    const handleSelect = (projectId: string) => {
        router.push(`/projects/${projectId}`);
        onOpenChange(false);
    }

    return (
        <CommandDialog
            open={open}
            onOpenChange={onOpenChange}
            title="Search Projects"
            description="Search and navigation to your projects"
        >
            <CommandInput placeholder="Search Projects..." />
            <CommandList>
                <CommandEmpty>No projects found.</CommandEmpty>
                <CommandGroup heading="Projects">
                    {projects?.map((project) => (
                        <CommandItem
                            key={project._id}
                            className="flex items-center gap-2 p-2 rounded-md hover:bg-accent cursor-pointer"
                            onClick={() => handleSelect(project._id)}
                        >
                            {getProjectIcon(project)}
                            <span className="truncate">{project.name}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>

    )
}