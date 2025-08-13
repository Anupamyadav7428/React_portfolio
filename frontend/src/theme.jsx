// import { useState, useEffect } from "react";

// export default function ThemeToggle() {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const rootElement = document.getElementById("root");
//     if (darkMode) {
//       rootElement.classList.add("dark");
//     } else {
//       rootElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div className="h-screen flex flex-col items-center justify-center 
//                     bg-white dark:bg-gray-900 text-black dark:text-white">
//       <button
//         className="px-4 py-2 bg-gray-300 dark:bg-gray-700 
//                    text-black dark:text-white rounded"
//         onClick={() => setDarkMode(!darkMode)}
//       >
//         Toggle Mode: {darkMode ? "Dark" : "Light"}
//       </button>
//     </div>
//   );
// }
