import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex gap-2 items-center">
      <button
        className={`language-button ${i18n.language === 'en' ? 'active' : 'inactive'} flex items-center justify-center`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        {/* Pixel-art EN icon */}
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="12" fill="#fff" stroke="#000" strokeWidth="2"/>
          <text x="12" y="12" textAnchor="middle" fontFamily="'Press Start 2P', monospace" fontSize="10" fill="#232336">EN</text>
        </svg>
      </button>
      <button
        className={`language-button ${i18n.language === 'es' ? 'active' : 'inactive'} flex items-center justify-center`}
        onClick={() => changeLanguage('es')}
        aria-label="Cambiar a Español"
      >
        {/* Pixel-art ES icon */}
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="12" fill="#fff" stroke="#000" strokeWidth="2"/>
          <text x="12" y="12" textAnchor="middle" fontFamily="'Press Start 2P', monospace" fontSize="10" fill="#232336">ES</text>
        </svg>
      </button>
    </div>
  );
};

export default LanguageSwitcher; 