import { BoardMember } from '@/types/board';

/**
 * Board Data
 *
 * Members of the MEGA board grouped into three tiers, each rendered as its own
 * carousel row in the "Meet Our Board" section:
 *   • highBoard        – leadership team
 *   • nonTechnicalBoard – non-technical circles (HR, PR, Media, R&D, PM, EO)
 *   • technicalBoard    – technical circles (Frontend, Backend, UI/UX, Business, CS, DataScience, Flutter)
 *
 * Ordering rules:
 *   • High board: Omar Magdy → Eman Salem → Abdullah Salama → Mahmoud Yasser
 *   • Non-technical & technical: grouped by circle in the order above, and within
 *     each circle the Head/Mentor comes first, followed by their Vices/Supervisors.
 *
 * Image paths point to files inside /public/Board photos.
 * Each member links to their LinkedIn profile via the `linkedin` field.
 */

/** Leadership team (fixed display order). */
export const highBoard: BoardMember[] = [

  {
    id: "high-Bashayer Khalifa",
    name: "Bashayer Khalifa",
    position: "Vice Leader",
    image: "/Board photos/High board/Vice Leader - Bashayer khalefa_.jpg",
    linkedin: "https://www.linkedin.com/in/eman-salem-9794b5295/",
  },
  {
    id: "high-Ahmed Youssef",
    name: "Ahmed Youssef",
    position: "Leader",
    image: "/Board photos/Non-Tech/PR/Vice PR - Ahmed Youssef.jpeg",
    linkedin: "https://www.linkedin.com/in/omar-magdy-86b19b2b2/",
  },
  {
    id: "high-Malk Salem",
    name: "Malk Salem",
    position: "Vice Leader",
    image: "/Board photos/High board/Vice Leader - Malak sleem .jpg",
    linkedin: "https://www.linkedin.com/in/malk-elsayed-b0a1a7375/",
  },
];
/** Technical Managers — . */
export const technicalManagers: BoardMember[] = [
  {
    id: "tm-ahmed-aldosoqi",
    name: "Ahmed Aldosoqi",
    position: "Technical Manager",
    image: "/Board photos/Technical Managers/Head TM - Ahmed Aldosoqi .jpg",
    linkedin: "https://www.linkedin.com/in/THEIR_LINKEDIN/",
  },
  {
    id: "tm-farah-mahmoud",
    name: "Farah Mahmoud",
    position: "Vice Technical Manager",
    image: "/Board photos/Technical Managers/Vice TM - Farah Mahmoud .jpg",
    linkedin: "https://www.linkedin.com/in/THEIR_LINKEDIN/",
  },
  {
    id: "tm-abdullah-ahmed",
    name: "Abdullah Ahmed",
    position: "Vice Technical Manager",
    image: "/Board photos/Technical Managers/Vice TM - Abdullah Ahmed .jpg",
    linkedin: "https://www.linkedin.com/in/THEIR_LINKEDIN/",
  },
];
/** Non-technical board — circles ordered: HR, PR, Media, R&D, PM, EO. */
export const nonTechnicalBoard: BoardMember[] = [
  // HR
  {
    id: "hr-banan-magdy",
    name: "Banan Magdy",
    position: "HR Head",
    image: "/Board photos/Non-Tech/HR/Head HR - Banan magdy.jpg",
    linkedin: "https://www.linkedin.com/in/mariam-rashad/",
  },
  {
    id: "hr-rodina-khaled",
    name: "Rodina Khaled",
    position: "HR Vice",
    image: "/Board photos/Non-Tech/HR/Vice HR - Rodina Khaled .jpg",
    linkedin: "https://www.linkedin.com/in/amira-mahmoud-annaggar/",
  },
  {
    id: "hr-mariam-ibrahim",
    name: "Mariam Ibrahim",
    position: "HR Vice",
    image: "/Board photos/Non-Tech/HR/Vice HR - Mariam Ibrahim_.jpg",
    linkedin: "https://www.linkedin.com/in/shahd-orapy-76451a341/",
  },
  {
    id: "hr-eman-abdullah",
    name: "Eman Abdullah",
    position: "HR Vice",
    image: "/Board photos/Non-Tech/HR/Vice HR - Eman Abdullah .jpg",
    linkedin: "https://www.linkedin.com/in/shahd-orapy-76451a341/",
  },
  // PR
  {
    id: "pr-zainab-ibrahim",
    name: "Zainab Ibrahim",
    position: "PR Head",
    image: "/Board photos/Non-Tech/PR/Head PR - Zainab Ibrahim.png",
    linkedin: "https://www.linkedin.com/in/farah-mahmoud-b67530336/",
  },
  {
    id: "pr-jana-tarek",
    name: "Jana Tarek",
    position: "PR Vice",
    image: "/Board photos/Non-Tech/PR/Vice PR - Jana tarek.jpg",
    linkedin: "https://www.linkedin.com/in/ahmed-yusef-b383bb336/",
  },
  {
    id: "pr-walaa-ghazy",
    name: "Walaa Ghazy",
    position: "PR Vice",
    image: "/Board photos/Non-Tech/PR/Vice PR - Walaa Ghazy.jpg",
    linkedin: "https://www.linkedin.com/in/toqa-shamaa-102533336/",
  },
  // Media
  {
    id: "media-maden-ahmed",
    name: "Maden Ahmed",
    position: "Media Head",
    image: "/Board photos/Non-Tech/Media/Head Media - Maden Ahmed .jpg",
    linkedin: "https://www.linkedin.com/in/ammar-yasser-36664233b/",
  },
  {
    id: "media-mohamed-elsead",
    name: "Mohamed elsead",
    position: "Media Vice",
    image: "/Board photos/Non-Tech/Media/Vice Media -Mohamed elsead .jpg",
    linkedin: "https://www.linkedin.com/in/bashayer-khalefa-72b41533b/",
  },
  {
    id: "media-roqia-elsaeed",
    name: "Roqia Elsaeed",
    position: "Media Vice",
    image: "/Board photos/Non-Tech/Media/Vice Media - Roqia Elsaeed .jpg",
    linkedin: "https://www.linkedin.com/in/bashayer-khalefa-72b41533b/",
  },
  {
    id: "media-alaa-eldesoky",
    name: "Alaa eldesoky",
    position: "Media Vice",
    image: "/Board photos/Non-Tech/Media/Vice Media - Alaa eldesoky .jpg",
    linkedin: "https://www.linkedin.com/in/bashayer-khalefa-72b41533b/",
  },
  // R&D
  {
    id: "rd-ahmed-elenany",
    name: "Ahmed Elenany",
    position: "R&D Head",
    image: "/Board photos/Non-Tech/R&D/Head R&D - Ahmed Elenany .jpg",
    linkedin: "https://www.linkedin.com/in/alia-harb-ba660133b/",
  },
  {
    id: "rd-abdelrahman-hesham",
    name: "Abdelrahman Hesham",
    position: "R&D Vice",
    image: "/Board photos/Non-Tech/R&D/Vice R&D - Abdelrahman Hesham .jpeg",
    linkedin: "https://www.linkedin.com/in/ahmed-aldosoqi-a2220833b/",
  },
  {
    id: "rd-jad-mohamed",
    name: "Jad Mohamed",
    position: "R&D Vice",
    image: "/Board photos/Non-Tech/R&D/Vice R&D - Jad Mohamed .jpg",
    linkedin: "https://www.linkedin.com/in/shams-mohammed-085570330/",
  },
  // PM
  {
    id: "pm-mohamed-hazem",
    name: "Mohamed Hazem",
    position: "PM Head",
    image: "/Board photos/Non-Tech/PM/Head PM - Mohamed Hazem.jpg",
    linkedin: "https://www.linkedin.com/in/mariam-salem-uix/",
  },
  {
    id: "pm-nora-ahmed",
    name: "Nora Ahmed",
    position: "PM Vice",
    image: "/Board photos/Non-Tech/PM/Vice PM - Nora Ahmed .jpg",
    linkedin: "https://www.linkedin.com/in/islam-mohamed-5562472b2/",
  },
  {
    id: "pm-menna-ibrahim",
    name: "Menna Ibrahim",
    position: "PM Vice",
    image: "/Board photos/Non-Tech/PM/Vice PM - Menna Ibrahim .JPG",
    linkedin: "https://www.linkedin.com/in/mennadahab/",
  },
  // EO
  {
    id: "eo-hossam-mahmoud",
    name: "Hossam Mahmoud",
    position: "EO Head",
    image: "/Board photos/Non-Tech/EO/Head EO - Hossam Mahmoud .jpg",
    linkedin: "https://www.linkedin.com/in/fares-alrafey-97094433b/",
  },
  {
    id: "eo-mariam-hassan",
    name: "Mariam Hassan",
    position: "EO Vice",
    image: "/Board photos/Non-Tech/EO/Vice EO - Mariam Hassan.jpg",
    linkedin: "https://www.linkedin.com/in/malk-alsayed-b0a1a7375/",
  },
  {
    id: "eo-ossama-mohamed",
    name: "Ossama Mohamed",
    position: "EO Vice",
    image: "/Board photos/Non-Tech/EO/Vice EO - Ossama Mohamed.jpg",
    linkedin: "https://www.linkedin.com/in/mohamed-emad-954769377",
  },
];

/** Technical board — circles ordered: Frontend, Backend, UI/UX, Business, CS, DataScience, Flutter. */
export const technicalBoard: BoardMember[] = [
  // Frontend
  {
    id: "frontend-abdalrahman-maroof",
    name: "Abdulrahman Marouf",
    position: "Frontend Mentor",
    image: "/Board photos/Tech/Frontend/Frontend Mentor - Abdulrahman marouf.jpg",
    linkedin: "https://www.linkedin.com/in/mahmoud-ramadan21/",
  },
  {
    id: "frontend-ali-ibrahim",
    name: "Ali Ibrahim",
    position: "Frontend Co Mentor",
    image: "/Board photos/Tech/Frontend/Frontend Co Mentor - Ali Ibrahim front .jpg",
    linkedin: "https://www.linkedin.com/in/sarah-essam-175018377/",
  },
  {
    id: "frontend-loai-wael",
    name: "Loai Wael",
    position: "Frontend Co Mentor",
    image: "/Board photos/Tech/Frontend/Frontend Co Mentor - Loai wael .jpg",
    linkedin: "https://www.linkedin.com/in/abdelrahman-ma3rouf/",
  },
  // Backend
  {
    id: "backend-alia-harb",
    name: "Alia Harb",
    position: "Backend Mentor",
    image: "/Board photos/Tech/Backend/Backend Mentor - Alia harb .jpg",
    linkedin: "https://www.linkedin.com/in/a7medmo25/?locale=en",
  },
  {
    id: "backend-islam- Khaled",
    name: "Islam Khaled",
    position: "Backend Co Mentor",
    image: "/Board photos/Tech/Backend/BackendCo Mentor - Islam Khaled .jpg",
    linkedin: "https://www.linkedin.com/in/mostafa-labib-0xfff/",
  },
  {
    id: "backend-rawda-abdelgalil",
    name: "Rawda Abdelgalil",
    position: "Backend Co Mentor",
    image: "/Board photos/Tech/Backend/BackendCo Mentor - Rawda Abdelgalila.jpg",
    linkedin: "https://www.linkedin.com/in/mostafa-labib-0xfff/",
  },
  // UI/UX
  {
    id: "uiux-hossam-shehata",
    name: "Hossam Shehata",
    position: "UI/UX Mentor",
    image: "/Board photos/Tech/UI-UX/UIUX Mentor Hossam Shehata.jpg",
    linkedin: "https://www.linkedin.com/in/ranim-tamer-uix/",
  },
  {
    id: "uiux-ahmed-khedr",
    name: "Ahmed Khedr",
    position: "UI/UX Co Mentor",
    image: "/Board photos/Tech/UI-UX/UIUX Mentor Ahmed khedr .jpg",
    linkedin: "https://www.linkedin.com/in/ranim-tamer-uix/",
  },
  {
    id: "uiux-youmna-khaled",
    name: "Youmna Khaled",
    position: "UI/UX Co Mentor",
    image: "/Board photos/Tech/UI-UX/UIUX Co Mentor Youmna Khaled.jpeg",
    linkedin: "https://www.linkedin.com/in/ranim-tamer-uix/",
  },
  // Business
  {
    id: "business-seif-elboghdady",
    name: "Seif Elboghdady",
    position: "Business Mentor",
    image: "/Board photos/Tech/Business/Business Mentor Seif elboghdady .jpg",
    linkedin: "https://www.linkedin.com/in/salma-shaheen-9a5b84231/",
  },

  // CS
  {
    id: "cs-hasan-atwah",
    name: "Hasan Atwah",
    position: "CS Mentor",
    image: "/Board photos/Tech/CS/CS Mentor Hasan atwah .jpg",
    linkedin: "https://www.linkedin.com/in/manar-elhabbal7/",
  }, {
    id: "cs-hanin-sakr",
    name: "Hanin Sakr",
    position: "CS Co Mentor",
    image: "/Board photos/Tech/CS/CS Co Mentor Hanin sakr .jpg",
    linkedin: "https://www.linkedin.com/in/manar-elhabbal7/",
  },
  // DataScience
  {
    id: "ds-ibrahim-fekry",
    name: "Ibrahim Fekry",
    position: "Data Science Mentor",
    image: "/Board photos/Tech/DataScience/DS Mentor Ibrahim fekry data .png",
    linkedin: "https://www.linkedin.com/in/nourhan-tarek-7994a32bb/",
  },
  {
    id: "ds-rokaia-rezk",
    name: "Rokaia Rezk",
    position: "Data Science Co Mentor",
    image: "/Board photos/Tech/DataScience/DS Co Mentor Rokaia rezk .jpg",
    linkedin: "https://www.linkedin.com/in/nourhan-tarek-7994a32bb/",
  },
  {
    id: "ds-mohamed-tamer",
    name: "Mohamed Tamer",
    position: "Data Science Co Mentor",
    image: "/Board photos/Tech/DataScience/DS Co Mentor Mohamed tamer .jpg",
    linkedin: "https://www.linkedin.com/in/nourhan-tarek-7994a32bb/",
  },
  // Flutter
  {
    id: "flutter-abdallah-yasser",
    name: "Abdallah Yasser",
    position: "Flutter Mentor",
    image: "/Board photos/Tech/Flutter/Flutter Mentor Abdallah Yasser .jpg",
    linkedin: "https://www.linkedin.com/in/romisaafadel/",
  },
  {
    id: "flutter-toqa-shamaa",
    name: "Toqa Shamaa",
    position: "Flutter Co Mentor",
    image: "/Board photos/Tech/Flutter/Flutter Co Mentor Toqa shamaa .jpg",
    linkedin: "https://www.linkedin.com/in/abdelrahman-ayman-elassy/",
  },
  {
    id: "flutter-salma-elmaghawry",
    name: "Salma Elmaghawry",
    position: "Flutter Co Mentor",
    image: "/Board photos/Tech/Flutter/Flutter Co Mentor Salma Elmaghawry .jpg",
    linkedin: "https://www.linkedin.com/in/abdullah-yasser-06a021325/",
  },
  // Cyber
  {
    id: "cybersecurity-shams-mohamed",
    name: "Shams Mohamed",
    position: "Cybersecurity Mentor",
    image: "/Board photos/Tech/Cybersecurity/Cyber  Mentor Shams Mohamed .jpg",
    linkedin: "https://www.linkedin.com/in/romisaafadel/",
  },
  {
    id: "cybersecurity-ahmed-ashraf",
    name: "Ahmed Ashraf",
    position: "Cybersecurity Co Mentor",
    image: "/Board photos/Tech/Cybersecurity/Cyber Co Mentor -  Ahmed Ashraf .png",
    linkedin: "https://www.linkedin.com/in/abdelrahman-ayman-elassy/",
  },
  {
    id: "cybersecurity-osama-mohamed",
    name: "Osama Mohamed",
    position: "Cybersecurity Co Mentor",
    image: "/Board photos/Tech/Cybersecurity/Cyber Co Mentor Osama Mohamed.jpg",
    linkedin: "https://www.linkedin.com/in/abdullah-yasser-06a021325/",
  },
  {
    id: "cybersecurity-omar-abdulghani",
    name: "Omar Abdulghani",
    position: "Cybersecurity Co Mentor",
    image: "/Board photos/Tech/Cybersecurity/Cyber Co Mentor Omar Abdulghani .png",
    linkedin: "https://www.linkedin.com/in/abdullah-yasser-06a021325/",
  },
];
