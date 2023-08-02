import { useState } from 'react';
import { Layers } from 'react-feather';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuToggled = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav class="p-4 -my-6 group border-t-4 border-tertiary border-opacity-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline font-hind space-x-8">
                <a
                  href="/"
                  class="relative px-6 py-3 font-bold text-primary text-xs group/home"
                >
                  <span class="absolute inset-0 w-full h-full rounded-lg transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-backdrop group-hover/home:translate-x-0 group-hover/home:translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full border-2 border-tertiary rounded-lg"></span>
                  <span class="relative">Home</span>
                </a>
                <a
                  href="/blog"
                  class="relative px-6 py-3 font-bold text-primary text-xs group/blog"
                >
                  <span class="absolute inset-0 w-full h-full rounded-lg transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-backdrop group-hover/blog:translate-x-0 group-hover/blog:translate-y-0"></span>
                  <span class="absolute inset-0 w-full h-full border-2 border-tertiary rounded-lg"></span>
                  <span class="relative">Blog</span>
                </a>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="bg-tertiary inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-backdrop focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={menuToggled}
              aria-expanded="false"
            >
              <Layers color="#EEEEEE" />
            </button>
          </div>
        </div>
      </div>
      <div class={`${toggleMenu ? 'block' : 'hidden'} md:hidden`}>
        <div class="px-2 pt-4 pb-12 space-y-1 sm:px-3">
          <a
            href="/"
            class="relative px-6 py-3 font-bold text-primary group/home"
          >
            <span class="absolute inset-0 w-full h-full rounded-lg transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-backdrop group-hover/home:translate-x-0 group-hover/home:translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full rounded-lg border-2 border-tertiary"></span>
            <span class="relative">Home</span>
          </a>
          <a
            href="/blog"
            class="relative px-6 py-3 ml-6 font-bold text-primary group/blog"
          >
            <span class="absolute inset-0 w-full h-full rounded-lg transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-backdrop group-hover/blog:translate-x-0 group-hover/blog:translate-y-0"></span>
            <span class="absolute inset-0 w-full h-full rounded-lg border-2 border-tertiary"></span>
            <span class="relative">Blog</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
