import React from 'react';
import './i18n';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx'; // Import the Sidebar
import EmployeeForm from './components/EmployeeForm.jsx';
import EmployeeList from './components/EmployeeList.jsx';
import { loadEmployees, saveEmployees } from './utils/storage.js';
import { v4 as uuid } from 'uuid';
export default function App() {
  const [route, setRoute] = React.useState('dashboard');
  const [employees, setEmployees] = React.useState(loadEmployees());
  const [editing, setEditing] = React.useState(null);
  
  React.useEffect(() => { saveEmployees(employees); }, [employees]);
  
  const addEmployee = (data) => {
    setEmployees(prev => [{ id: uuid(), ...data }, ...prev]);
    setRoute('list');
  };
  
  const updateEmployee = (data) => {
    setEmployees(prev => prev.map(e => e.id === editing.id ? { ...editing, ...data } : e));
    setEditing(null);
    setRoute('list');
  };
  
  const onDelete = (emp) => {
    if (confirm('இந்த ஊழியரை நிச்சயமாக அழிக்க வேண்டுமா?')) {
      setEmployees(prev => prev.filter(e => e.id !== emp.id));
    }
  };
  
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar current={route} onNavigate={setRoute} /> {/* Add Sidebar */}
      <div style={{ marginLeft: 250, padding: 16, flex: 1, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', color: '#111827' }}>
        <Header current={route} onNavigate={setRoute} />
        {route === 'dashboard' && (
          <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: 12, padding: 24, maxWidth: 980, margin: '18px auto' }}>
            <h2 style={{ marginTop: 0 }}>வரவேற்பு!</h2>
            <p>இந்த பயன்பாட்டில், தங்களின் நிறுவன ஊழியர்களின் விவரங்களை தமிழில் சேமித்து நிர்வகிக்கலாம்.</p>
            <ul>
              <li>➕ புதிய ஊழியரைச் சேர்க்க — மேலே உள்ள "புதிய ஊழியரைச் சேர்"</li>
              <li>📋 ஊழியர் பட்டியலைப் பார்க்க — "ஊழியர் பட்டியல்"</li>
              <li>⌨️ தங்க்லிஷ் தட்டச்சு செய்து தமிழில் உடனடி மாற்றம்</li>
            </ul>
          </div>
        )}
        {route === 'add' && (
          <EmployeeForm onSubmit={addEmployee} onCancel={() => setRoute('list')} />
        )}
        {route === 'list' && !editing && (
          <EmployeeList
            items={employees}
            onEdit={(e) => { setEditing(e); setRoute('edit'); }}
            onDelete={onDelete}
          />
        )}
        {route === 'edit' && editing && (
          <EmployeeForm initial={editing} onSubmit={updateEmployee} onCancel={() => { setEditing(null); setRoute('list'); }} />
        )}
      </div>
    </div>
  );
}
