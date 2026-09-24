import { Link } from "react-router-dom";
import { A } from "../assets/assetPaths";
import { Logo } from "./layout";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-page">
      <header className="border-b border-[rgba(4,69,209,0.1)] bg-page">
        <div className="mx-auto flex w-full max-w-[1280px] items-center px-4 py-3 sm:px-6 xl:px-0">
          <Logo />
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center">
        <div className="flex max-w-[460px] flex-col items-center gap-5">
          <img alt="" className="size-16 object-cover" src={A.logo} />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Page not found</p>
          <h1 className="text-4xl font-bold text-navy">This page does not exist.</h1>
          <p className="text-base font-medium leading-7 text-body">The link may be outdated or the address may be incorrect.</p>
          <Link to="/home" className="rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
