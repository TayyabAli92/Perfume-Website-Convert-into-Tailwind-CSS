import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-pink-100 shadow-md">
      <div className="flex items-center mb-4 md:mb-0">
        <Link href="/">
          <Image 
            className='rounded-full'
            src="/logo.png" 
            alt='logo image'
            width={70} 
            height={70} />
        </Link>
      </div>
      <nav>
        <ul className="list-none flex flex-col md:flex-row gap-4 md:gap-8 m-0 p-0">
          <li>
            <Link href="/" className="text-gray-800 font-medium hover:text-pink-600">Home</Link>
          </li>
          <li>
            <Link href="/product" className="text-gray-800 font-medium hover:text-pink-600">Products</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 font-medium hover:text-pink-600">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}