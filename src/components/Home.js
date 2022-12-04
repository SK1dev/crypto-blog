import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "FTX's Collapse - What really happened?", body: 'lorem ipsum...', author: 'fabian', id: 1 },
    { title: 'Will Crypto go back up?', body: 'lorem ipsum...', author: 'simon', id: 2 },
    { title: 'How to set up a Wallet', body: 'lorem ipsum...', author: 'milly', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {})

  return (
    <div className='home'>
        <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>
        <BlogList blogs={blogs.filter((blog) => blog.author === 'milly' )} title="Milly's blogs"/>
    </div>
  );
}
 
export default Home;