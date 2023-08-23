import { NextLink } from '@site/utilities/deps';
import Image from 'next/image';

const image = process.env.NEXT_PUBLIC_BRAND_LOGO;
const repo = process.env.NEXT_PUBLIC_REPO;
const name = process.env.NEXT_PUBLIC_BRAND_NAME;

const primaryColors = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_PRIMARY || '');
const secondaryColors = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_SECONDARY || '');
const darkColors = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_DARK || '');

export function HeroSection() {
  return (
    <section className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-32">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        {image && (
          <div className="w-72 h-24 rounded-lg overflow-hidden relative">
            <Image src={image} alt="brand logo" fill />
          </div>
        )}
      </div>
      <div className="text-center grid place-content-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{name} Shopify Storefront</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This is a shopify template for demonstration purposes only
        </p>
        <div className="mt-5 flex justify-between max-w-xl items-center">
          <h3 className=" font-bold text-lg">Primary Colors</h3>
          <div className="mt-2 flex space-x-2 justify-center items-center">
            {primaryColors &&
              Object.values(primaryColors).map((backgroundColor) => (
                <div className="w-5 h-5 rounded" style={{ backgroundColor }} />
              ))}
          </div>
        </div>
        <div className="mt-5 flex justify-between max-w-xl items-center">
          <h3 className=" font-bold text-lg">Secondary Colors</h3>
          <div className="mt-2 flex space-x-2 justify-center items-center">
            {secondaryColors &&
              Object.values(secondaryColors).map((backgroundColor) => (
                <div className="w-5 h-5 rounded" style={{ backgroundColor }} />
              ))}
          </div>
        </div>
        <div className="mt-5 flex justify-between max-w-xl items-center">
          <h3 className=" font-bold text-lg">Dark Colors</h3>
          <div className="mt-2 flex space-x-2 justify-center items-center">
            {darkColors &&
              Object.values(darkColors).map((backgroundColor) => (
                <div className="w-5 h-5 rounded" style={{ backgroundColor }} />
              ))}
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NextLink
            href="/products"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Browse Products
          </NextLink>
          <a href={repo} className="text-sm font-semibold leading-6 text-gray-900" target="_blank">
            Go To Repo <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
