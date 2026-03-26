import React from "react";

export default function LanguageToggle({ setLang }) {
  return (
    <div>
      <button onClick={() => setLang("en")}>English</button>
      <button onClick={() => setLang("kn")}>ಕನ್ನಡ</button>
    </div>
  );
}