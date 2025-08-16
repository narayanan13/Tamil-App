import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useTransliterate } from '../hooks/useTransliterate';

export default function EmployeeForm({ initial, onSubmit, onCancel }) {
  const { t } = useTranslation();
  const name = useTransliterate(initial?.name || '');
  const department = useTransliterate(initial?.department || '');
  const designation = useTransliterate(initial?.designation || '');
  const [age, setAge] = React.useState(initial?.age || '');
  const [email, setEmail] = React.useState(initial?.email || '');
  const [salary, setSalary] = React.useState(initial?.salary || '');

  const valid = useMemo(() => !!name.value && !!department.value && !!designation.value, [name, department, designation]);

  const submit = (e) => {
    e.preventDefault();
    if (!valid) return;
    onSubmit({
      name: name.value.trim(),
      age: age ? Number(age) : undefined,
      email: email.trim(),
      department: department.value.trim(),
      designation: designation.value.trim(),
      salary: salary ? Number(salary) : undefined,
    });
  };

  const field = (label, input) => (
    <div style={{ marginBottom:12 }}>
      <label style={{ display:'block', fontSize:14, marginBottom:6 }}>{label}</label>
      {input}
    </div>
  );

  const inputStyle = { width:'100%', padding:'10px 12px', border:'1px solid #e5e7eb', borderRadius:10 };
  const hint = <div style={{ fontSize:12, color:'#6b7280', marginTop:6 }}>{t('tamilInputHint')}</div>;

  return (
    <form onSubmit={submit} style={{ maxWidth:700, margin:'16px auto' }}>
      {field(t('name'), <>
        <input value={name.value} onChange={name.onChange} style={inputStyle} placeholder={t('name')} />
        {hint}
      </>)}
      {field(t('age'), <input value={age} onChange={e=>setAge(e.target.value)} style={inputStyle} type="number" min="0" placeholder={t('age')} />)}
      {field(t('email'), <input value={email} onChange={e=>setEmail(e.target.value)} style={inputStyle} type="email" placeholder={t('email')} />)}
      {field(t('department'), <>
        <input value={department.value} onChange={department.onChange} style={inputStyle} placeholder={t('department')} />
        {hint}
      </>)}
      {field(t('designation'), <>
        <input value={designation.value} onChange={designation.onChange} style={inputStyle} placeholder={t('designation')} />
        {hint}
      </>)}
      {field(t('salary'), <input value={salary} onChange={e=>setSalary(e.target.value)} style={inputStyle} type="number" min="0" placeholder={t('salary')} />)}

      <div style={{ display:'flex', gap:12, marginTop:16 }}>
        <button type="submit" disabled={!valid} style={{ padding:'10px 14px', borderRadius:10, border:'1px solid #10b981', background: valid ? '#10b981' : '#a7f3d0', color:'#fff', cursor: valid ? 'pointer' : 'not-allowed' }}>{initial ? t('update') : t('save')}</button>
        <button type="button" onClick={onCancel} style={{ padding:'10px 14px', borderRadius:10, border:'1px solid #e5e7eb', background:'#fff' }}>{t('cancel')}</button>
      </div>
    </form>
  );
}
