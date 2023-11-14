import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function About() {
  return (
    <Layout>
      <SEO title="About - My Simple Blog" description="Learn more about My Simple Blog" />
      <main className="max-w-4xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">About the Blog</h1>
        <p className="mb-4">This blog is a simple project created to demonstrate the capabilities of Next.js.</p>
        <p>Here we share insights, stories, and tutorials about web development and more.</p>
      </main>
    </Layout>
  );
}