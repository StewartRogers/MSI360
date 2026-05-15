import type { Language } from "../types";

const rtlLanguageCodes = new Set(["ar", "fa", "fa-x-nos", "prs", "ur"]);

export const languages: Language[] = [
  { code: "en", name: "English", flag: "🇨🇦", flagCode: "ca", ready: true },
  { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳", flagCode: "in", ready: true },
  { code: "zh-Hans", name: "普通话", flag: "🇨🇳", flagCode: "cn", ready: true },
  { code: "yue", name: "粵語", flag: "🇭🇰", flagCode: "hk", ready: true },
  { code: "fil", name: "Tagalog", flag: "🇵🇭", flagCode: "ph", ready: true },
  { code: "fr", name: "Français", flag: "🇫🇷", flagCode: "fr", ready: true },
  { code: "es", name: "Español", flag: "🇪🇸", flagCode: "es", ready: true },
  { code: "ko", name: "한국어", flag: "🇰🇷", flagCode: "kr", ready: true },
  { code: "de", name: "Deutsch", flag: "🇩🇪", flagCode: "de", ready: true },
  { code: "fa", name: "فارسی", flag: "🇮🇷", flagCode: "ir", ready: true },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", flagCode: "in", ready: true },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳", flagCode: "vn", ready: true },
  { code: "ru", name: "Русский", flag: "🇷🇺", flagCode: "ru", ready: true },
  { code: "ar", name: "العربية", flag: "🇸🇦", flagCode: "sa", ready: true },
  { code: "pt", name: "Português (Portugal)", flag: "🇵🇹", flagCode: "pt", ready: true },
  { code: "ja", name: "日本語", flag: "🇯🇵", flagCode: "jp", ready: true },
  { code: "it", name: "Italiano", flag: "🇮🇹", flagCode: "it", ready: true },
  { code: "nl", name: "Nederlands", flag: "🇳🇱", flagCode: "nl", ready: true },
  { code: "pl", name: "Polski", flag: "🇵🇱", flagCode: "pl", ready: true },
  { code: "nan", name: "Bân-lâm-gú", flag: "🇹🇼", flagCode: "tw", ready: true },
  { code: "ur", name: "اردو", flag: "🇵🇰", flagCode: "pk", ready: true },
  { code: "gu", name: "ગુજરાતી", flag: "🇮🇳", flagCode: "in", ready: true },
  { code: "ro", name: "Română", flag: "🇷🇴", flagCode: "ro", ready: true },
  { code: "uk", name: "Українська", flag: "🇺🇦", flagCode: "ua", ready: false },
  { code: "hu", name: "Magyar", flag: "🇭🇺", flagCode: "hu", ready: false },
  { code: "sr", name: "Српски", flag: "🇷🇸", flagCode: "rs", ready: false },
  { code: "ilo", name: "Ilokano", flag: "🇵🇭", flagCode: "ph", ready: false },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷", flagCode: "hr", ready: false },
  { code: "prs", name: "دری", flag: "🇦🇫", flagCode: "af", ready: false },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳", flagCode: "in", ready: false },
  { code: "el", name: "Ελληνικά", flag: "🇬🇷", flagCode: "gr", ready: false },
  { code: "cs", name: "Čeština", flag: "🇨🇿", flagCode: "cz", ready: false },
  { code: "fa-x-nos", name: "فارسی", flag: "🇮🇷", flagCode: "ir", ready: false },
  { code: "ml", name: "മലയാളം", flag: "🇮🇳", flagCode: "in", ready: false },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", flagCode: "bd", ready: false },
  { code: "tr", name: "Türkçe", flag: "🇹🇷", flagCode: "tr", ready: false },
  { code: "ceb", name: "Cebuano", flag: "🇵🇭", flagCode: "ph", ready: false },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩", flagCode: "id", ready: false },
  { code: "af", name: "Afrikaans", flag: "🇿🇦", flagCode: "za", ready: false },
  { code: "da", name: "Dansk", flag: "🇩🇰", flagCode: "dk", ready: false }
];

export function isRtlLanguage(code: string) {
  return rtlLanguageCodes.has(code);
}
