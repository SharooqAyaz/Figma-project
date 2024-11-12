import Link from 'next/link';

const Header = () => (
  <header className="flex justify-between items-center p-6 bg-darkBlue text-white">
    <div className="text-lg font-bold">BrandName</div>
    <nav className="space-x-6">
      <Link href="#">Home</Link>
      <Link href="#">Product</Link>
      <Link href="#">Pricing</Link>
      <Link href="#">Contact</Link>
    </nav>
    <div>
      <Link href="/login" className="mr-4">Login</Link>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Join Us</button>
    </div>
  </header>
);
export default Header;