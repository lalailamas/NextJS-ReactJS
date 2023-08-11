import "./globals.css";
import Navigation from "../../components/Navigation";
import "tailwindcss/tailwind.css";

export const metadata = {
  title: "My First Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
