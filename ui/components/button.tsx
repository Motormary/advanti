'use client'

import { cn } from '@/utils/utils'

export default function Button({
  children,
  className,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className={cn(
        className,
        'px-4 py-3 rounded-xs text-center flex items-center transition-colors duration-300 cursor-pointer'
      )}>
      {children}
    </button>
  )
}
