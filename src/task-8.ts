import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

export  async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

