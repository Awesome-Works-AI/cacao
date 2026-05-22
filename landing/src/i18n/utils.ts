import { ui, defaultLang, type Lang, type UiKey } from './ui';

function baseNoSlash(): string {
  // import.meta.env.BASE_URL is '/cacao/' on GH Pages, '/' locally.
  // Strip trailing slash so we can concatenate without doubling.
  return import.meta.env.BASE_URL.replace(/\/$/, '');
}

function stripBase(pathname: string): string {
  const base = baseNoSlash();
  if (base && pathname.startsWith(base)) return pathname.slice(base.length) || '/';
  return pathname;
}

export function getLangFromUrl(url: URL): Lang {
  const pathname = stripBase(url.pathname);
  const [, lang] = pathname.split('/');
  if (lang === 'en') return 'en';
  if (lang === 'vi') return 'vi';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const base = baseNoSlash();
  const clean = path.startsWith('/') ? path : `/${path}`;
  const localized = lang === defaultLang
    ? (clean === '/' ? '/' : clean)
    : (clean === '/' ? '/en/' : `/en${clean}`);
  return base + localized;
}

export function getAltLangPath(currentPath: string, targetLang: Lang): string {
  const stripped = stripBase(currentPath).replace(/^\/en(\/|$)/, '/');
  return getLocalizedPath(stripped, targetLang);
}
