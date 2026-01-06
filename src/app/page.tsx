"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

/**
 * Home page component that displays authentication UI, a project creation control, and a list of projects.
 *
 * Renders a Clerk UserButton, a "Create Project" button that triggers a project creation mutation with the name "test123", and a list of fetched projects (each rendered as an li showing the project's name).
 *
 * @returns The JSX element for the Home page.
 */
export default function Home() {
  const projects = useQuery(api.project.get);

  const createProject = useMutation(api.project.create);

  return (
    <div>
      <UserButton />
      <Button onClick={() => createProject({ name: "test123" })}>
        Create Project
      </Button>
      {projects?.map((proj) => {
        return <li key={proj._id}>{proj.name}</li>;
      })}
    </div>
  );
}