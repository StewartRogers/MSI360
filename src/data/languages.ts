import type { Language } from "../types";

const rtlLanguageCodes = new Set(["ar", "fa", "fa-x-nos", "prs", "ur"]);

export const languages: Language[] = [
  { code: "en", name: "English", flag: "🇨🇦", flagCode: "ca", ready: true },
  { code: "pa", name: "Punjabi", flag: "🇮🇳", flagCode: "in", ready: true },
  { code: "zh-Hans", name: "Mandarin", flag: "🇨🇳", flagCode: "cn", ready: true },
  { code: "yue", name: "Cantonese", flag: "🇭🇰", flagCode: "hk", ready: true },
  { code: "fil", name: "Tagalog", flag: "🇵🇭", flagCode: "ph", ready: true },
  { code: "fr", name: "French", flag: "🇫🇷", flagCode: "fr", ready: true },
  { code: "es", name: "Spanish", flag: "🇪🇸", flagCode: "es", ready: true },
  { code: "ko", name: "Korean", flag: "🇰🇷", flagCode: "kr", ready: true },
  { code: "de", name: "German", flag: "🇩🇪", flagCode: "de", ready: true },
  { code: "fa", name: "Iranian Persian", flag: "🇮🇷", flagCode: "ir", ready: true },
  { code: "hi", name: "Hindi", flag: "🇮🇳", flagCode: "in", ready: true },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳", flagCode: "vn", ready: true },
  { code: "ru", name: "Russian", flag: "🇷🇺", flagCode: "ru", ready: true },
  { code: "ar", name: "Arabic", flag: "🇸🇦", flagCode: "sa", ready: true },
  { code: "pt", name: "Portuguese (Portugal)", flag: "🇵🇹", flagCode: "pt", ready: true },
  { code: "ja", name: "Japanese", flag: "🇯🇵", flagCode: "jp", ready: true },
  { code: "it", name: "Italian", flag: "🇮🇹", flagCode: "it", ready: true },
  { code: "nl", name: "Dutch", flag: "🇳🇱", flagCode: "nl", ready: true },
  { code: "pl", name: "Polish", flag: "🇵🇱", flagCode: "pl", ready: true },
  { code: "nan", name: "Min Nan", flag: "🇹🇼", flagCode: "tw", ready: false },
  { code: "ur", name: "Urdu", flag: "🇵🇰", flagCode: "pk", ready: false },
  { code: "gu", name: "Gujarati", flag: "🇮🇳", flagCode: "in", ready: false },
  { code: "ro", name: "Romanian", flag: "🇷🇴", flagCode: "ro", ready: false },
  { code: "uk", name: "Ukrainian", flag: "🇺🇦", flagCode: "ua", ready: false },
  { code: "hu", name: "Hungarian", flag: "🇭🇺", flagCode: "hu", ready: false },
  { code: "sr", name: "Serbian", flag: "🇷🇸", flagCode: "rs", ready: false },
  { code: "ilo", name: "Ilocano", flag: "🇵🇭", flagCode: "ph", ready: false },
  { code: "hr", name: "Croatian", flag: "🇭🇷", flagCode: "hr", ready: false },
  { code: "prs", name: "Dari", flag: "🇦🇫", flagCode: "af", ready: false },
  { code: "ta", name: "Tamil", flag: "🇮🇳", flagCode: "in", ready: false },
  { code: "el", name: "Greek", flag: "🇬🇷", flagCode: "gr", ready: false },
  { code: "cs", name: "Czech", flag: "🇨🇿", flagCode: "cz", ready: false },
  { code: "fa-x-nos", name: "Persian (Farsi), n.o.s.", flag: "🇮🇷", flagCode: "ir", ready: false },
  { code: "ml", name: "Malayalam", flag: "🇮🇳", flagCode: "in", ready: false },
  { code: "bn", name: "Bengali", flag: "🇧🇩", flagCode: "bd", ready: false },
  { code: "tr", name: "Turkish", flag: "🇹🇷", flagCode: "tr", ready: false },
  { code: "ceb", name: "Cebuano", flag: "🇵🇭", flagCode: "ph", ready: false },
  { code: "id", name: "Indonesian", flag: "🇮🇩", flagCode: "id", ready: false },
  { code: "af", name: "Afrikaans", flag: "🇿🇦", flagCode: "za", ready: false },
  { code: "da", name: "Danish", flag: "🇩🇰", flagCode: "dk", ready: false }
];

export function isRtlLanguage(code: string) {
  return rtlLanguageCodes.has(code);
}
