import { cn } from "@/app/lib/utils"
import { forwardRef } from "react"

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          ref={ref}
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          {...props}
        />
        <div className={cn(
          "w-11 h-6 bg-gray-200 rounded-full peer",
          "peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20",
          "dark:bg-gray-700",
          "peer-checked:after:translate-x-full peer-checked:after:border-white",
          "peer-checked:bg-primary",
          "after:content-[''] after:absolute after:top-[2px] after:left-[2px]",
          "after:bg-white after:border-gray-300 after:border after:rounded-full",
          "after:h-5 after:w-5 after:transition-all",
          className
        )} />
      </label>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }