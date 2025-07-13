import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex gap-2 items-center">
      <button
        className={`language-button ${i18n.language === 'en' ? 'active' : 'inactive'}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`language-button ${i18n.language === 'es' ? 'active' : 'inactive'}`}
        onClick={() => changeLanguage('es')}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher; 