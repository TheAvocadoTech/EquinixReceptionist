const iconClasses = "h-6 w-6 ";

const routes = [
  {
    path: "/app/dashboard",
    icon: (
      <svg
        className={iconClasses}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_48_1093)">
          <path
            d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 17.9902V14.9902"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
    name: "Dashboard",
  },
  {
    path: "/app/companies",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path
          d="M21 22.75H3C2.59 22.75 2.25 22.41 2.25 22V6C2.25 2.98 3.98 1.25 7 1.25H17C20.02 1.25 21.75 2.98 21.75 6V22C21.75 22.41 21.41 22.75 21 22.75ZM3.75 21.25H20.25V6C20.25 3.78 19.22 2.75 17 2.75H7C4.78 2.75 3.75 3.78 3.75 6V21.25Z"
          fill="currentColor"
          opacity="0.6"
        />
        <path d="M10 17.25H7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 17.25H14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12.75H7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 12.75H14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8.25H7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 8.25H14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    name: "Companies",
  },
  {
    path: "/app/visitor",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_48_1058)">
          <g>
            <path
              d="M17.9998 7.90977C17.9698 7.90977 17.9498 7.90977 17.9198 7.90977H17.8698C15.9798 7.84977 14.5698 6.38977 14.5698 4.58977C14.5698 2.74977 16.0698 1.25977 17.8998 1.25977C19.7298 1.25977 21.2298 2.75977 21.2298 4.58977C21.2198 6.39977 19.8098 7.85977 18.0098 7.91977Z"
              opacity="0.6"
            />
            <path
              d="M18.01 15.2797C17.62 15.2797 17.23 15.2497 16.84 15.1797C16.43 15.1097 16.16 14.7197 16.23 14.3097C16.3 13.8997 16.69 13.6297 17.1 13.6997C18.33 13.9097 19.63 13.6797 20.5 13.0997C20.97 12.7897 21.22 12.3997 21.22 12.0097C21.22 11.6197 20.96 11.2397 20.5 10.9297C19.63 10.3497 18.31 10.1197 17.07 10.3397C16.66 10.4197 16.27 10.1397 16.2 9.72966C16.13 9.31966 16.4 8.92966 16.81 8.85966Z"
              opacity="0.6"
            />
            <path
              d="M5.96998 7.91C5.95998 7.91 5.94998 7.91 5.94998 7.91C4.14998 7.85 2.73998 6.39 2.72998 4.59C2.72998 2.75 4.22998 1.25 6.05998 1.25C7.88998 1.25 9.38998 2.75 9.38998 4.58C9.38998 6.39 7.97998 7.85 6.17998 7.91Z"
              opacity="0.6"
            />
            <path
              d="M5.96 15.2797C4.73 15.2797 3.55 14.9497 2.64 14.3497C1.76 13.7597 1.25 12.9097 1.25 12.0097C1.25 11.1197 1.76 10.2697 2.64 9.67965C3.84 8.87965 5.53 8.56966 7.16 8.85966C7.57 8.92966 7.84 9.31966 7.77 9.72966C7.7 10.1397 7.31 10.4197 6.9 10.3397Z"
              opacity="0.6"
            />
            <path
              d="M11.9998 15.3805C11.9698 15.3805 11.9498 15.3805 11.9198 15.3805H11.8698C9.97982 15.3205 8.56982 13.8605 8.56982 12.0605C8.56982 10.2205 10.0698 8.73047 11.8998 8.73047C13.7298 8.73047 15.2298 10.2305 15.2298 12.0605Z"
              opacity="0.6"
            />
            <path
              d="M11.9998 22.7597C10.7998 22.7597 9.59978 22.4497 8.66978 21.8197C7.78978 21.2297 7.27979 20.3897 7.27979 19.4897C7.27979 18.5997 7.77978 17.7397 8.66978 17.1497C10.5398 15.9097 13.4698 15.9097 15.3298 17.1497Z"
              opacity="0.6"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_48_1058">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Visitor",
  },
  {
    path: "/app/idmanagment",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
          opacity="0.6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 8H19"
          opacity="0.6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12H19"
          opacity="0.6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 16H19"
          opacity="0.6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.49994 11.2899C9.49958 11.2899 10.3099 10.4796 10.3099 9.47992C10.3099 8.48029 9.49958 7.66992 8.49994 7.66992C7.50031 7.66992 6.68994 8.48029 6.68994 9.47992C6.68994 10.4796 7.50031 11.2899 8.49994 11.2899Z"
          opacity="0.6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.3298C11.86 14.8798 10.71 13.7398 9.26 13.6098C8.76 13.5598 8.25 13.5598 7.74 13.6098C6.29 13.7498 5.14 14.8798 5 16.3298"
          opacity="0.6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "ID Management",
  },
  // {
  //   path: "", //no url needed as this has submenu
  //   icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
  //   name: "Settings", // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: "/app/settings-profile", //url
  //       icon: <UserIcon className={submenuIconClasses} />, // icon component
  //       name: "Profile", // name that appear in Sidebar
  //     },
  //     {
  //       path: "/app/settings-billing",
  //       icon: <WalletIcon className={submenuIconClasses} />,
  //       name: "Billing",
  //     },
  //     {
  //       path: "/app/settings-team", // url
  //       icon: <UsersIcon className={submenuIconClasses} />, // icon component
  //       name: "Team Members", // name that appear in Sidebar
  //     },
  //   ],
  // },
  // {
  //   path: "", //no url needed as this has submenu
  //   icon: <DocumentTextIcon className={`${iconClasses} inline`} />, // icon component
  //   name: "Documentation", // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: "/app/getting-started", // url
  //       icon: <DocumentTextIcon className={submenuIconClasses} />, // icon component
  //       name: "Getting Started", // name that appear in Sidebar
  //     },
  //     {
  //       path: "/app/features",
  //       icon: <TableCellsIcon className={submenuIconClasses} />,
  //       name: "Features",
  //     },
  //     {
  //       path: "/app/components",
  //       icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
  //       name: "Components",
  //     },
  //   ],
  // },
];

export default routes;
