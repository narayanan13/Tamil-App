import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './index.css'

function App() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAddUser = () => {
    if (name && age) {
      setUsers([...users, { name, age }]);
      setName("");
      setAge("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>{t("addUser")}</h2>
      <input
        type="text"
        placeholder={t("name")}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder={t("age")}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={handleAddUser}>{t("submit")}</button>

      <h2>{t("viewUsers")}</h2>
      {users.length === 0 ? (
        <p>{t("noUsers")}</p>
      ) : (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
