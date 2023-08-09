import {
  Coffee,
  PenTool,
  Briefcase,
  Bookmark,
  Cpu,
  MessageCircle,
} from 'react-feather';

export default function IntroSection() {
  return (
    <>
      <section class="text-gray-600 body-font mb-4">
        <div class="container px-5 py-1 mb-8 mx-auto">
          <div class="flex items-center justify-center flex-col ">
            <img
              class="border-4 border-footer rounded-full lg:w-24 md:w-3/6 w-3/6 mb-10 object-cover object-center"
              alt="accent-hero"
              src="http://bit.ly/3YPNSDd"
            />
          </div>

          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-sm text-footer uppercase font-hind tracking-widest font-medium title-font mb-1">
              finding mediums in a world full of extremes
            </h2>
            <h1 class="sm:text-3xl text-2xl font-hind font-medium title-font text-tertiary drop-shadow-md">
              Developing Better, Empowering Community
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-2xl h-full transition duration-300 bg-adjusted bg-opacity-70 border-4 border-tertiary p-8 flex-col hover:shadow-xl">
                <div class="flex items-center mb-3 border-b-2 border-tertiary pb-4">
                  <div class="w-12 h-12 mr-3 inline-flex items-center drop-shadow-lg border-8 border-accent justify-center rounded-full text-white flex-shrink-0">
                    <Coffee size={20} />
                  </div>
                  <h2 class="text-tertiary text-2xl title-font font-hind font-medium">
                    Software Developer
                  </h2>
                </div>
                <div class="flex-grow flow-root">
                  <p class="leading-relaxed text-sm font-hind text-tertiary">
                    Changing the digital landscape of our future one web-app at
                    a time. I have contributed to projects in the help-desk
                    space, inventory and account management, and data protection
                    and content management industries.
                  </p>
                  <a
                    href="#projects"
                    class="float-right mt-3 text-sm text-end font-hind text-footer inline-flex items-center justify-items-end"
                  >
                    My Projects
                    <Cpu color="#585858" size={20} class="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-2xl h-full transition duration-300  bg-adjusted bg-opacity-70 border-4 border-tertiary bg-bottom p-8 flex-col hover:shadow-xl">
                <div class="flex items-center mb-3 border-b-2 border-tertiary pb-4">
                  <div class="w-12 h-12 mr-3 inline-flex items-center drop-shadow-lg border-8 border-accent justify-center rounded-full text-white flex-shrink-0">
                    <PenTool size={20} />
                  </div>
                  <h2 class="text-tertiary text-2xl title-font font-hind font-medium">
                    Technical Writer
                  </h2>
                </div>
                <div class="flex-grow flow-root">
                  <p class="leading-relaxed font-hind text-sm text-tertiary">
                    Currently taking the time to analyze my development and
                    design descisions by writing tech focused articles and
                    guides for improving the software development process and
                    contributing to our evergrowing digital landscape.
                  </p>
                  <a
                    href="/blog"
                    class="float-right mt-3 font-hind text-sm text-footer inline-flex items-center"
                  >
                    Read More
                    <Bookmark color="#585858" size={20} class="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-2xl h-full transition duration-300 bg-adjusted bg-opacity-70 border-4 border-tertiary p-8 flex-col hover:shadow-xl">
                <div class="flex items-center mb-3 border-b-2 border-tertiary pb-4">
                  <div class="w-12 h-12 mr-3 inline-flex items-center drop-shadow-lg border-8 border-accent justify-center rounded-full text-white flex-shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <h2 class="text-tertiary text-2xl title-font font-hind font-medium">
                    Community Builder
                  </h2>
                </div>
                <div class="flex-grow flow-root">
                  <p class="leading-relaxed font-hind text-sm text-tertiary">
                    I'm deploying web technology focused solutions that foster
                    community around interesting data. Hoping to pass along
                    products, services and shareable knowledge to a community of
                    developers that build/create.
                  </p>
                  <a
                    href="#footer"
                    class="float-right mt-3 text-sm font-hind text-primary inline-flex items-center"
                  >
                    Contact Me
                    <MessageCircle color="#585858" size={20} class="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
