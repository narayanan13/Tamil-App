import React from 'react';
const Sidebar = ({ current, onNavigate }) => {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>மெனு</h3>
      <ul style={styles.menu}>
        <li style={current === 'dashboard' ? styles.activeItem : styles.item} onClick={() => onNavigate('dashboard')}>🏠 Dashboard</li>
        <li style={current === 'add' ? styles.activeItem : styles.item} onClick={() => onNavigate('add')}>➕ புதிய ஊழியர்</li>
        <li style={current === 'list' ? styles.activeItem : styles.item} onClick={() => onNavigate('list')}>📋 ஊழியர் பட்டியல்</li>
      </ul>
    </div>
  );
};
const styles = {
  sidebar: {
    width: 250,
    background: '#f9fafb',
    borderRight: '1px solid #e5e7eb',
    padding: '16px',
    height: '100vh',
    position: 'fixed',
  },
  title: {
    margin: '0 0 16px 0',
    fontSize: '1.5em',
  },
  menu: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    padding: '10px 15px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  activeItem: {
    padding: '10px 15px',
    cursor: 'pointer',
    background: '#e5e7eb',
  },
};
export default Sidebar;