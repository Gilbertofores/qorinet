import { useToast } from "@/hooks/use-toast";
import { Toast, ToastTitle, ToastDescription, ToastClose } from "@/components/ui/toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed inset-0 z-50 flex flex-col-reverse items-end gap-2 p-4 pointer-events-none">
      <div className="flex w-full flex-col gap-2 sm:max-w-sm">
        {toasts.map(({ id, title, description, open = true }) =>
          open ? (
            <Toast key={id} className="pointer-events-auto">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
              <div className="mt-2 flex items-center gap-2">
                <ToastClose onClick={() => dismiss(id)} />
              </div>
            </Toast>
          ) : null
        )}
      </div>
    </div>
  );
}