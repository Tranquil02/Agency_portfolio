import { Toaster } from "sonner";
import "./globals.css";
import ToastProvider from "@/components/toastProvider";

export const metadata = {
  title: "Mauryan Studio",
  description: "Premium Digital Agency",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden">
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
