import Link from 'next/link';
import Image from 'next/image';
import MegaMenu from './MegaMenu';
import { User } from 'lucide-react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
export default function Navigation() {
  return (
    
    <div className="sticky top-0 bg-white dark:bg-gray-900 relative border-b border-gray-200 z-50">
      {/* Mega Menu - positioned outside container to span full width */}
      <MegaMenu />
      
      {/* Logo/Brand - positioned in center of header */}
      <div className="h-full absolute left-1/2 transform -translate-x-1/2 top-1/2 transform -translate-y-1/2 z-30">
        <Link href="/">
         <Image src="/Brand.png" alt="Logo" width={120} height={50} />
        </Link>
      </div>
      
      <div className="flex justify-between items-center h-16 px-4 relative z-20">

          {/* Left spacer to balance the right icons */}
          <div className="w-16"></div>
          
          {/* Desktop Navigation */}
          <div className="">
            <div className="flex items-center space-x-4">
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

        
        
      
    </div>
  );
}
