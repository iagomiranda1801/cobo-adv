export const WHATSAPP_NUMBER = "553484469591";
export const DISPLAY_PHONE = "+55 34 8446-9591";
export const STREET_ADDRESS = "Rua Episcopal, nº 71, sala 302";
export const DISTRICT_ADDRESS = "Bairro Mercês, Uberaba/MG";
export const FULL_ADDRESS = `${STREET_ADDRESS}, ${DISTRICT_ADDRESS}`;
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
