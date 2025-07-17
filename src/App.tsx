import "./App.css";
import "./styles/grid.css";
import TextOnPath from "./components/TextOnPath";
import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./lib/theme";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`
        app-grid transition-colors duration-500
        ${theme === "dark" ? "bg-gray-900" : "bg-white"}
      `}
    >
      {/* Paper texture with theme-specific treatments */}
      <img
        src="/src/assets/Texturelabs_Paper_154XL.jpg"
        alt="Paper texture"
        className={`
          absolute pointer-events-none inset-0 w-full h-full object-cover transition-all duration-500 
          ${
            theme === "dark"
              ? "mix-blend-overlay opacity-40 brightness-100 contrast-125"
              : "mix-blend-multiply opacity-40 brightness-100 contrast-100"
          }
        `}
      />

      {/* Theme toggle */}
      <div className="grid-toggle flex justify-start items-start">
        <ThemeToggle />
      </div>

      {/* Main heading */}
      <header
        className={`
          grid-header flex justify-end items-start transition-colors duration-300
          ${theme === "dark" ? "text-white" : "text-gray-900"}
        `}
      >
        <h1 className="text-md sm:text-md lg:text-md tracking-[0.05em]">
          ALIGN YOUR ENERGY
        </h1>
      </header>

      {/* Animated text component */}
      <main className="grid-main flex items-center justify-center">
        <TextOnPath />
      </main>

      {/* Image section */}
      <section className="grid-image flex items-center justify-start">
        <img
          src="/src/assets/yoga.png"
          alt="Decorative image"
          className={`
            w-full h-full object-cover rounded-lg shadow-lg transition-all duration-300
            ${
              theme === "dark"
                ? "opacity-80 brightness-90"
                : "opacity-90 brightness-100"
            }
          `}
        />
      </section>

      {/* Bottom text */}
      <footer
        className={`
          grid-footer flex items-end transition-colors duration-300
          ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
        `}
      >
        <p className="text-sm sm:text-base lg:text-sm italic tracking-tighter leading-[1.3] max-w-xs lg:max-w-md">
          Let your aura guide you. Each moment is a ripple in the cosmic flow,
          and your energy shapes the universe in ways only you can.
        </p>
      </footer>
    </div>
  );
}

export default App;
