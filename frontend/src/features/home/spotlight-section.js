/**TODO: this component will need to implement some clean code strategies  */

export default function SpotlightSection() {
  return (
    <>
      <section class="text-tertiary body-font">
        <div class="container px-5 pb-24 mt-24 flex flex-wrap">
          <div class="flex flex-col text-right w-full">
            <h2 class="text-sm text-tertiary uppercase font-medium title-font mb-1">
              What have I built?
            </h2>
            <h1 class="sm:text-2xl text-xl font-medium title-font text-primary drop-shadow-md">
              Portfolio Spotlight
            </h1>
          </div>

          {/**portfolio spotlight: 1  */}
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg mt-2 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://bit.ly/3K1IhV8"
              alt="ajc-mockups"
            />
          </div>
          <div class="bg-secondary rounded-lg flex flex-wrap -mx-6 mt-auto mb-auto pl-8 lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 mt-4 text-tertiary border-b-2 border-tertiary">
                Atlanta Journal Constitution & Dawgnation.com
              </h1>
              <div class="leading-relaxed text-tertiary">
                My contributions were quantified through design updates and bug
                patches to the ePaper live service and the main AJC/Dawgnation
                web app. We leveraged AWS's CMS service (ARCxp) to deliver
                content across various platforms, while monitoring for user
                experience and interaction.
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-primary">6.5K</h2>
              <p class="leading-relaxed text-tertiary font-semibold">Ratings</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-primary">22K+</h2>
              <p class="leading-relaxed text-tertiary font-semibold">
                Subscribers
              </p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-primary">
                402K+
              </h2>
              <p class="leading-relaxed text-tertiary font-semibold">
                Downloads
              </p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-primary">4.5</h2>
              <p class="leading-relaxed text-tertiary font-semibold">Stars</p>
            </div>
          </div>

          {/**portfolio spotlight: 2 */}
          <div class="bg-secondary rounded-lg flex flex-wrap text-right -mx-6 mt-24 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <h1 class="title-font font-medium text-xl mb-2 mt-4 text-tertiary border-b-2 border-tertiary">
                REPLI 360 LLC.
              </h1>
              <div class="leading-relaxed text-tertiary">
                I worked collaboratively to build and deploy over 100+ company
                landing pages, multifamily sites and apartment marketing
                campaigns. My responsibilities were inline with creating
                functional interfaces for both community managers and apartment
                residents with a focus on data aggregation and third-party live
                service integration.
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-primary">
                3.2K+
              </h2>
              <p class="leading-relaxed text-tertiary font-semibold">Reviews</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-primary">200+</h2>
              <p class="leading-relaxed text-tertiary font-semibold">
                Properties Managed
              </p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-primary">20+</h2>
              <p class="leading-relaxed text-tertiary font-semibold">
                States Serviced
              </p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-primary">4</h2>
              <p class="leading-relaxed text-tertiary font-semibold">
                Products & Services
              </p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg mt-2 lg:ml-12 sm:ml-0 sm:mt-0">
            <img
              // class="object-cover object-center w-max h-max"
              class="scale-110 ml-4"
              src="http://bit.ly/3KeZrzN"
              alt="repli-mockups"
            />
          </div>
        </div>
      </section>
    </>
  );
}
