import europaimage from "./DESTINATION/assets/europaimage.webp";
import marsimage from "./DESTINATION/assets/marsimage.webp";
import moonimage from "./DESTINATION/assets/moonimage.webp";
import titanimage from "./DESTINATION/assets/titanimage.webp";
import ansariimage from "./CREW/assets/ansariimage.webp";
import markimage from "./CREW/assets/markimage.webp";
import victorimage from "./CREW/assets/victorimage.webp";
import douglasimage from "./CREW/assets/douglasimage.webp";
import launchvehiclelandscape from "./TECHNOLOGY/assets/launchvehiclelandscape.jpg";
import spaceportlandscape from "./TECHNOLOGY/assets/spaceportlandscape.jpg";
import spacecapsulelandscape from "./TECHNOLOGY/assets/launchvehiclelandscape.jpg";
import launchvehicleportrait from "./TECHNOLOGY/assets/launchvehicleportrait.jpg";
import spaceportportrait from "./TECHNOLOGY/assets/spaceportportrait.jpg";
import spacecapsuleportrait from "./TECHNOLOGY/assets/spacecapsuleportrait.jpg";



export const navLink = [
  {
    name: "home",
    number: "00",
    link: "/",
  },
  {
    name: "destination",
    number: "01",
    link: "/destination",
  },
  {
    name: "crew",
    number: "02",
    link: "/crew",
  },
  {
    name: "technology",
    number: "03",
    link: "/technology",
  },
];
export const destinations = [
  {
    name: "Moon",
    image: moonimage,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: marsimage,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: europaimage,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: titanimage,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
export const crew = [
  {
    name: "Douglas Hurley",
    image: douglasimage,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: markimage,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    image: victorimage,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    image: ansariimage,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

export const technology = [
  {
    name: "Launch vehicle",
    images: {
      portrait: launchvehicleportrait,
      landscape: launchvehiclelandscape
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: spaceportportrait,
      landscape: spaceportlandscape
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: spacecapsuleportrait,
      landscape: spacecapsulelandscape
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
