import React from "react";
import Particles from "react-particles-js";

function MovingParticles() {
  const [particleColor, setParticleColor] = React.useState("#ffffff");

  // Changing themes
  React.useEffect(() => {
    switch (document.body.classList[0]) {
      case "dark":
      case "blue":
        setParticleColor("#ffffff");
        break;
      case "green":
        setParticleColor("#007566");
        break;
      case "white":
        setParticleColor("#457B9D");
        break;
    }
  }, []);

  return (
    <Particles
      className="particle_canvas"
      params={{
        particles: {
          color: {
            value: particleColor,
          },
          number: {
            value: 250,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: undefined,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 4,
              size: 4,
              opacity: 0.5,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    />
  );
}

export default MovingParticles;
