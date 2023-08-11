import Link from "next/link";

function Navigation() {
  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <section className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            About
          </Link>
          </section>
      </nav>
    </>
  );
}

export default Navigation;
