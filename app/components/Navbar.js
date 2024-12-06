"use client"

import { useState } from 'react';
import Link from 'next/link'
import { BsInstagram, BsYoutube, BsFacebook, BsPinterest } from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full'>
        <div className='w-full bg-neutral-100 p-2 text-center'>
            <p className='uppercase tracking-widest'>shop my spring splendid collection!</p>
        </div>
        <div className='w-full bg-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='hidden p-12 lg:flex items-center justify-center gap-10 mx-auto'>
                    <div className='flex gap-5 text-lg tracking-tight text-neutral-500'>
                        <Link href={'/about'}>
                            <p>About</p>
                        </Link>
                        <Link href={'/contact'}>
                            <p>Contact</p>
                        </Link>
                        <Link href={'/newsletter'}>
                            <p>Subscription</p>
                        </Link>
                    </div>
                    <Link href={'/'}>
                        <p className='text-7xl text-neutral-500 text-special tracking-tightest'>Maria Fleitman</p>
                    </Link>
                    <div className='flex gap-5 text-lg tracking-tight text-neutral-500'>
                        <Link href={'/shop'}>
                            <p>Shop</p>
                        </Link>
                        <Link href={'/collection'}>
                            <p>Collection</p>
                        </Link>
                        <div className='mb-0 mt-auto flex items-center justify-center gap-2 mr-0'>
                            <div>
                                <span className='text-neutral-300 hover:text-neutral-300 text-2xl'>
                                    <a href='https://twitter.com'>
                                        <BsInstagram />
                                    </a>
                                </span>
                            </div>
                            <div>
                                <span className='text-neutral-300 hover:text-neutral-300 text-2xl'>
                                    <BsFacebook />
                                </span>
                            </div>
                            <div>
                                <span className='text-neutral-300 hover:text-neutral-300 text-2xl'>
                                    <BsYoutube />
                                </span>
                            </div>
                            <div>
                                <span className='text-neutral-300 hover:text-neutral-300 text-2xl'>
                                    <BsPinterest />
                                </span>
                            </div>
                    </div>
                    </div>
                </div>

                <div className='lg:hidden flex p-2 items-center'>
                    <div className='ml-0 mr-auto'>
                        <Link href='/'>
                            <p className='text-5xl text-special text-neutral-500'>MF</p>
                        </Link>
                    </div>
                    <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className='lg:hidden hover:scale-110 transition-all duration-300 text-3xl cursor-pointer ml-auto mr-0'>
                        {
                            !isOpen ? 
                            <span className='text-3xl text-neutral-500 cursor-pointer'>
                                <AiOutlineMenu />
                            </span> : null
                        }
                    </div>
                </div>

            </div>
            <div className='hidden lg:flex border-t border-b p-5 border-black mx-auto flex items-center justify-center gap-10 uppercase tracking-widest'>
                <Link href={'/category/fashion'}>
                    <p>fashion</p>
                </Link>
                <Link href={'/category/beauty'}>
                    <p>beauty</p>
                </Link>
                <Link href={'/category/home'}>
                    <p>home</p>
                </Link>
                <Link href={'/category/lifestyle'}>
                    <p>lifestyle</p>
                </Link>
                <Link href={'/category/entertaining'}>
                    <p>entertaining</p>
                </Link>
                <Link href={'/category/wellness'}>
                    <p>wellness</p>
                </Link>
                <Link href={'/category/holiday'}>
                    <p>holiday</p>
                </Link>
            </div>
        </div>

        <div className={`animated-box ${isOpen ? 'open' : 'closed'} bg-neutral-100 text-neutral-500 absolute top-0 w-full z-20`}>
                    <div className='relative w-full'>
                        <button 
                            className='absolute top-4 right-4 text-neutral-500 text-4xl'
                            onClick={() => setIsOpen(!isOpen)}    
                        >
                        <AiOutlineCloseCircle />
                        </button>
                    </div>
                    <div className='flex flex-col h-full content-center px-5'>
                        <div className='container max-w-xs h-full justify-text mx-auto mt-5 flex flex-col justify-center items-center gap-10 text-lg uppercase'>
                            <Link href={'/category/fashion'}>
                                <p>fashion</p>
                            </Link>
                            <Link href={'/category/beauty'}>
                                <p>beauty</p>
                            </Link>
                            <Link href={'/category/home'}>
                                <p>home</p>
                            </Link>
                            <Link href={'/category/lifestyle'}>
                                <p>lifestyle</p>
                            </Link>
                            <Link href={'/category/entertaining'}>
                                <p>entertaining</p>
                            </Link>
                            <Link href={'/category/wellness'}>
                                <p>wellness</p>
                            </Link>
                            <Link href={'/category/holiday'}>
                                <p>holiday</p>
                            </Link>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Navbar