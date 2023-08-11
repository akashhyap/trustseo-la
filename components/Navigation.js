import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <ul className="navigation flex space-x-4 py-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/online-visibility">Online visibility</Link>
        </li>
        <li>
          <Link href="/online-reputation-management">
            Online reputation management
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
