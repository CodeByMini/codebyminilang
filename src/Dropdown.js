import React, { useState } from "react";
import "./Dropdown.css";
import { useTranslation } from "react-i18next";

export default function Dropdown() {
  const { t, i18n } = useTranslation();
  const [currentLang, setLanguage] = useState(i18n.language);

  const changeLanguageHandler = (lang) => {
    console.log(lang);
    console.log(t("title"));
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <div className="dropdown">
      <button className="dropbtn">{t("languages." + currentLang)}</button>
      <div className="dropdown-content">
        <div
          className="language"
          onClick={() => {
            changeLanguageHandler("sv");
          }}
        >
          {t("languages.sv")}
        </div>
        <div
          className="language"
          onClick={() => {
            changeLanguageHandler("en");
          }}
        >
          {t("languages.en")}
        </div>
      </div>
    </div>
  );
}
