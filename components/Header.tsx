import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-blue-400'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[50px]'>
        <h1>Logo</h1>
        <nav>
          <ul className='flex items-center gap-3'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
            <li>
              <Link href="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div> 
    </header>
  );
}
