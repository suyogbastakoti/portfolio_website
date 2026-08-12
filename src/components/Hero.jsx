import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const characterRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const character = characterRef.current;
    const leftPupil = leftPupilRef.current;
    const rightPupil = rightPupilRef.current;

    if (!character || !leftPupil || !rightPupil) return;

    // Character entrance

    gsap.fromTo(
      character,
      {
        opacity: 0,
        x: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    // --------------------------------
    // Character floating animation
    // --------------------------------

    const floatingAnimation = gsap.to(character, {
      y: -12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // --------------------------------
    // Smooth eye movement
    // --------------------------------

    const moveLeftX = gsap.quickTo(leftPupil, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveLeftY = gsap.quickTo(leftPupil, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveRightX = gsap.quickTo(rightPupil, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveRightY = gsap.quickTo(rightPupil, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    // --------------------------------
    // Cursor tracking
    // --------------------------------

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const rect = character.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const angle = Math.atan2(deltaY, deltaX);

      // Limit how far pupils can move
      const maxMovement = 12;

      const distance = Math.min(
        maxMovement,
        Math.sqrt(deltaX ** 2 + deltaY ** 2) / 80
      );

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      moveLeftX(x);
      moveLeftY(y);

      moveRightX(x);
      moveRightY(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // --------------------------------
    // Cleanup
    // --------------------------------

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      floatingAnimation.kill();
    };
  }, []);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-linear-to-r
        from-black
        via-purple-950
        to-black
        text-white
        flex
        items-center
        justify-between
        px-6
        md:px-12
        lg:px-24
        py-16
      "
    >

      {/* ================================= */}
      {/* LEFT SIDE */}
      {/* ================================= */}

      <div className="w-full lg:w-1/2 max-w-2xl z-10">

        {/* Small intro */}
        <p className="text-lime-400 text-lg md:text-xl mb-5">
          Hi, I'm Suyog 👋
        </p>

        {/* Main heading */}
        <h1
          className="
            text-5xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            mb-8
          "
        >
          Frontend Developer{" "}
          <span className="text-lime-400">
            & Designer
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            text-gray-300
            text-lg
            md:text-xl
            leading-relaxed
            max-w-xl
          "
        >
          I craft fast, accessible, and beautifully
          detailed web interfaces with 1+ Year of Experience. I turn complex ideas
          into clean and interactive experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="
              bg-lime-400
              text-black
              px-6
              py-3
              rounded-2xl
              font-medium
              cursor-pointer
              hover:bg-lime-500
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            View my work
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="
              border
              border-gray-500
              bg-black/40
              px-6
              py-3
              rounded-2xl
              font-medium
              cursor-pointer
              hover:bg-white
              hover:text-black
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            Get in touch
          </button>

        </div>
      </div>


      {/* ================================= */}
      {/* RIGHT SIDE - CHARACTER */}
      {/* ================================= */}

      <div
        className="
          hidden
          lg:flex
          w-1/2
          justify-center
          items-center
        "
      >

        <div
          ref={characterRef}
          className="w-[500px] max-w-full"
        >

          <svg
            viewBox="0 0 520 620"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >

            {/* ========================= */}
            {/* DEFINITIONS */}
            {/* ========================= */}

            <defs>

              <linearGradient
                id="hoodieGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#7c3aed"
                />

                <stop
                  offset="100%"
                  stopColor="#312e81"
                />
              </linearGradient>

              <linearGradient
                id="skinGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#ffd7bd"
                />

                <stop
                  offset="100%"
                  stopColor="#f4b38f"
                />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur
                  stdDeviation="5"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>


            {/* ========================= */}
            {/* GLOW BEHIND CHARACTER */}
            {/* ========================= */}

            <circle
              cx="260"
              cy="300"
              r="210"
              fill="#7c3aed"
              opacity="0.12"
              filter="url(#glow)"
            />


            {/* ========================= */}
            {/* CODE CARD - LEFT */}
            {/* ========================= */}

            <rect
              x="20"
              y="180"
              width="105"
              height="85"
              rx="14"
              fill="#171326"
              stroke="#7c3aed"
              strokeWidth="5"
            />

            <text
              x="72"
              y="233"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="28"
              fontWeight="bold"
              fill="#a3e635"
            >
              {"</>"}
            </text>


            {/* ========================= */}
            {/* CODE CARD - RIGHT */}
            {/* ========================= */}

            <rect
              x="395"
              y="145"
              width="100"
              height="85"
              rx="14"
              fill="#171326"
              stroke="#7c3aed"
              strokeWidth="5"
            />

            <text
              x="445"
              y="198"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="25"
              fontWeight="bold"
              fill="#22d3ee"
            >
              JS
            </text>


            {/* ========================= */}
            {/* BODY / HOODIE */}
            {/* ========================= */}

            <path
              d="
                M105 570
                Q110 430 180 390
                Q260 350 340 390
                Q420 430 425 570
                Z
              "
              fill="url(#hoodieGradient)"
              stroke="#111827"
              strokeWidth="12"
            />


            {/* ========================= */}
            {/* HOOD */}
            {/* ========================= */}

            <path
              d="
                M145 430
                Q155 335 260 325
                Q365 335 375 430
                Q330 395 260 405
                Q190 395 145 430
                Z
              "
              fill="#171326"
              stroke="#111827"
              strokeWidth="10"
            />


            {/* ========================= */}
            {/* HEAD */}
            {/* ========================= */}

            <path
              d="
                M145 185
                Q150 80 260 70
                Q370 80 375 185
                L360 300
                Q330 365 260 375
                Q190 365 160 300
                Z
              "
              fill="url(#skinGradient)"
              stroke="#111827"
              strokeWidth="10"
            />


            {/* ========================= */}
            {/* HAIR */}
            {/* ========================= */}

            <path
              d="
                M145 185
                Q105 135 145 92
                Q160 45 220 55
                Q255 10 295 55
                Q355 35 385 95
                Q415 145 375 190
                Q350 145 320 155
                Q295 105 265 145
                Q235 100 205 150
                Q170 125 145 185
                Z
              "
              fill="#17121f"
              stroke="#111827"
              strokeWidth="10"
            />


            {/* ========================= */}
            {/* LEFT EYE */}
            {/* ========================= */}

            <ellipse
              cx="205"
              cy="225"
              rx="43"
              ry="50"
              fill="white"
              stroke="#111827"
              strokeWidth="8"
            />

            {/* LEFT PUPIL */}
            <circle
              ref={leftPupilRef}
              cx="205"
              cy="225"
              r="19"
              fill="#111827"
            />

            {/* LEFT EYE HIGHLIGHT */}
            <circle
              cx="212"
              cy="217"
              r="6"
              fill="white"
            />


            {/* ========================= */}
            {/* RIGHT EYE */}
            {/* ========================= */}

            <ellipse
              cx="315"
              cy="225"
              rx="43"
              ry="50"
              fill="white"
              stroke="#111827"
              strokeWidth="8"
            />

            {/* RIGHT PUPIL */}
            <circle
              ref={rightPupilRef}
              cx="315"
              cy="225"
              r="19"
              fill="#111827"
            />

            {/* RIGHT EYE HIGHLIGHT */}
            <circle
              cx="322"
              cy="217"
              r="6"
              fill="white"
            />


            {/* ========================= */}
            {/* NOSE */}
            {/* ========================= */}

            <path
              d="
                M258 245
                Q245 275 260 282
                Q275 280 270 265
              "
              fill="none"
              stroke="#c47f68"
              strokeWidth="7"
              strokeLinecap="round"
            />


            {/* ========================= */}
            {/* SMILE */}
            {/* ========================= */}

            <path
              d="
                M230 305
                Q260 325 290 305
              "
              fill="none"
              stroke="#111827"
              strokeWidth="7"
              strokeLinecap="round"
            />


            {/* ========================= */}
            {/* LAPTOP */}
            {/* ========================= */}

            <rect
              x="145"
              y="445"
              width="230"
              height="120"
              rx="14"
              fill="#111827"
              stroke="#a3e635"
              strokeWidth="6"
            />

            {/* Laptop screen glow */}
            <rect
              x="160"
              y="460"
              width="200"
              height="90"
              rx="8"
              fill="#050505"
            />

            <text
              x="260"
              y="515"
              textAnchor="middle"
              fontFamily="monospace"
              fontSize="42"
              fontWeight="bold"
              fill="#a3e635"
            >
              {"</>"}
            </text>

            {/* Laptop base */}
            <path
              d="
                M120 570
                H400
                Q385 590 360 590
                H160
                Q135 590 120 570
                Z
              "
              fill="#374151"
              stroke="#111827"
              strokeWidth="7"
            />


            {/* ========================= */}
            {/* DECORATIVE SPARKLES */}
            {/* ========================= */}

            <circle
              cx="70"
              cy="115"
              r="7"
              fill="#a3e635"
            />

            <circle
              cx="455"
              cy="285"
              r="7"
              fill="#a3e635"
            />

            <path
              d="M65 315 L80 300 M72 300 L57 285"
              stroke="#a3e635"
              strokeWidth="7"
              strokeLinecap="round"
            />

            <path
              d="M440 330 L455 315 M447 315 L432 300"
              stroke="#a3e635"
              strokeWidth="7"
              strokeLinecap="round"
            />

          </svg>

        </div>

      </div>


      {/* ================================= */}
      {/* SCROLL INDICATOR */}
      {/* ================================= */}

      <button
        type="button"
        onClick={() => scrollToSection("footer")}
        className="
          absolute
          bottom-8
          font-bold
          left-1/2
          -translate-x-1/2
          text-gray-500
          text-xs
          tracking-[0.3em]
          animate-bounce
          cursor-pointer
          bg-transparent
          border-none
          outline-none
        "
      >
        SCROLL ↓
      </button>

    </section>
  );
};

export default Hero;