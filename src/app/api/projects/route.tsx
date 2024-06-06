import projects from "@/data/projects.json";

export function GET() {
  return Response.json(projects);
}
