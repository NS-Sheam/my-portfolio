import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesDesign = () => {
    const particlesInit = useCallback(async (particles) => {
        console.log(particles);
        // You can initiate the tsParticles instance (particles) here, adding custom shapes or presets
        // This loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // Starting from v2, you can add only the features you need, reducing the bundle size
        await loadFull(particles);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);

    return (
        <Particles
        className="z-50"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#F9E2AF",
                    },
                    links: {
                        color: "#F9E2AF",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesDesign;
