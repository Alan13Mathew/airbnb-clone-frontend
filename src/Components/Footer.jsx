export default function Footer() {
  const footerLinks = {
    support: {
      title: "Support",
      links: [
        "Help Center",
        "Travl Cover",
        "Safety information",
        "Supporting people with disabilities",
        "Cancellation options",
      ],
    },
    community: {
      title: "Community",
      links: [
        "Travel World: disaster relief",
        "Combat discrimination",
        "Invite friends",
      ],
    },
    hosting: {
      title: "Hosting",
      links: [
        "Airbnb your home",
        "AirCover for Hosts",
        "Hosting resources",
        "Community forum",
      ],
    },
    travelWorld: {
      title: "Travel World",
      links: ["Newsroom", "New features", "Careers", "Investors", "Gift cards"],
    },
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 sm:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <span className="text-gray-600">© 2024 TwA, Inc.</span>
              <span className="text-gray-600">·</span>
              <a href="#" className="text-gray-600 hover:underline">
                Privacy
              </a>
              <span className="text-gray-600">·</span>
              <a href="#" className="text-gray-600 hover:underline">
                Terms
              </a>
              <span className="text-gray-600">·</span>
              <a href="#" className="text-gray-600 hover:underline">
                Sitemap
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span className="text-gray-600">India (IN)</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">₹</span>
                <span className="text-gray-600">INR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
