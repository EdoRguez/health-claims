'use client'

import { cn } from '@/app/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'text-sm transition-colors hover:text-accent',
        isActive ? 'text-accent' : 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Link>
  )
}

