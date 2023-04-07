export default function Navbar(){
    return(
              <nav
        className="relative flex w-full flex-nowrap items-center justify-between bg-cyan-50 py-4 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <button
            className="block border-0 bg-transparent px-2.5 py-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent3"
            aria-controls="navbarSupportedContent3"
            aria-expanded="false"
            aria-label="Toggle navigation">
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-7 w-7">
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd" />
              </svg>
            </span>
          </button>

          {/* Collapsible navbar container */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-te-collapse-item>
            {/* Navbar title */}
            <a className="text-2xl text-black" href="#">Logo</a>
            {/* Left links */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref>
              {/* Home link */}
              <li className="lg:px-2" data-te-nav-item-ref>
                <a
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400 text-xl"
                  aria-current="page"
                  href="#"
                  data-te-nav-link-ref
                  >Home</a>
              </li>
              {/* Features link */}
              <li className="lg:pr-2" data-te-nav-item-ref>
                <a
                  className="p-0 text-blue-950 hover:text-green-600 focus:text-lime-300 lg:px-2 [&.active]:text-red-500 text-xl"
                  href="#"
                  data-te-nav-link-ref
                  >About</a>
              </li>
              {/* Pricing link */}
              <li className="lg:pr-2" data-te-nav-item-ref>
                <a
                  className="p-0 text-blue-950 hover:text-green-600 focus:text-lime-300 lg:px-2 [&.active]:text-red-500 text-xl"
                  href="#"
                  data-te-nav-link-ref
                  >Destination</a
                >
              </li>
              {/* Disabled link */}
              <li className="lg:pr-2" data-te-nav-link-ref>
                <a
                  className="p-0 text-blue-950 hover:text-green-600 focus:text-lime-300 lg:px-2 [&.active]:text-red-500 text-xl"
                  >Tour</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}