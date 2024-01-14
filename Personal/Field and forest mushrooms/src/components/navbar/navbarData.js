export const navItems = [
  {
    id: 1,
    title: "aboutLink",
    path: "#about",
    cName: "nav-text-link",
  },
  {
    id: 2,
    title: "galleryLink",
    path: "#gallery",
    cName: "nav-text-link",
  },
  {
    id: 3,
    title: "folkloreLink",
    path: "#folklore",
    cName: "nav-text-link",
  },
  {
    id: 4,
    title: "informationLink",
    path: "#information",
    cName: "nav-text-link",
    children: [
      {
        id: 1,
        title: "whereMushroomsGrow",
        path: "/whereMushroomsGrow",
        cName: "submenu-item",
      },
      {
        id: 2,
        title: "TasteAndSmellInMushrooms",
        path: "/TasteAndSmellInMushrooms",
        cName: "submenu-item",
      },
      {
        id: 3,
        title: "structureAndTerms",
        path: "/structureAndTerms",
        cName: "submenu-item",
      },
    ],
  },
  {
    id: 5,
    title: "contactLink",
    path: "#contact",
    cName: "nav-text-link",
  },
];
