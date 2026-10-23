
document.addEventListener("DOMContentLoaded", () => {
    // --- Логика генерации случайных картинок (Исправленная) ---
    // Сервисы случайных картинок часто блокируются или падают.
    // Теперь используем надежный массив прямых красивых фотографий.
    const beaverImages = [
        "https://images.unsplash.com/photo-1601269007425-4c071d374464?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1596708304910-63ce77df6906?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1616239129528-76c2ceee0c5d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1629853920703-9bb590a3c202?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1597523178044-f9ebda256c9a?auto=format&fit=crop&w=800&q=80"
    ];
    let currentImageIndex = 0;

    const beaverImage = document.getElementById('beaverImage');
    const randomImageBtn = document.getElementById('randomImageBtn');

    if (beaverImage && randomImageBtn) {
        randomImageBtn.addEventListener('click', () => {
            randomImageBtn.disabled = true;
            randomImageBtn.textContent = "Загрузка...";
            beaverImage.style.opacity = 0.4;
            
            // Выбираем случайный индекс, который не равен текущему
            let newIndex = currentImageIndex;
            while (newIndex === currentImageIndex) {
                newIndex = Math.floor(Math.random() * beaverImages.length);
            }
            currentImageIndex = newIndex;
            
            beaverImage.src = beaverImages[currentImageIndex];
            
            beaverImage.onload = () => {
                beaverImage.style.opacity = 1;
                randomImageBtn.disabled = false;
                randomImageBtn.textContent = "Загрузить другое фото";
            };
            
            beaverImage.onerror = () => {
                beaverImage.style.opacity = 1;
                randomImageBtn.disabled = false;
                randomImageBtn.textContent = "Ошибка загрузки";
            };
        });
    }

    // --- Логика случайных фактов ---
    const facts = [
        "Зубы бобра никогда не перестают расти, поэтому им нужно постоянно что-то грызть.",
        "Бобры могут задерживать дыхание под водой на время до 15 минут.",
        "Хатки бобров имеют вход только под водой — это защищает их от хищников.",
        "Бобры — вторые по величине грызуны в мире после капибар.",
        "Бобры живут семьями. Молодые бобрята остаются с родителями до 2 лет."
    ];

    const factButton = document.getElementById('factButton');
    const factDisplay = document.getElementById('factDisplay');

    if (factButton && factDisplay) {
        factButton.addEventListener('click', () => {
            factDisplay.style.opacity = 0;
            
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * facts.length);
                factDisplay.textContent = "— " + facts[randomIndex];
                factDisplay.style.transition = "opacity 0.3s ease-in-out";
                factDisplay.style.opacity = 1;
            }, 150);
        });
    }
});
