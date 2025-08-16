import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header({ current, onNavigate }) {
  const { t } = useTranslation();
  const Tab = ({ id, label }) => (
    <button
      onClick={() => onNavigate(id)}
      style={{
        padding: '10px 14px',
        marginRight: 8,
        borderRadius: 10,
        border: '1px solid #e5e7eb',
        background: current === id ? '#111827' : '#fff',
        color: current === id ? '#fff' : '#111827',
        cursor: 'pointer'
      }}
    >{label}</button>
  );
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:16, borderBottom:'1px solid #eee' }}>
      <h1 style={{ fontSize:22, margin:0 }}>{t('appTitle')}</h1>
      <div>
        <Tab id="dashboard" label={t('dashboard')} />
        <Tab id="add" label={t('addEmployee')} />
        <Tab id="list" label={t('listEmployees')} />
      </div>
    </div>
  );
}