"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}: SiderbarProps) => {
  const pathname = usePathname()
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link  className='mb-12 cursor-pointer items-center gap-2 flex' 
            href='/'
         >
           <Image className='size[24px] max-xl:size-16'
            src='/icons/logo.svg'
            alt='Logo'
            width={34}
            height={34}
          />
          <h1 className='sidebar-logo'>MUKULAH</h1>
        </Link>
          {
            sidebarLinks.map((item) =>{
              const isActive = pathname === item.route || 
               pathname.startsWith(`${item.route}/`)
              return (
                <Link  className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
                 href={item.route} key={item.label}
                 >
                  <div className="relative size-6">
                <Image 
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({
                    'brightness-[3] invert-0': isActive
                  })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
                </Link>
              )
            })
          }

      </nav>

    </section>
  )
}

export default Sidebar