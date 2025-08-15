import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import TamilForm from './components/tamilForm';

function App() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    if (name && email) {
      setUsers([...users, { name, email }]);
      setName('');
      setEmail('');
    }
  };

  return (
    // <TamilForm />
    <div>
      <h2>{t('app_title')}</h2>

      <h3>{t('add_user')}</h3>
      <input
        type="text"
        placeholder={t('name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder={t('email')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAddUser}>{t('submit')}</button>

      <h3>{t('user_list')}</h3>
      {users.length < 1 ? (
        <p>{t('no_users')}</p>
      ) : (
        <ul>
          {users.map((u, i) => (
            <li key={i}>{u.name} - {u.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
