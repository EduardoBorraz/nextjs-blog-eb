import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-white ">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-blue-900">
            <h1 className="text-neutral-50">EB</h1>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <a rel="noopener noreferrer" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <Link href="#">Instagram</Link>
          </li>
          <li>
            <Link href="#">Facebook</Link>
          </li>
          <li>
            <Link href="#">Github</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
