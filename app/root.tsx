import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"

// prettier-ignore
import "./tailwind.css";

import { Logo } from "~/components/logo"
import { SearchForm } from "~/components/search-form"

export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen antialiased font-sans">
        <div className="container flex flex-col min-h-screen py-16 mx-auto">
          <header className="flex flex-row items-center justify-between w-full mb-8 gap-x-4">
            <Logo />
            <SearchForm />
          </header>
          <main className="flex flex-col flex-1">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
