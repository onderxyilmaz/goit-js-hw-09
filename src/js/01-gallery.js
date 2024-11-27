const images = [
    {
        preview: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Mountain Under Stars",
    },
    {
        preview: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Beautiful Sunset",
    },
    {
        preview: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Ocean Waves",
    },
    {
        preview: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Forest Lake",
    },
    {
        preview: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Northern Lights",
    },
    {
        preview: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Autumn Forest",
    },
    {
        preview: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Mountain Lake",
    },
    {
        preview: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Seashore Sunset",
    },
    {
        preview: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400",
        original: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260",
        description: "Mountain Valley",
    }
];

const gallery = document.querySelector('.gallery');

const createGalleryMarkup = images => {
    return images
        .map(({ preview, original, description }) => `
            <li class="gallery-item">
                <a class="gallery-link" href="${original}">
                    <img 
                        class="gallery-image" 
                        src="${preview}" 
                        alt="${description}" 
                    />
                </a>
            </li>
        `)
        .join('');
};

gallery.innerHTML = createGalleryMarkup(images);

document.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom'
    });
});