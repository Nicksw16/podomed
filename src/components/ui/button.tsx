import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

// shadcn-style. Use buttonVariants() em <a> para links com cara de botão.
export const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover',
        whatsapp: 'bg-whatsapp text-white hover:bg-whatsapp-hover',
        secondary: 'bg-baby text-foreground hover:bg-accent',
        outline: 'border border-primary/30 bg-white/70 text-primary hover:bg-surface',
        ghost: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: '',
        sm: 'min-h-11 px-4 py-2 text-sm',
        icon: 'size-11 p-0',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => (
    <button ref={ref} type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
)
Button.displayName = 'Button'
