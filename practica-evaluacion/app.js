
const videosMap = {
  'Mia-khalifa': 'https://www.xvideos.com/channels/mia-khalifa',
  'Mami-kim': 'https://xorgasmo.com/tag/mami-kim-videos-porno-xorgasmo/',
  'Yessica-Pereira': 'https://xorgasmo.com/tag/jessica-pereira/',
  'Yailin': 'https://xorgasmo.com/search/Yailin+la+m%C3%A1s+viral',
};
/**
 * Redirige al canal de videos correspondiente al nombre (name).
 * @param {string} name El nombre clave del video/canal a buscar en videosMap.
 */
function irXVideos(name) {
 const url = videosMap[name];
    if (url) {
    window.location.href = url;
    } else {
    console.error(`Error: No se encontró una URL de video para el nombre: ${name}`);
  }
}
