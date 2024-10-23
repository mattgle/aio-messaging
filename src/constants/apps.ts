import WhatsAppLogo from '@/assets/whatsappLogo.png';
import TelegramLogo from '@/assets/telegramLogo.png';
import { TELEGRAM_URL, WHATSAPP_URL } from './urls';

export interface App {
  logo: string;
  name: string;
  url: string;
}

export const MOCKED_APPS = [
  {
    logo: WhatsAppLogo,
    name: 'WhatsApp',
    url: WHATSAPP_URL
  },
  {
    logo: TelegramLogo,
    name: 'Telegram',
    url: TELEGRAM_URL
  }
];
