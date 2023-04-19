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
              class="border-4 border-primary rounded-full lg:w-24 md:w-3/6 w-3/6 mb-10 object-cover object-center"
              alt="accent-hero"
              src="http://bit.ly/3YPNSDd"
            />
          </div>

          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-sm text-primary uppercase tracking-widest font-medium title-font mb-1">
              finding mediums in a world full of extremes
            </h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-tertiary drop-shadow-md">
              Developing Better, Empowering Community
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center drop-shadow-md justify-center rounded-full bg-backdrop text-white flex-shrink-0">
                    <Coffee size={20} />
                  </div>
                  <h2 class="text-tertiary text-lg title-font font-medium">
                    Software Developer
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Changing the digital landscape of our future one web-app at
                    a time. I have contributed to projects in the help-desk
                    space, inventory and account management, and data protection
                    and content management industries.
                  </p>
                  <a class="mt-3 text-sm font-semibold text-tertiary inline-flex items-center">
                    My Projects
                    <Cpu color="#93a9a4" size={20} class="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center drop-shadow-md justify-center rounded-full bg-backdrop text-white flex-shrink-0">
                    <PenTool size={20} />
                  </div>
                  <h2 class="text-tertiary text-lg title-font font-medium">
                    Technical Writer
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    Currently taking the time to analyze my development and
                    design descisions by writing tech focused articles and
                    guides for improving the software development process.
                  </p>
                  <a
                    href="/blog"
                    class="mt-3 font-semibold text-sm text-tertiary inline-flex items-center"
                  >
                    Read More
                    <Bookmark color="#93a9a4" size={20} class="ml-1" />
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center drop-shadow-md justify-center rounded-full bg-backdrop text-white flex-shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <h2 class="text-tertiary text-lg title-font font-medium">
                    Community Builder
                  </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">
                    I'm deploying web technology focused solutions that foster
                    community around interesting data. Hoping to pass along
                    products, services and shareable knowledge to a community of
                    developers that build/create.
                  </p>
                  <a class="mt-3 text-sm font-semibold text-tertiary inline-flex items-center">
                    Contact Me
                    <MessageCircle color="#93a9a4" size={20} class="ml-1" />
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
