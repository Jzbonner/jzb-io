/**TODO: different nav design for the rework  */

import { Layout, Sunset } from 'react-feather';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base text-primary font-semibold uppercase tracking-tight md:ml-auto">
          <a href="/">
            <button class="bg-backdrop hover:bg-secondary text-center text-primary hover:text-tertiary font-semibold py-2 px-4 border-b-4 border-tertiary hover:border-primary rounded-lg mx-2">
              Home
            </button>
          </a>
          <a href="/blog">
            <button class="bg-backdrop hover:bg-secondary text-center text-primary hover:text-tertiary font-semibold py-2 px-4 border-b-4 border-tertiary hover:border-primary rounded-lg mx-2">
              Articles
            </button>
          </a>
          <a href="/blog">
            <button class="bg-backdrop hover:bg-secondary text-center text-primary hover:text-tertiary font-semibold py-2 px-4 border-b-4 border-tertiary hover:border-primary rounded-lg mx-2">
              Contact
            </button>
          </a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <h1 className="text-4xl drop-shadow-lg md:text-8xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-br from-backdrop to-cyan">
            jzb.io
          </h1>
        </a>
        <div class="lg:w-2/5 inline-flex ml-0 lg:justify-end">
          <button class="bg-backdrop hover:bg-secondary text-center text-primary hover:text-tertiary font-semibold py-2 px-4 border-b-4 border-tertiary hover:border-primary rounded-lg mx-4">
            <Sunset color="#e9f3ff" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
