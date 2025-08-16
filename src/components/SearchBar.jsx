import React from 'react';

const translations = {
  en: {
    searchPlaceholder: 'Search Google or type a URL',
    voiceSearch: 'Search by voice',
    imageSearch: 'Search by image',
  },
  ru: {
    searchPlaceholder: 'Введите поисковый запрос или URL',
    voiceSearch: 'Голосовой поиск',
    imageSearch: 'Поиск по картинке',
  },
};

const getLanguage = () => {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language.split('-')[0];
  return translations[lang] ? lang : 'en';
};

const lang = getLanguage();
const t = (key) => translations[lang][key] || translations.en[key];

const SearchBar = () => {
  return (
    <div className="relative w-full group transition-shadow duration-300 rounded-full focus-within:shadow-lg focus-within:shadow-blue-500/30">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <svg className="h-5 w-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
      <input
        type="text"
        name="q"
        className="block w-full bg-gray-800/60 backdrop-blur-sm border border-gray-600 hover:border-gray-500 rounded-full py-3 pl-12 pr-16 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-gray-700/80 transition-all duration-300 shadow-md hover:shadow-lg focus:shadow-xl"
        placeholder={t('searchPlaceholder')}
      />
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center space-x-3">
        <button type="button" className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200" title={t('voiceSearch')}>
          <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        </button>
        <button type="button" className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200" title={t('imageSearch')}>
           <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;