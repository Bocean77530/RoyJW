import Link from 'next/link';
import Navigation from './navigation';

export default function Header() {
  return (
    <>
      <header className='text-center bg-black text-white'>滚动字幕条</header>
      <Navigation/>
      <Link href='https://www.google.com' className='text-center bg-blue-500'>
        <header className='text-center bg-blue-500'>event</header>
      </Link>
      
    </>
  );
}
