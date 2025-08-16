import React from 'react';

const translations = {
  en: {
    country: 'United States',
    advertising: 'Advertising',
    business: 'Business',
    howSearchWorks: 'How Search works',
    privacy: 'Privacy',
    terms: 'Terms',
    settings: 'Settings',
  },
  ru: {
    country: 'Россия',
    advertising: 'Реклама',
    business: 'Для бизнеса',
    howSearchWorks: 'Всё о Поиске',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
    settings: 'Настройки',
  },
};

const getLanguage = () => {
  if (typeof navigator === 'undefined') return 'en';
  const lang = navigator.language.split('-')[0];
  return translations[lang] ? lang : 'en';
};

const lang = getLanguage();
const t = (key) => translations[lang][key] || translations.en[key];

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-sm text-gray-400 text-sm animate-fade-in-up border-t border-gray-500/30" style={{ animationDelay: '1s' }}>
      <div className="px-8 py-4 border-b border-gray-500/30">
        <p>{t('country')}</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-4 space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
          <a href="https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2" className="hover:underline hover:text-white transition-colors">{t('advertising')}</a>
          <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2" className="hover:underline hover:text-white transition-colors">{t('business')}</a>
          <a href="https://google.com/search/howsearchworks/?fg=1" className="hover:underline hover:text-white transition-colors">{t('howSearchWorks')}</a>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          <a href="https://policies.google.com/privacy?hl=en&fg=1" className="hover:underline hover:text-white transition-colors">{t('privacy')}</a>
          <a href="https://policies.google.com/terms?hl=en&fg=1" className="hover:underline hover:text-white transition-colors">{t('terms')}</a>
          <a href="#" className="hover:underline hover:text-white transition-colors">{t('settings')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;