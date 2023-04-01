import { GitHub, Twitter, Figma, Dribbble } from 'react-feather';
export default function Footer() {
  return (
    <footer class="bg-footer">
      <div class="max-w-screen-xl px-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div class="flex justify-center mt-8 space-x-6">
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <Figma />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <Dribbble />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <Twitter />
          </a>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <GitHub />
          </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          checkout my design resources
        </p>
        <p class="mt-6 pb-8 text-sm text-gray-400 text-right">
          © 2023 | Jarrett Bonner
        </p>
      </div>
    </footer>
  );
}
