/**TODO: different nav design for the rework  */

export default function Intro() {
  return (
    <section className="flex flex-col items-center md:flex-row md:justify-between md:mb-12">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div class="lg:w-2/5 inline-flex ml-0 lg:justify-end"></div>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <h1 className="text-4xl font-bold leading-tight tracking-tighter text-transparent font-hind drop-shadow-lg md:text-8xl bg-clip-text bg-gradient-to-br from-backdrop to-cyan">
            jzb.io
          </h1>
        </a>
        <div class="lg:w-2/5 inline-flex ml-0 lg:justify-end"></div>
      </div>
    </section>
  );
}
