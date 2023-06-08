import Navigation from "../components/Navigation/Navigation";
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>This is my first app in Next.js</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
