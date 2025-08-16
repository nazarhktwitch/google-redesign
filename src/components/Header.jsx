import React from 'react';

const translations = {
  en: { about: 'About', store: 'Store', gmail: 'Gmail', images: 'Images', signIn: 'Sign in' },
  ru: { about: 'О Google', store: 'Магазин', gmail: 'Почта', images: 'Картинки', signIn: 'Войти' },
};

const getLanguage = () => {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language.split('-')[0];
  return translations[lang] ? lang : 'en';
};

const lang = getLanguage();
const t = (key) => translations[lang][key] || translations.en[key];


const Header = () => {
  return (
    <header className="w-full p-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <nav className="flex justify-end items-center space-x-6 text-sm">
        <a href="https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">
          {t('about')}
        </a>
        <a href="https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">
          {t('store')}
        </a>
        <a href="https://mail.google.com" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">
          {t('gmail')}
        </a>
        <a href="https://www.google.com/imghp" className="text-gray-300 hover:text-white hover:underline transition-colors duration-200">
          {t('images')}
        </a>
        <button className="p-2 rounded-full hover:bg-gray-700/50 transition-colors duration-200">
          <svg className="w-6 h-6 text-gray-200" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
        </button>
        <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-500/40">
          {t('signIn')}
        </button>
      </nav>
    </header>
  );
};

export default Header;