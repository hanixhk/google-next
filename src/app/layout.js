import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "google clone",
  description: "Generated google clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer/>
      </body>
    </html>
  );
}
