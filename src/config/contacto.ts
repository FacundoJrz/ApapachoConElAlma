// Datos públicos de contacto de Fundación Apapacho Con El Alma.
export const CONTACTO = {
  whatsappGeneral: '5493816399929',
  whatsappVoluntarios: '5493812155026',
  telefonoGeneralVisible: '+54 9 3816 39-9929',
  correo: 'apapacho.aca@gmail.com',
} as const;

export function crearEnlaceWhatsApp(numero: string, mensaje?: string) {
  const enlace = `https://wa.me/${numero}`;
  return mensaje ? `${enlace}?text=${encodeURIComponent(mensaje)}` : enlace;
}

export function crearEnlaceTelefono(numero: string) {
  return `tel:+${numero}`;
}

export function crearEnlaceCorreo(asunto?: string) {
  const enlace = `mailto:${CONTACTO.correo}`;
  return asunto ? `${enlace}?subject=${encodeURIComponent(asunto)}` : enlace;
}
