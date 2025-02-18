import React from 'react';

const AnimatedDivs = () => {
    const styles = {
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            padding: '24px',
            background: '#f8f9fa'
        },
        baseDiv: {
            width: '100%',
            height: '150px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px'
        },
        // Floating Animation
        floatingDiv: {
            background: 'linear-gradient(45deg, #ff6b6b, #f06595)',
            animation: 'float 3s ease-in-out infinite'
        },
        // Pulse Animation
        pulsingDiv: {
            background: 'linear-gradient(45deg, #4c6ef5, #748ffc)',
            animation: 'pulse 2s ease-in-out infinite'
        },
        // Rotating Border
        borderDiv: {
            position: 'relative',
            background: 'white',
            color: '#333',
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
            animation: 'spin 4s linear infinite'
        },
        borderDivBefore: {
            content: '""',
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            bottom: '-4px',
            left: '-4px',
            background: 'linear-gradient(45deg, #f06595, #4c6ef5, #f06595)',
            zIndex: -1,
            borderRadius: '14px',
            animation: 'spin 4s linear infinite'
        },
        // Shaking Animation
        shakingDiv: {
            background: 'linear-gradient(45deg, #fab005, #ffd43b)',
            animation: 'shake 0.5s ease-in-out infinite'
        },
        // Morphing Shape
        morphDiv: {
            background: 'linear-gradient(45deg, #40c057, #69db7c)',
            animation: 'morph 8s ease-in-out infinite'
        },
        // Glowing Effect
        glowDiv: {
            background: 'linear-gradient(45deg, #7950f2, #845ef7)',
            boxShadow: '0 0 20px rgba(121, 80, 242, 0.5)',
            animation: 'glow 2s ease-in-out infinite'
        },
        '@keyframes float': {
            '0%, 100%': {
                transform: 'translateY(0)'
            },
            '50%': {
                transform: 'translateY(-20px)'
            }
        },
        '@keyframes pulse': {
            '0%, 100%': {
                transform: 'scale(1)',
                opacity: 1
            },
            '50%': {
                transform: 'scale(1.05)',
                opacity: 0.8
            }
        },
        '@keyframes spin': {
            '0%': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        },
        '@keyframes shake': {
            '0%, 100%': {
                transform: 'translateX(0)'
            },
            '25%': {
                transform: 'translateX(-5px)'
            },
            '75%': {
                transform: 'translateX(5px)'
            }
        },
        '@keyframes morph': {
            '0%, 100%': {
                borderRadius: '12px'
            },
            '50%': {
                borderRadius: '50%'
            }
        },
        '@keyframes glow': {
            '0%, 100%': {
                boxShadow: '0 0 20px rgba(121, 80, 242, 0.5)'
            },
            '50%': {
                boxShadow: '0 0 40px rgba(121, 80, 242, 0.8)'
            }
        }
    };

    return (
        <div style={styles.container}>
            {/* Floating Animation */}
            <div style={{...styles.baseDiv, ...styles.floatingDiv}}>
                Floating
            </div>

            {/* Pulsing Animation */}
            <div style={{...styles.baseDiv, ...styles.pulsingDiv}}>
                Pulsing
            </div>

            {/* Rotating Border */}
            <div style={{...styles.baseDiv, ...styles.borderDiv}}>
                <div style={styles.borderDivBefore}></div>
                Spinning Border
            </div>

            {/* Shaking Animation */}
            <div style={{...styles.baseDiv, ...styles.shakingDiv}}>
                Shaking
            </div>

            {/* Morphing Shape */}
            <div style={{...styles.baseDiv, ...styles.morphDiv}}>
                Morphing
            </div>

            {/* Glowing Effect */}
            <div style={{...styles.baseDiv, ...styles.glowDiv}}>
                Glowing
            </div>
        </div>
    );
};

export default AnimatedDivs;