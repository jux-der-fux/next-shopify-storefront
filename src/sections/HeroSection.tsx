import { NextLink } from '@site/utilities/deps';
import Image from 'next/image';

const image: string = process.env.NEXT_PUBLIC_BRAND_LOGO as string;
const repo: string = process.env.NEXT_PUBLIC_REPO as string;
const name: string = process.env.NEXT_PUBLIC_BRAND_NAME as string;

const primaryColors: [string] = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_PRIMARY || '[]');
const secondaryColors: [string] = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_SECONDARY || '[]');
const darkColors: [string] = JSON.parse(process.env.NEXT_PUBLIC_BRAND_COLOR_PALETTE_DARK || '[]');

export function HeroSection() {
  return (
    <section className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-32">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        {image && (
          <div className="relative h-24 w-72 overflow-hidden rounded-lg">
            <Image src={image} alt="brand logo" fill />
          </div>
        )}
      </div>
      <div className="grid place-content-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{name} Shopify Storefront</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This is a shopify template for demonstration purposes only
        </p>
        <div className="mt-5 flex max-w-xl items-center justify-between">
          <h3 className=" text-lg font-bold">Primary Colors</h3>
          <div className="mt-2 flex items-center justify-center space-x-2">
            {primaryColors &&
              Object.values(primaryColors).map((backgroundColor) => (
                <div key={backgroundColor} className="h-5 w-5 rounded" style={{ backgroundColor }} />
              ))}
          </div>
        </div>
        <div className="mt-5 flex max-w-xl items-center justify-between">
          <h3 className=" text-lg font-bold">Secondary Colors</h3>
          <div className="mt-2 flex items-center justify-center space-x-2">
            {secondaryColors &&
              Object.values(secondaryColors).map((backgroundColor) => (
                <div key={backgroundColor} className="h-5 w-5 rounded" style={{ backgroundColor }} />
              ))}
          </div>
        </div>
        <div className="mt-5 flex max-w-xl items-center justify-between">
          <h3 className=" text-lg font-bold">Dark Colors</h3>
          <div className="mt-2 flex items-center justify-center space-x-2">
            {darkColors &&
              Object.values(darkColors).map((backgroundColor) => (
                <div key={backgroundColor} className="h-5 w-5 rounded" style={{ backgroundColor }} />
              ))}
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <NextLink
            href="/products"
            className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
