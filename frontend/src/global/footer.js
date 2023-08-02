import { GitHub, Twitter, Figma, Dribbble, Linkedin } from 'react-feather';
export default function Footer() {
  return (
    <footer id="footer" class="bg-footer">
      <div class="max-w-screen-xl px-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div class="flex justify-center mt-8 space-x-6">
          <a href="https://www.figma.com/@jzbonner" class="text-gray-400 hover:text-gray-500">
            <Figma />
          </a>
          <a href="https://dribbble.com/Jzbonner" class="text-gray-400 hover:text-gray-500">
            <Dribbble />
          </a>
          <a href="https://twitter.com/jzb_dev" class="text-gray-400 hover:text-gray-500">
            <Twitter />
          </a>
          <a href="https://github.com/Jzbonner" class="text-gray-400 hover:text-gray-500">
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/jarrett-bonner/" class="text-gray-400 hover:text-gray-500">
            <Linkedin />
          </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          checkout my design & dev resources
        </p>
        <p class="mt-6 pb-8 text-sm text-gray-400 text-right">
          © 2023 | Jarrett Bonner
        </p>
      </div>
    </footer>
  );
}
