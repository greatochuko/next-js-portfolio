export async function getBlogposts() {
  try {
    const res = await fetch("http://localhost:3000/api/blog");
    const data = await res.json();
    return data;
  } catch (err) {
    const error = err as Error;
    return { message: error.message };
  }
}

export default async function getProjects() {
  try {
    const res = await fetch("http://localhost:3000/api/projects");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    const error = err as Error;
    return { message: error.message };
  }
}
