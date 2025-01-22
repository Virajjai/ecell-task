import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link
              to="/home"
              className="text-white-700 hover:text-white-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-white-700 hover:text-white-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Grid
            </Link>
            <a
              href="https://www.linkedin.com/in/virajjaiswal72/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-700 hover:text-white-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;