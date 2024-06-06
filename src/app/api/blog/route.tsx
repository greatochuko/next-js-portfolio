import articles from "@/data/articles.json";

export function GET() {
  return Response.json(articles);
}
