// pages/index.js
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import SEO from '../components/SEO';

export default function Home({ posts }) {

  return (
    <Layout>
      <SEO title="Home - My Simple Blog" description="A collection of thoughts and stories." />
      <PostList posts={posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
