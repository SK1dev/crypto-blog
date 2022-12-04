import BlogList from './BlogList';
import UseFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = UseFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
      {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'milly' )} title="Milly's blogs"/>} */}
    </div>
  );
}

export default Home;