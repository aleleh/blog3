import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact - My Simple Blog" description="Get in touch with us" />
      <main className="max-w-4xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4">If you have any questions, please feel free to reach out.</p>
        <p>Email: <a href="mailto:contact@mysimpleblog.com" className="text-blue-600 hover:underline">contact@mysimpleblog.com</a></p>
      </main>
    </Layout>
  );
}