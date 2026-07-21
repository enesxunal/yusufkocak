import { SITE } from "./constants";

const DEFAULT_MESSAGE =
  "Ücretsiz ön görüşme için randevu planlamak istiyorum.";

export function buildWhatsAppUrl(name: string, message: string): string {
  const trimmedMessage = message.trim() || DEFAULT_MESSAGE;
  const body = `Merhaba, ben ${name.trim()}.

${trimmedMessage}`;

  return `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(body)}`;
}

export { DEFAULT_MESSAGE };
