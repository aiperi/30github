import React from 'react';
import { Star, Heart } from 'lucide-react';

const GradientCard = () => {
    const styles = {
        container: {
            padding: '24px',
            display: 'grid',
            gap: '24px',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        },
        card: {
            borderRadius: '16px',
            padding: '2px', // For gradient border
            background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
            maxWidth: '400px'
        },
        cardInner: {
            background: 'white',
            borderRadius: '14px',
            padding: '24px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
        },
        gradientCard: {
            borderRadius: '16px',
            padding: '24px',
            color: 'white',
            background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
            maxWidth: '400px',
            boxShadow: '0 10px 20px rgba(147, 51, 234, 0.2)'
        },
        glassCard: {
            borderRadius: '16px',
            padding: '24px',
            color: 'white',
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.9) 0%, rgba(79, 70, 229, 0.9) 100%)',
            backdropFilter: 'blur(10px)',
            maxWidth: '400px',
            boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
        },
        title: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '8px'
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
        }
    };

    return (
        <div style={styles.container}>
            {/* Gradient Border Card */}
            <div style={styles.card}>
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
                        <Heart size={20} color="#9333ea"/>
                    </div>
                </div>
            </div>

            {/* Full Gradient Card */}
            <div style={styles.gradientCard}>
                <h3 style={{...styles.title, ...styles.whiteText}}>Full Gradient</h3>
                <p style={styles.whiteText}>
                    A bold card design with a rich purple to indigo gradient background.
                </p>
                <div style={styles.footer}>
                    <div style={styles.iconWrapper}>
                        <Star size={20} color="white"/>
                        <span>Premium</span>
                    </div>
                    <Heart size={20} color="white"/>
                </div>
            </div>

            {/* Glassmorphic Gradient Card */}
            <div style={styles.glassCard}>
                <h3 style={{...styles.title, ...styles.whiteText}}>Glass Effect</h3>
                <p style={styles.whiteText}>
                    A modern glassmorphic card with a subtle gradient and blur effect.
                </p>
                <div style={styles.footer}>
                    <div style={styles.iconWrapper}>
                        <Star size={20} color="white"/>
                        <span>Special</span>
                    </div>
                    <Heart size={20} color="white"/>
                </div>
            </div>
        </div>
    );
};

export default GradientCard;