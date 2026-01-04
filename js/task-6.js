'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// data-create ile 1–100 doğrulayın; geçerliyse #boxes’a 30px’den başlayıp her seferinde +10px büyüyen, rastgele renkli karelerden koleksiyon ekleyin ve input’u temizleyin. Yeniden Create önceki koleksiyonu tamamen değiştirir. data-destroy tüm kareleri temizler.

