/**TODO: different nav design for the rework  */

import { Layout, Sunset } from 'react-feather';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base text-primary font-semibold uppercase tracking-tight md:ml-auto">
          <a href="/" class="mr-5 hover:text-tertiary">
            Home
          </a>
          <a href="/blog" class="mr-5 hover:text-tertiary">
            Articles
          </a>
          <a href="/blog" class="mr-5 hover:text-tertiary">
            Contact
          </a>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <h1 className="text-4xl drop-shadow-lg md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-transparent bg-clip-text bg-gradient-to-br from-backdrop to-cyan">
            jzb.io
          </h1>
        </a>
        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button class="inline-flex items-center border-0 p-2 focus:outline-none hover:bg-secondary rounded-lg text-base mt-4 md:mt-0">
            <Sunset color="#e9f3ff" size={40} />
          </button>
        </div>
      </div>
    </section>
  );
}
