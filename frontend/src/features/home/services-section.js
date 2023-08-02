// TODO: rebase this component and try and compoenent size to efficient levels

import { Printer, Home, Box, Layers, User } from 'react-feather';

const iconData = {
  dev: [
    'react-original',
    'nextjs-original',
    'nodejs-plain',
    'graphql-plain',
    'php-plain',
    'laravel-plain-wordmark',
    'wordpress-plain',
  ],
  design: ['figma-plain', 'tailwindcss-plain', 'canva-original'],
  sdlc: ['jest-plain', 'heroku-original', 'linux-plain'],
  db: [
    'postgresql-plain',
    'mysql-plain',
    'go-original-wordmark',
    'nginx-original',
  ],
  web: [
    'github-original',
    'bitbucket-original',
    'docker-plain',
    'digitalocean-plain',
  ],
  proj: ['jira-plain', 'slack-plain', 'confluence-original'],
};

export default function ServicesSection() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mt-24 mb-2 flex flex-wrap">
          <div class="flex flex-col text-left w-full mb-20">
            <h2 class="text-md text-tertiary uppercase font-semibold title-font font-hind mb-1">
              What have I been a part of?
            </h2>
            <h1 class="sm:text-2xl text-xl font-semibold font-hind title-font text-primary drop-shadow-md">
              Experience and Contributions
            </h1>
          </div>
          <div class="flex flex-wrap w-full">
            {/* timelineSection: experience breakdown */}
            <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-footer pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <Printer color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-semibold title-font text-lg font-hind uppercase text-tertiary mb-1">
                    Cox Media Group: Atlanta Journal Constitution
                  </h2>
                  <h2 class="font-medium title-font font-hind text-md uppercase text-primary">
                    Software Developer
                  </h2>
                  <p class="leading-relaxed font-hind text-md p-3">
                    Made contributions to a codebase built with React, AWS
                    ARCxp and Docker. Collaboratively developed features for the
                    ePaper mobile app (currently top ranking news app on Google
                    Play Store), and designed/developed new pages for the AJC
                    and AJC-affiliated web apps.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-footer pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <Home color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-semibold title-font font-hind text-lg text-tertiary mb-1 tracking-wider">
                    REPLI
                  </h2>
                  <h2 class="font-medium font-hind title-font text-md text-primary uppercase mb-1 tracking-wider">
                    Front End Engineer
                  </h2>
                  <p class="leading-relaxed font-hind text-md p-3">
                    Developed integrated static and dynamic web applications for
                    multifamily residence community organizations using PHP,
                    AWS, Docker, and Front-End technologies.
                  </p>
                </div>
              </div>
              <div class="flex relative pb-12">
                <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-footer pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <Box color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-semibold title-font font-hind text-lg text-tertiary mb-1 uppercase tracking-wider">
                    DecoNetwork
                  </h2>
                  <h2 class="font-medium title-font font-hind text-md text-primary mb-1 uppercase tracking-wider">
                    Software Support Specialist
                  </h2>
                  <p class="leading-relaxed font-hind text-md p-3">
                    Provided technical assistance, debugging support, and test
                    automation for a proprietary software solution for clients
                    in the printing and embroidery industry using Ruby on Rails
                    and MySQL.
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
                  <h2 class="font-semibold font-hind title-font text-lg text-tertiary mb-1 uppercase tracking-wider">
                    UNC Information Services
                  </h2>
                  <h2 class="font-medium title-font font-hind text-md text-primary mb-1 uppercase tracking-wider">
                    Information Technology Technician
                  </h2>
                  <p class="leading-relaxed font-hind text-md p-3">
                    Worked with department faculty to develop WordPress admin
                    panels and WordPress websites using custom HTML, CSS and
                    jQuery components.
                  </p>
                </div>
              </div>
              <div class="flex relative">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-backdrop inline-flex items-center justify-center text-white relative z-10">
                  <Layers color="#e9f3ff" size={20} />
                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-semibold title-font font-hind text-lg text-tertiary mb-1 uppercase tracking-wider">
                    Cisco Systems Inc.
                  </h2>
                  <h2 class="font-medium title-font font-hind text-md text-primary mb-1 uppercase tracking-wider">
                    Junior/Senior Intern (Fellowship)
                  </h2>
                  <p class="leading-relaxed font-hind text-md p-3">
                    Shadowed Mechanical and Material Engineers on projects that
                    required developing cross platform IT and Network Security
                    solutions using Unix/Linux shell scripting.
                  </p>
                </div>
              </div>
            </div>
            {/* cardSection: skillset breakdown */}
            <div class="mt-16 lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-4 border-tertiary px-4 py-6 shadow-xl rounded-lg">
                    <img
                      class="w-12 h-12 mb-3 inline-block"
                      src="https://bit.ly/3ldTCJj"
                    />
                    <h2 class="title-font font-medium text-xl uppercase text-tertiary">
                      Devkit
                    </h2>
                    <div class="flex flex-items justify-center mt-4 p-2">
                      {iconData.dev &&
                        iconData.dev.map((icon) => {
                          return (
                            <i
                              // class={`devicon-${icon} colored -mx-1 bg-gradient-to-l from-indigo-200 via-red-100 to-yellow-100 shadow-xl rounded-full p-2`}
                              class={`devicon-${icon} colored -mx-1 bg-secondary shadow-xl rounded-full p-2`}
                              style={{ fontSize: 30 }}
                            ></i>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-4 border-tertiary  px-4 py-6 shadow-xl rounded-lg">
                    <img
                      class="w-12 h-12 mb-3 inline-block"
                      src="https://bit.ly/3JkMR0d"
                    />
                    <h2 class="title-font font-medium text-xl text-tertiary">
                      DBs
                    </h2>
                    <div class="flex flex-items justify-center mt-4 p-2">
                      {iconData.db &&
                        iconData.db.map((icon) => {
                          return (
                            <i
                              class={`devicon-${icon} colored -mx-1 bg-secondary shadow-xl rounded-full p-2`}
                              style={{ fontSize: 30 }}
                            ></i>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-4 border-tertiary px-4 py-6 shadow-xl rounded-lg">
                    <img
                      class="w-12 h-12 mb-3 inline-block"
                      src="https://bit.ly/3LtTBeH"
                    />
                    <h2 class="title-font font-medium uppercase text-xl text-tertiary">
                      Design
                    </h2>
                    <div class="flex flex-items justify-center mt-4 p-2">
                      {iconData.design &&
                        iconData.design.map((icon) => {
                          return (
                            <i
                              class={`devicon-${icon} colored -mx-1 bg-secondary shadow-xl rounded-full p-2`}
                              style={{ fontSize: 30 }}
                            ></i>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-4 border-tertiary px-4 py-6 shadow-xl rounded-lg">
                    <img
                      class="w-12 h-12 mb-3 inline-block"
                      src="https://bit.ly/3JHTH07"
                    />
                    <h2 class="title-font font-medium uppercase text-xl text-tertiary">
                      Web
                    </h2>
                    <div class="flex flex-items justify-center mt-4 p-2">
                      {iconData.web &&
                        iconData.web.map((icon) => {
                          return (
                            <i
                              class={`devicon-${icon} colored -mx-1 bg-secondary shadow-xl rounded-full p-2`}
                              style={{ fontSize: 30 }}
                            ></i>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-4 border-tertiary px-4 py-6 shadow-xl rounded-lg">
                    <img
                      class="w-12 h-12 mb-3 inline-block"
                      src="https://bit.ly/3ZRzI5D"
                    />
                    <h2 class="title-font font-medium uppercase text-xl text-tertiary">
                      SDLC
                    </h2>
                    <div class="flex flex-items justify-center mt-4 p-2">
                      {iconData.sdlc &&
                        iconData.sdlc.map((icon) => {
                          return (
                            <i
                              class={`devicon-${icon} colored -mx-1 bg-secondary shadow-xl rounded-full p-2`}
                              style={{ fontSize: 30 }}
                            ></i>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
                  <div class="border-4 border-tertiary px-4 py-6 shadow-xl rounded-lg">
                    <img
                      class="w-12 h-12 mb-3 inline-block"
                      src="http://bit.ly/3LsU5BW"
                    />
                    <h2 class="title-font font-medium uppercase text-xl text-tertiary">
                      BI
                    </h2>
                    <div class="flex flex-items justify-center mt-4 p-2">
                      {iconData.proj &&
                        iconData.proj.map((icon) => {
                          return (
                            <i
                              class={`devicon-${icon} colored -mx-1 bg-secondary shadow-xl rounded-full p-2`}
                              style={{ fontSize: 30 }}
                            ></i>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
