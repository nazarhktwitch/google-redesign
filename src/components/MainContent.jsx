import React from 'react';
import GoogleLogo from './GoogleLogo';
import SearchBar from './SearchBar';

const translations = {
  en: { googleSearch: 'Google Search', feelingLucky: "I'm Feeling Lucky" },
  ru: { googleSearch: 'Поиск в Google', feelingLucky: 'Мне повезёт!' },
};

const getLanguage = () => {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language.split('-')[0];
  return translations[lang] ? lang : 'en';
};

const lang = getLanguage();
const t = (key) => translations[lang][key] || translations.en[key];

const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-16 sm:pt-24 pb-24 px-4">
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <GoogleLogo />
      </div>
      <form
        action="https://www.google.com/search"
        method="GET"
        target="_top"
        className="w-full flex flex-col items-center"
      >
        <div className="w-full max-w-xl lg:max-w-2xl mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button
            type="submit"
            className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 text-gray-200 px-6 py-2.5 rounded-md transform transition-all duration-300 hover:bg-gray-700/80 hover:border-blue-400 hover:text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {t('googleSearch')}
          </button>
          <button
            type="submit"
            name="btnI"
            value={t('feelingLucky')}
            className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 text-gray-200 px-6 py-2.5 rounded-md transform transition-all duration-300 hover:bg-gray-700/80 hover:border-green-400 hover:text-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/20"
          >
            {t('feelingLucky')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainContent;