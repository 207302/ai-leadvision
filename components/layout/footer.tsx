import Link from "next/link";
import { featuredProducts } from "@/lib/content/products";
import { services } from "@/lib/content/services";
import { locationLine, navigation, siteConfig } from "@/lib/content/site";
import { Logo } from "@/components/layout/logo";
import { SocialLinks } from "@/components/layout/social-links";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            Intelligent products and enterprise systems for operations that have to work outside a demo.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">Products</p>
            <ul className="mt-4 space-y-2.5">
              {featuredProducts.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products#${product.id}`}
                    className="text-sm text-white/75 hover:text-white"
                  >
                    {product.kicker}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/40">Services</p>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-white/75 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a className="hover:text-white" href={`mailto:${siteConfig.emails.general}`}>
                  {siteConfig.emails.general}
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={`mailto:${siteConfig.emails.hr}`}>
                  {siteConfig.emails.hr}
                </a>
              </li>
              {siteConfig.phones.map((phone) => (
                <li key={phone.tel}>
                  <a className="hover:text-white" href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>{locationLine()}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-2 px-5 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}</p>
          <p>{siteConfig.name}</p>
        </div>
      </div>
    </footer>
  );
}
