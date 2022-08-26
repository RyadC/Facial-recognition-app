import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

const ParticlesComponent = () => {
    const options = useMemo(() => {

        return {
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
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                links: {
                    enable: true,
                },
                move: {
                    enable: true,
                    speed: 1,
                },
                size: {
                    value: { min: 1, max: 3}
                },
                number: {
                    density: {
                        enable: true,
                        area: 600,
                    },
                    value: 110,
                },
            },
        }
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />
}

export default ParticlesComponent;