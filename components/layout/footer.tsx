import Link from "next/link";
import { productGuides } from "@/lib/content/product-pages";
import { featuredProducts } from "@/lib/content/products";
import { serviceCategories } from "@/lib/content/services";
import {
  companyIdentity,
  footerNavigation,
  legalNavigation,
  officeAddressLines,
  siteConfig,
} from "@/lib/content/site";
import { Logo } from "@/components/layout/logo";
import { SocialLinks } from "@/components/layout/social-links";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-[1160px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            {companyIdentity()}. Intelligent products and enterprise systems for operations that have to work outside a demo.
          </p>
          <div className="mt-6">
            <SocialLinks />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.map((item) => (
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
              {productGuides.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/40">Services</p>
            <ul className="mt-4 space-y-2.5">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/services#${category.id}`}
                    className="text-sm text-white/75 hover:text-white"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">Bengaluru office</p>
            <address className="mt-4 space-y-1 text-sm not-italic leading-6 text-white/75">
              {officeAddressLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
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
              <li>
                <span className="text-white/45">WhatsApp </span>
                {siteConfig.whatsapp.display}
              </li>
            </ul>
            <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/40">Registration</p>
            <p className="mt-3 text-sm leading-6 text-white/75">
              {siteConfig.legalName}
              <span className="mt-1 block">{siteConfig.registration}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1160px] flex-col gap-4 px-5 pb-44 pt-5 text-xs text-white/40 sm:px-8 md:pb-32">
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>
              © {new Date().getFullYear()} {siteConfig.legalName}
            </span>
            <span>
              Designed by{" "}
              <a
                href="https://www.linkedin.com/in/vishakhs17"
                className="underline decoration-white/25 underline-offset-2 hover:text-white hover:decoration-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vishakh S
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
