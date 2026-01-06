"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

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
