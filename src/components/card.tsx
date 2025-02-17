
import { Heart, Share2, Clock, MessageCircle } from 'lucide-react';

const CardGrid = () => {
    const styles = {
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            padding: '24px'
        },
        card: {
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'transform 0.2s ease',
            cursor: 'pointer'
        },
        imageContainer: {
            height: '200px',
            backgroundColor: '#4a90e2',
            position: 'relative'
        },
        content: {
            padding: '20px'
        },
        title: {
            fontSize: '20px',
            fontWeight: 'bold',
            marginBottom: '12px',
            color: '#333333'
        },
        description: {
            color: '#666666',
            lineHeight: '1.5',
            marginBottom: '16px'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 20px',
            borderTop: '1px solid #eee'
        },
        iconContainer: {
            display: 'flex',
            gap: '16px'
        },
        iconWrapper: {
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            color: '#666666'
        },
        hoverEffect: {
            ':hover': {
                transform: 'translateY(-4px)'
            }
        }
    };

    return (
        <div style={styles.gridContainer}>
            {/* Basic Card */}
            <div style={{ ...styles.card, ...styles.hoverEffect }}>
                <div style={styles.imageContainer}></div>
                <div style={styles.content}>
                    <h3 style={styles.title}>Card Title</h3>
                    <p style={styles.description}>
                        This is a simple card design with a clean and modern look.
                        It includes an image placeholder, title, and description.
                    </p>
                </div>
                <div style={styles.footer}>
                    <div style={styles.iconContainer}>
            <span style={styles.iconWrapper}>
              <Heart size={18} />
              <span>24</span>
            </span>
                        <span style={styles.iconWrapper}>
              <MessageCircle size={18} />
              <span>12</span>
            </span>
                        <span style={styles.iconWrapper}>
              <Share2 size={18} />
            </span>
                    </div>
                    <span style={styles.iconWrapper}>
            <Clock size={18} />
            <span>5m ago</span>
          </span>
                </div>
            </div>

            {/* Featured Card */}
            <div style={{
                ...styles.card,
                ...styles.hoverEffect,
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                border: '2px solid #4a90e2'
            }}>
                <div style={{
                    ...styles.imageContainer,
                    backgroundColor: '#2d74da'
                }}></div>
                <div style={styles.content}>
                    <h3 style={styles.title}>Featured Card</h3>
                    <p style={styles.description}>
                        This is a featured card with enhanced styling.
                        Notice the stronger shadow and border highlight.
                    </p>
                </div>
                <div style={styles.footer}>
                    <div style={styles.iconContainer}>
            <span style={styles.iconWrapper}>
              <Heart size={18} color="#4a90e2" />
              <span style={{ color: '#4a90e2' }}>42</span>
            </span>
                        <span style={styles.iconWrapper}>
              <MessageCircle size={18} />
              <span>18</span>
            </span>
                        <span style={styles.iconWrapper}>
              <Share2 size={18} />
            </span>
                    </div>
                    <span style={styles.iconWrapper}>
            <Clock size={18} />
            <span>2h ago</span>
          </span>
                </div>
            </div>

            {/* Minimal Card */}
            <div style={{
                ...styles.card,
                ...styles.hoverEffect,
                boxShadow: 'none',
                border: '1px solid #eee'
            }}>
                <div style={{
                    ...styles.imageContainer,
                    backgroundColor: '#f5f5f5'
                }}></div>
                <div style={styles.content}>
                    <h3 style={styles.title}>Minimal Card</h3>
                    <p style={styles.description}>
                        A minimal card design with subtle styling.
                        Perfect for clean, minimalist interfaces.
                    </p>
                </div>
                <div style={styles.footer}>
                    <div style={styles.iconContainer}>
            <span style={styles.iconWrapper}>
              <Heart size={18} />
              <span>16</span>
            </span>
                        <span style={styles.iconWrapper}>
              <MessageCircle size={18} />
              <span>8</span>
            </span>
                        <span style={styles.iconWrapper}>
              <Share2 size={18} />
            </span>
                    </div>
                    <span style={styles.iconWrapper}>
            <Clock size={18} />
            <span>1d ago</span>
          </span>
                </div>
            </div>
        </div>
    );
};

export default Card;