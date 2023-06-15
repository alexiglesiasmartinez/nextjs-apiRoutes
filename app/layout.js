import { authOptions } from "/utils/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import Navigation from "../components/Navigation/Navigation";
import NextAuthSessionProvider from "./providers/sessionProvider";

import '../styles/globals.css';

export default async function RootLayout({ children }) {
  // SERVER SIDE RENDERING
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <html lang="en">
      <head>
        <title>This is my first app in Next.js</title>
      </head>
      <body>
        <NextAuthSessionProvider>
          <Navigation />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html >
  );
}