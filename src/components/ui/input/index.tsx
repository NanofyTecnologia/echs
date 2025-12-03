import * as React from 'react'

import { cn } from '@/lib/shadcn'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type, ...props }, ref) => {
    return (
      <div className="w-full space-y-0.5">
        <input
          type={type}
          data-error={!!error}
          className={cn(
            'border-input file:text-foreground placeholder:text-muted-foreground data-[error=true]:border-destructive flex h-9 w-full rounded-md border bg-transparent px-3 py-5 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:ring-black/40 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[error=true]:ring-0',
            className,
          )}
          ref={ref}
          {...props}
        />

        {error && <p className="text-destructive text-xs">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
