import Link from 'next/link';
import Image from 'next/image';
import MegaMenu from './MegaMenu';
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
export default function Navigation() {
  return (
    
    <header className=" dark:bg-gray-900 shadow-md relative">
      {/* Mega Menu - positioned outside container to span full width */}
      <MegaMenu />
      
      {/* Logo/Brand - positioned in center of header */}
      <div className="">
        <Link href="/" className="flex justify-center items-center">
          <Image src="/Brand.png" alt="Logo" width={200} height={120} />
        </Link>
      </div>
      
      <nav className="absolute bottom-0 right-0">
        <div className="flex justify-between items-center h-16">

          {/* Desktop Navigation */}
          <div className="flex">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <User />
              </Link>
              <Link
                href="/"
                className="text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Search />
              </Link>
              <Link
                href="/"
                className="text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <ShoppingCart />
              </Link>
              
            </div>
          </div>

          {/* Mobile menu button */}
          
        </div>

        
        
      </nav>
    </header>
  );
}
