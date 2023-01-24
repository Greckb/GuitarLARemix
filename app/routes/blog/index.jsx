import { useLoaderData } from '@remix-run/react'
import {getPosts} from '~/models/post.server'
import ListadoPosts from '~/components/listado-posts'


export function meta(){
  return(
    {
      title: 'Guitar LA - Blog de musica',
      description: 'Blog de musica y Ventas de guitarras'
    }
  )
}

export async function loader(){
  const post = await getPosts()
  return post.data
}

function Blog() {
  const posts = useLoaderData()
  return (
      <ListadoPosts 
        posts={posts}
      />
  )
}

export default Blog
