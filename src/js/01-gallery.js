import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',    // Alt açıklamaları kullan
  captionPosition: 'bottom',  // Alt kısımda göster
  captionDelay: 250,      // 250ms gecikmeyle göster
});
