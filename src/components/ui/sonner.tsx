import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "group toast !bg-card !border !border-border !text-foreground !text-sm !shadow-lg !rounded-2xl",
          description: "!text-muted-foreground !text-sm",
          actionButton:
            "!bg-primary !text-primary-foreground",
          cancelButton:
            "!bg-muted !text-muted-foreground",
        },
        style: {
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
