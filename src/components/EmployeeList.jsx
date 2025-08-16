import React from 'react';
import { useTranslation } from 'react-i18next';

export default function EmployeeList({ items, onEdit, onDelete }) {
  const { t } = useTranslation();
  const [q, setQ] = React.useState('');
  const filtered = React.useMemo(() => items.filter(e => (e.name||'').includes(q)), [items, q]);

  return (
    <div style={{ maxWidth:1000, margin:'16px auto' }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:12 }}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder={`${t('search')}…`} style={{ width:280, padding:'10px 12px', border:'1px solid #e5e7eb', borderRadius:10 }} />
      </div>
      <div style={{ overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr>
              {['name','age','email','department','designation','salary','actions'].map(k => (
                <th key={k} style={{ textAlign:'left', padding:12, borderBottom:'1px solid #eee', whiteSpace:'nowrap' }}>{t(k)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td colSpan={7} style={{ padding:18, textAlign:'center', color:'#6b7280' }}>{t('noEmployees')}</td></tr>
            )}
            {filtered.map(emp => (
              <tr key={emp.id}>
                <td style={{ padding:12, borderBottom:'1px solid #f3f4f6' }}>{emp.name}</td>
                <td style={{ padding:12, borderBottom:'1px solid #f3f4f6' }}>{emp.age ?? '-'}</td>
                <td style={{ padding:12, borderBottom:'1px solid #f3f4f6' }}>{emp.email || '-'}</td>
                <td style={{ padding:12, borderBottom:'1px solid #f3f4f6' }}>{emp.department}</td>
                <td style={{ padding:12, borderBottom:'1px solid #f3f4f6' }}>{emp.designation}</td>
                <td style={{ padding:12, borderBottom:'1px solid #f3f4f6' }}>{emp.salary ?? '-'}</td>
                <td style={{ padding:12, borderBottom:'1px solid #f3f4f6' }}>
                  <button onClick={() => onEdit(emp)} style={{ marginRight:8, padding:'6px 10px', borderRadius:8, border:'1px solid #3b82f6', background:'#3b82f6', color:'#fff' }}>{t('editEmployee')}</button>
                  <button onClick={() => onDelete(emp)} style={{ padding:'6px 10px', borderRadius:8, border:'1px solid #ef4444', background:'#ef4444', color:'#fff' }}>{t('delete')}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
