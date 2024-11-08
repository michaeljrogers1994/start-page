const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '16px',
      padding: '20px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'black',
      padding: '16px',
      backgroundColor: '#f1f1f1',
      borderRadius: '8px',
      transition: 'transform 0.2s',
    },
    iconWrapper: {
      width: '60px',
      height: '60px',
      overflow: 'hidden',
      borderRadius: '50%',
      marginBottom: '8px',
    },
    icon: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    title: {
      fontSize: '14px',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };
  


const ShortcutPage = ({ shortcuts }) => {
    return (
      <div style={styles.grid}>
        {shortcuts.map((shortcut, index) => (
          <a 
            key={index}
            href={shortcut.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <div style={styles.iconWrapper}>
              <img src={shortcut.icon} alt={`${shortcut.title} icon`} style={styles.icon} />
            </div>
            <p style={styles.title}>{shortcut.title}</p>
          </a>
        ))}
      </div>
    );
  };

export default ShortcutPage;