export const WHATSAPP_NUMBER = "553484469591";
export const DISPLAY_PHONE = "+55 34 8446-9591";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
