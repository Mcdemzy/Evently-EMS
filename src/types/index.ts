export interface DarkModeProps {
  darkMode: boolean;
}

export interface Event {
  title: string;
  price: number;
  description: string;
  date: string;
  time: string;
  organizer: string;
  imageUrl: string;
}

export interface CardProps {
  title: string;
  price: number;
  description: string;
  date: string;
  time: string;
  organizer: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavBarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}