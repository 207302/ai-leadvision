import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="bg-navy text-white">
      <Container className="py-40">
        <p className="text-[11px] uppercase tracking-[0.18em] text-cyan">404</p>
        <h1 className="mt-4 text-4xl sm:text-6xl">This page is not on the system.</h1>
        <p className="mt-4 max-w-md text-white/70">
          The address does not match a page. Start from the homepage or go straight to products.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/" className="inline-flex rounded-md bg-accent px-4 py-2.5 text-sm text-white">
            Home
          </Link>
          <Link
            href="/products"
            className="inline-flex rounded-md border border-white/20 px-4 py-2.5 text-sm text-white"
          >
            Products
          </Link>
        </div>
      </Container>
    </section>
  );
}
