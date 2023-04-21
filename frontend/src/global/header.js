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
            <div class="group-hover:border-4 group-hover:border-footer border-4 border-foreground rounded-full group-hover:rounded-full p-4 group-hover:shadow-xl bg-layered-steps bg-cover">
              <Layers color="#EEEEEE" />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline font-hind space-x-4">
                <a
                  href="/"
                  class="text-footer uppercase hover:text-tertiary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/blog"
                  class="text-footer uppercase hover:text-tertiary px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
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
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class={`${toggleMenu ? 'block' : 'hidden'} md:hidden`}>
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            class="text-footer hover:text-tertiary block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="/blog"
            class="text-footer hover:text-tertiary block px-3 py-2 rounded-md text-base font-medium"
          >
            Articles
          </a>
        </div>
      </div>
    </nav>
  );
}
