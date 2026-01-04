'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// .change-color tıklanınca body arka planını rastgele renge ayarlayın, aynı değeri .color içinde metin olarak gösterin (hex üretimi verilecek fonksiyonla).

//    Arka plan <body>i sadece button.change-colora tıkladıktan sonra belirlenecektir.
//    button.change-color öğesine her tıklamada <body> arka planı yeni rastgele bir renge boyanacaktır.
//    <body> ve span.color üzerinde aynı renk değerleri olacaktır.



