import Link from "next/link";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";

// Define the Footer component.
const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        {/* Display the copyright notice with dynamic years and owner name. */}
        &copy; {new Date().getFullYear()} <b>Dr. Nirmala C R</b> |
        All rights reserved |{" "}
        <Link
          href={EXTRA_LINKS.source_code}
          className="font-semibold"
          target="_blank"
          rel="noreferrer noopener"
          title="View Source Code on GitHub"
        >
          View Source Code
        </Link>
      </small>
      <p className="text-xs">
        {/* Provide information about the website and the technologies used. */}
      </p>
    </footer>
  );
};

// Export the Footer component.
export default Footer;
