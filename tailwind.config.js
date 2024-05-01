/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homeDesktop: "url('src/HOMEPAGE/assets/bghomedesktop.jpg')",
        homeTablet: "url('src/HOMEPAGE/assets/bghometablet.jpg')",
        homeMobile: "url('src/HOMEPAGE/assets/bghomemobile.jpg')",
        destinationDesktop:
          "url('src/DESTINATION/assets/bgdestinationdesktop.jpg')",
        destinationTablet:
          "url('src/DESTINATION/assets/bgdestinationtablet.jpg')",
        destinationMobile:
          "url('src/DESTINATION/assets/bgdestinationmobile.jpg')",
        crewDesktop: "url('src/CREW/assets/bgcrewdesktop.jpg')",
        crewTablet: "url('src/CREW/assets/bgcrewtablet.jpg')",
        crewMobile: "url('src/CREW/assets/bgcrewmobile.jpg')",
        technologyDesktop: "url('src/TECHNOLOGY/assets/bgtechnologydesktop.jpg')",
        technologyTablet: "url('src/TECHNOLOGY/assets/bgtechnologytablet.jpg')",
        technologyMobile: "url('src/TECHNOLOGY/assets/bgtechnologymobile.jpg')",
      },
    },
    blur: {
      81.55: "81.55px", // Add your custom blur value
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
