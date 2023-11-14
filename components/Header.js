import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-semibold">My Simple Blog</h1>
        <nav>
          <Link href="/" passHref>
            <span className="text-white px-2 hover:text-gray-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className="text-white px-2 hover:text-gray-300 cursor-pointer">About</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="text-white px-2 hover:text-gray-300 cursor-pointer">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;
