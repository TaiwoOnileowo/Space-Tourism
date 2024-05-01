/** @type {import('tailwindcss').Config} */
export default {
  content: [".index.html", ".src***.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeDesktop: 'url("bghomedesktop.jpg")',
        homeTablet: "url('bghometablet.jpg')",
        homeMobile: "url('bghomemobile.jpg')",
        destinationDesktop: "url('bgdestinationdesktop.jpg')",
        destinationTablet: "url('bgdestinationtablet.jpg')",
        destinationMobile: "url('bgdestinationmobile.jpg')",
        crewDesktop: "url('bgcrewdesktop.jpg')",
        crewTablet: "url('bgcrewtablet.jpg')",
        crewMobile: "url('bgcrewmobile.jpg')",
        technologyDesktop: "url('bgtechnologydesktop.jpg')",
        technologyTablet: "url('bgtechnologytablet.jpg')",
        technologyMobile: "url('bgtechnologymobile.jpg')",
      },
    },
    blur: {
      81.55: "81.55px",
    },
    screens: {
      ip: "200px",
      xs: "250px",
      ss: "400px",
      ts: "600px",
      sm: "700px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
