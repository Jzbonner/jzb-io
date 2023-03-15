/**TODO: redesign the look of the storyboard section */
/**TODO: swap out the SVGs for react-feather icons */
/**TODO: swap out the large graphic for four smaller graphic squares  */

import { Printer, Home, Box, Layers, User } from 'react-feather';

export default function ServicesSection() {
  return (
    <>
      <section class="text-gray-600 body-font border-t-2">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col text-left w-full mb-20">
            <h2 class="text-sm text-tertiary uppercase font-medium title-font mb-1">
              What have I been a part of?
            </h2>
            <h1 class="sm:text-2xl text-xl font-medium title-font text-primary drop-shadow-md">
              Experience and Contributions
            </h1>
          </div>
          <div class="flex flex-wrap w-full">
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <Printer color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font uppercase text-sm text-tertiary mb-1">
                    Cox Media Group: Atlanta Journal Constitution
                  </h2>
                  <h2 class="font-medium title-font text-sm uppercase text-primary">
                    Software Developer
                  </h2>
                  <p class="leading-relaxed">
                    Made contributions to a codebase built with on React, AWS
                    ARCxp and Docker. Collaboratively developed features for the
                    ePaper mobile app (currently top ranking news app on Google
                    Play Store), and designed/developed new pages for the AJC
                    and AJC-affiliated web apps.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <Home color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-tertiary mb-1 tracking-wider">
                    REPLI
                  </h2>
                  <h2 class="font-medium title-font text-sm text-primary uppercase mb-1 tracking-wider">
                    Front End Engineer
                  </h2>
                  <p class="leading-relaxed">
                    Responsible for client side functinoality, and handling bug
                    issues and fixes with a Headless Wordpress CMS backend.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <Box color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-tertiary mb-1 uppercase tracking-wider">
                    DecoNetwork
                  </h2>
                  <h2 class="font-medium title-font text-sm text-primary mb-1 uppercase tracking-wider">
                    Software Support Specialist
                  </h2>
                  <p class="leading-relaxed">
                    Provided debugging support, test automation and Coloring
                    book nar whal glossier master cleanse umami. Salvia +1
                    master cleanse blog taiyaki.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <User color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-tertiary mb-1 uppercase tracking-wider">
                    UNC Information Services
                  </h2>
                  <h2 class="font-medium title-font text-sm text-primary mb-1 uppercase tracking-wider">
                    Information Technology Technician
                  </h2>
                  <p class="leading-relaxed">
                    VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.
                  </p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <Layers color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font text-sm text-tertiary mb-1 uppercase tracking-wider">
                    Cisco Systems Inc.
                  </h2>
                  <h2 class="font-medium title-font text-sm text-primary mb-1 uppercase tracking-wider">
                    Junior/Senior Intern (Fellowship)
                  </h2>
                  <p class="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 17l4 4 4-4m-4-5v9"></path>
                      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      2.7K
                    </h2>
                    <p class="leading-relaxed">Downloads</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      1.3K
                    </h2>
                    <p class="leading-relaxed">Users</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      74
                    </h2>
                    <p class="leading-relaxed">Files</p>
                  </div>
                </div>
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                      46
                    </h2>
                    <p class="leading-relaxed">Places</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <img
              class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="https://dummyimage.com/1200x500"
              alt="step"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
}
