import  { useState } from 'react';
import { Star, Heart } from 'lucide-react';

const GradientCard = () => {
    const [isLiked1, setIsLiked1] = useState(false);
    const [isLiked2, setIsLiked2] = useState(false);
    const [isLiked3, setIsLiked3] = useState(false);

    const styles = {
        container: {
            padding: '24px',
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        },
        card: {
            borderRadius: '16px',
            padding: '2px',
            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
            maxWidth: '400px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            animation: 'gradientShift 8s ease infinite',
            cursor: 'pointer'
        },
        cardInner: {
            background: 'white',
            borderRadius: '14px',
            padding: '24px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transition: 'transform 0.2s ease'
        },
        gradientCard: {
            borderRadius: '16px',
            padding: '24px',
            color: 'white',
            background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
            maxWidth: '400px',
            boxShadow: '0 10px 20px rgba(147, 51, 234, 0.2)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            animation: 'pulse 3s ease-in-out infinite'
        },
        glassCard: {
            borderRadius: '16px',
            padding: '24px',
            color: 'white',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.9) 0%, rgba(79, 70, 229, 0.9) 100%)',
            backdropFilter: 'blur(10px)',
            maxWidth: '400px',
            boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden'
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '8px',
            position: 'relative'
        },
        text: {
            lineHeight: 1.6,
            opacity: 0.9
        },
        whiteText: {
            color: 'white'
        },
        darkText: {
            color: '#1f2937'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        },
        footerLight: {
            borderTop: '1px solid rgba(0, 0, 0, 0.1)'
        },
        iconWrapper: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        },
        '@keyframes gradientShift': {
            '0%': {
                backgroundPosition: '0% 50%'
            },
            '50%': {
                backgroundPosition: '100% 50%'
            },
            '100%': {
                backgroundPosition: '0% 50%'
            }
        },
        '@keyframes pulse': {
            '0%': {
                boxShadow: '0 10px 20px rgba(147, 51, 234, 0.2)'
            },
            '50%': {
                boxShadow: '0 10px 30px rgba(147, 51, 234, 0.4)'
            },
            '100%': {
                boxShadow: '0 10px 20px rgba(147, 51, 234, 0.2)'
            }
        },
        heartIcon: {
            transition: 'transform 0.3s ease, color 0.3s ease',
            cursor: 'pointer'
        },
        heartIconActive: {
            transform: 'scale(1.2)',
            color: '#ff4081'
        }
    };

    // Add hover styles
    const getHoverStyles = (baseStyle) => ({
        ...baseStyle,
        ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 15px 30px rgba(147, 51, 234, 0.3)'
        }
    });

    return (
        <div style={styles.container}>
            {/* Gradient Border Card */}
            <div
                style={getHoverStyles(styles.card)}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(147, 51, 234, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                <div style={styles.cardInner}>
                    <h3 style={{...styles.title, ...styles.darkText}}>Gradient Border</h3>
                    <p style={styles.darkText}>
                        A clean card with a beautiful purple gradient border effect.
                    </p>
                    <div style={{...styles.footer, ...styles.footerLight}}>
                        <div style={styles.iconWrapper}>
                            <Star size={20} color="#9333ea"/>
                            <span style={{color: '#9333ea'}}>Featured</span>
                        </div>
                        <Heart
                            size={20}
                            style={{
                                ...styles.heartIcon,
                                ...(isLiked1 ? styles.heartIconActive : {}),
                                color: isLiked1 ? '#ff4081' : '#9333ea'
                            }}
                            onClick={() => setIsLiked1(!isLiked1)}
                        />
                    </div>
                </div>
            </div>

            {/* Full Gradient Card */}
            <div
                style={getHoverStyles(styles.gradientCard)}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(147, 51, 234, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(147, 51, 234, 0.2)';
                }}
            >
                <h3 style={{...styles.title, ...styles.whiteText}}>Full Gradient</h3>
                <p style={styles.whiteText}>
                    A bold card design with a rich purple to indigo gradient background.
                </p>
                <div style={styles.footer}>
                    <div style={styles.iconWrapper}>
                        <Star size={20} color="white"/>
                        <span>Premium</span>
                    </div>
                    <Heart
                        size={20}
                        style={{
                            ...styles.heartIcon,
                            ...(isLiked2 ? styles.heartIconActive : {}),
                            color: isLiked2 ? '#ff4081' : 'white'
                        }}
                        onClick={() => setIsLiked2(!isLiked2)}
                    />
                </div>
            </div>

            {/* Glassmorphic Gradient Card */}
            <div
                style={getHoverStyles(styles.glassCard)}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(147, 51, 234, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.2)';
                }}
            >
                <h3 style={{...styles.title, ...styles.whiteText}}>Glass Effect</h3>
                <p style={styles.whiteText}>
                    A modern glassmorphic card with a subtle gradient and blur effect.
                </p>
                <div style={styles.footer}>
                    <div style={styles.iconWrapper}>
                        <Star size={20} color="white"/>
                        <span>Special</span>
                    </div>
                    <Heart
                        size={20}
                        style={{
                            ...styles.heartIcon,
                            ...(isLiked3 ? styles.heartIconActive : {}),
                            color: isLiked3 ? '#ff4081' : 'white'
                        }}
                        onClick={() => setIsLiked3(!isLiked3)}
                    />
                </div>
            </div>
        </div>
    );
};

export default GradientCard;