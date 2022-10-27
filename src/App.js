import "./App.css";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Dropdown />
      <h1>{t("title")}</h1>
      <h1>{t("text")}</h1>
      <h1>{t("text2")}</h1>
      <h1>{t("text3")}</h1>
    </div>
  );
}

export default App;
