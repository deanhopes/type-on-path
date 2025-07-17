import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";
import { useTheme } from "../lib/theme";

// Register GSAP plugins
gsap.registerPlugin(useGSAP, MotionPathPlugin, SplitText);

function TextOnPath() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const animationsRef = useRef<gsap.core.Tween[]>([]);

  useGSAP(() => {
    if (textRef.current && svgRef.current) {
      const pathElement = svgRef.current.querySelector("path");

      if (pathElement) {
        // Split text into words and chars
        const splitText = new SplitText(textRef.current, {
          type: "words,chars",
        });

        // Calculate spacing based on words, not individual characters
        const totalWords = splitText.words.length;
        const wordSpacing = 0.6 / totalWords; // Reduce from 1 to 0.6 to make words closer together

        splitText.words.forEach((word, wordIndex) => {
          const charsInWord = splitText.chars.filter((char) =>
            word.contains(char)
          );

          const wordStartPosition = wordIndex * wordSpacing;
          const charSpacingWithinWord = wordSpacing / (charsInWord.length + 4); // +2 for word padding

          // Animate each character individually around the path
          charsInWord.forEach((char, charInWordIndex) => {
            const charPosition =
              wordStartPosition + (charInWordIndex + 1) * charSpacingWithinWord;

            const animation = gsap.to(char, {
              duration: 200,
              repeat: -1,
              ease: "none",
              motionPath: {
                path: pathElement,
                align: pathElement,
                autoRotate: true,
                alignOrigin: [0, 0],
                start: charPosition,
                end: charPosition + 1,
              },
            });

            // Store animation reference
            animationsRef.current.push(animation);
          });
        });

        // Add hover event listeners to SVG
        const handleMouseEnter = () => {
          animationsRef.current.forEach((animation) => animation.pause());
        };

        const handleMouseLeave = () => {
          animationsRef.current.forEach((animation) => animation.resume());
        };

        if (svgRef.current) {
          svgRef.current.addEventListener("mouseenter", handleMouseEnter);
          svgRef.current.addEventListener("mouseleave", handleMouseLeave);
        }

        // Cleanup function
        return () => {
          if (svgRef.current) {
            svgRef.current.removeEventListener("mouseenter", handleMouseEnter);
            svgRef.current.removeEventListener("mouseleave", handleMouseLeave);
          }
          // Clear animations array
          animationsRef.current = [];
        };
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative scale-75 sm:scale-100 lg:scale-150">
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 369 381"
        fill="none"
      >
        <path
          d="M1 146.788C25.1289 63.6873 46 20.7884 88.5 8.78839C131 -3.21163 162.292 0.154918 185 8.78839C216.434 26.7076 233.955 39.502 265 67.7884C301.933 105.735 313.007 113.355 333 127.288C365.595 157.583 365.817 172.334 367.5 198.788C368.959 238.129 360 275.288 355 294.788C350 314.288 331 331.288 304 354.788C277 378.288 193 384.788 169 376.788C145 368.788 120 320.788 108 305.788C96 290.788 47 240.788 43 231.788C39 222.788 31 171.788 33 162.788C35 153.788 81.5 82.7884 93.5 67.7884C105.5 52.7884 113.5 52.7884 124.5 50.7884C135.5 48.7884 186 74.2884 198 87.2884C210 100.288 229 102.288 243 112.288C257 122.288 295.5 138.788 304 150.788C312.5 162.788 316 158.788 317 178.788C318 198.788 341 246.288 328.5 284.288C316 322.288 262 330.288 250.5 333.788C239 337.288 208.635 338.132 189 333.788C161.95 321.488 149.5 311.288 142.5 305.788C135.5 300.288 66 222.788 64.5 184.788C63 146.788 73.2877 148.116 88.5 131.788C107.868 119.505 117.844 118.888 135.5 118.788C211.763 135.628 222.573 157.637 265 187.788C285.306 220.045 281.44 225.231 282 240.788C274.399 258.688 258 266.288 250.5 270.788C243 275.288 198 302.288 169 294.788C140 287.289 104.5 197.788 120 184.788C135.5 171.788 161 171.288 179.5 181.788C198 192.288 225 173.788 234 208.788C243 243.788 216.5 237.288 198 240.788C179.5 244.288 154 239.288 161.5 226.788C169 214.288 193 208.788 193 208.788"
          stroke="none"
        />
      </svg>
      <p
        ref={textRef}
        className={`
          text-[8px] absolute transition-colors duration-500
          ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
        `}
      >
        Flow with the breath of the universe. Let your spirit ripple outward,
        touching all that is. Embrace the present moment as sacred. Surrender to
        the cosmic dance. Trust the wisdom within. Radiate kindness, receive
        abundance. You are the light, you are the wave, you are the ocean.
      </p>
    </div>
  );
}

export default TextOnPath;
