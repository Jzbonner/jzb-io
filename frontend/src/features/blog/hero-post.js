export default function HeroPost({
  title,
  coverImage,
  excerpt,
  author,
  slug,
}) {
  return (
    <section class="text-footer body-font">
      <div class="container px-9 py-12 mb-4 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden shadow-xl">
            <img
              alt="content"
              class="object-cover object-left h-full w-full rounded-lg"
              src={coverImage.url}
            />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                <img src={author.picture.url} class="rounded-xl shadow-xl" />
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-lg">
                  {author && <p class="text-footer">{author.name}</p>}
                </h2>
                <div class="w-12 h-1 bg-tertiary rounded mt-2 mb-4"></div>
                <p class="text-base text-tertiary">
                  Software Developer and Web Application Designer
                </p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-tertiary sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <h3 class="mt-8 mb-4 text-4xl lg:text-6xl leading-tight font-hind font-thin text-footer text-center">
                {title}
              </h3>
              <p class="leading-relaxed text-lg mb-4">{excerpt}</p>
              <a
                href={`/posts/${slug}`}
                class="text-tertiary inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
