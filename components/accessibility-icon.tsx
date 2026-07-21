import { cn } from '@/lib/utils'

// The universal international accessibility (wheelchair) symbol.
export function AccessibilityIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn('h-5 w-5', className)}
      aria-hidden="true"
      {...props}
    >
      <circle cx="14.8" cy="4.3" r="2" fill="currentColor" />
      <path
        d="M13.9 8.4h-2.3c-.5 0-.9.3-1 .8l-1.1 4.3c-.1.5.2 1 .7 1.2l3.4 1.2v4.7a1 1 0 1 0 2 0v-5.4c0-.4-.3-.8-.7-.9l-2.5-.9.6-2.3.7 1.9c.2.5.7.7 1.2.6l2.6-.7a1 1 0 1 0-.5-1.9l-1.6.4-.8-2.1c-.2-.5-.6-.9-1.2-.9Z"
        fill="currentColor"
      />
      <circle cx="9" cy="18.3" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="9" cy="18.3" r="0.9" fill="currentColor" />
    </svg>
  )
}
