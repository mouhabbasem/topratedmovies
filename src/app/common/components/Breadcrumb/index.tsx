'use client';
import { useRouter } from 'next/navigation';

interface Route {
  route: string;
  label: string;
}

interface BreadcrumbProps {
  routes: Route[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ routes }) => {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {routes.map((route, index) => (
          <li className="flex items-center" key={index}>
            {index !== routes.length - 1 ? (
              <span
                className="text-blue-300 hover:text-blue-500 focus:outline-none cursor-pointer"
                aria-hidden
                onClick={() => handleClick(route.route)}
              >
                {route.label}
              </span>
            ) : (
              <span className="text-gray-400">{route.label}</span>
            )}
            {index !== routes.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mx-1 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
