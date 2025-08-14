import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ta: {
        translation: {
          addUser: "புதிய பயனர் சேர்",
          name: "பெயர்",
          age: "வயது",
          submit: "சமர்ப்பி",
          viewUsers: "பயனர்கள் பட்டியல்",
          noUsers: "பயனர்கள் இல்லை",
        },
      },
    },
    lng: "ta", // Default Tamil
    fallbackLng: "ta",
    interpolation: { escapeValue: false },
  });

export default i18n;
