import type { Language } from "../i18n/translations";

export interface ThemeState {
  theme: "light" | "dark";
  language: Language;
}

export function getStoredTheme(): ThemeState {
  if (typeof window === "undefined") {
    return { theme: "light", language: "es" };
  }
  
  const stored = localStorage.getItem("jcm-theme");
  if (stored) {
    return JSON.parse(stored);
  }
  return { theme: "light", language: "es" };
}

export function setStoredTheme(state: ThemeState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("jcm-theme", JSON.stringify(state));
}
