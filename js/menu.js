const MENU_DATA = {
  "restaurant": "ZERAFET",
  "currency": "₺",
  "categories": [
    {
      "name": "Çorbalar",
      "nameEn": "Soups",
      "items": [
        { "name": "Mercimek Çorbası", "description": "Geleneksel kırmızı mercimek, limon, baharat", "price": 120, "image": "images/soup1.jpg" },
        { "name": "Mantar Kremalı Çorba", "description": "Karışık mantar, krema, truffle yağı, çıtır ekmek", "price": 150, "image": "images/soup2.jpg" }
      ]
    },
    {
      "name": "Başlangıçlar",
      "nameEn": "Starters",
      "items": [
        { "name": "Kuzu Tartar", "description": "Kuzu eti, truffle yağı, parmesan cipsi, mikro yeşillikler", "price": 320, "image": "images/food1.jpg" },
        { "name": "Somon Carpaccio", "description": "İnce dilimlenmiş somon, kapari, limon emülsiyonu", "price": 280, "image": "images/food7.jpg" },
        { "name": "Burrata & Domates", "description": "Taze burrata, kiraz domates, fesleğen, balzamik reduksiyon", "price": 260, "image": "images/food4.jpg" },
        { "name": "Karides Tempura", "description": "Çıtır karides, wasabi mayo, ponzu sos", "price": 340, "image": "images/food8.jpg" },
        { "name": "Füme Et Tabağı", "description": "Dana füme, cornichon, hardal, grissini", "price": 300, "image": "images/food6.jpg" }
      ]
    },
    {
      "name": "Ana Yemekler",
      "nameEn": "Main Courses",
      "items": [
        { "name": "Kuzu Pirzola", "description": "7 saat pişirilmiş kuzu pirzola, pürüzlü patates, mevsim sebzeleri", "price": 680, "image": "images/about.jpg" },
        { "name": "Dana Bonfile", "description": "200g dana bonfile, truffle patates püresi, kırmızı şarap sosu", "price": 850, "image": "images/about.jpg" },
        { "name": "Levrek Fileto", "description": "Fırında levrek, kuşkonmaz, safran risotto", "price": 520, "image": "images/food7.jpg" },
        { "name": "Mantar Risotto", "description": "Karışık mantar, arborio pirinç, parmesan, truffle yağı", "price": 380, "image": "images/food8.jpg" },
        { "name": "Tavuk Göğsü", "description": "Izgara tavuk göğsü, tatlı patates püresi, tereyağı sosu", "price": 420, "image": "images/food3.jpg" },
        { "name": "Kuzu İncik", "description": "6 saat pişirilmiş kuzu incik, sebze jüsü, pürüzlü patates", "price": 720, "image": "images/about.jpg" },
        { "name": "Vejetaryen Tabak", "description": "Mevsim sebzeleri, humus, nar ekşisi, tahin sosu", "price": 340, "image": "images/food9.jpg" }
      ]
    },
    {
      "name": "Tatlılar",
      "nameEn": "Desserts",
      "items": [
        { "name": "Çikolata Sufle", "description": "Sıcak çikolata sufle, vanilya dondurma", "price": 220, "image": "images/dessert1.jpg" },
        { "name": "Crème Brûlée", "description": "Klasik vanilya crème brûlée, mevsim meyveleri", "price": 180, "image": "images/dessert2.jpg" },
        { "name": "Tiramisu", "description": "İtalyan tiramisu, mascarpone kreması, espresso", "price": 200, "image": "images/dessert3.jpg" },
        { "name": "Cheesecake", "description": "New York cheesecake, orman meyveleri sosu", "price": 190, "image": "images/dessert1.jpg" }
      ]
    },
    {
      "name": "İçecekler",
      "nameEn": "Beverages",
      "items": [
        { "name": "Ev Yapımı Limonata", "description": "Taze nane, limon, bal", "price": 80, "image": "images/drink1.jpg" },
        { "name": "Türk Kahvesi", "description": "Geleneksel Türk kahvesi, lokum ikramı", "price": 60, "image": "images/drink2.jpg" },
        { "name": "Espresso", "description": "İtalyan espresso, tek veya çift shot", "price": 70, "image": "images/drink2.jpg" },
        { "name": "Çay", "description": "Demlik çay, Türk çayı", "price": 30, "image": "images/drink3.jpg" },
        { "name": "Taze Sıkılmış Portakal Suyu", "description": "Günlük taze sıkılmış, katkısız", "price": 90, "image": "images/drink4.jpg" },
        { "name": "Meyve Smoothie", "description": "Mevsim meyveleri, yoğurt, bal", "price": 110, "image": "images/drink1.jpg" }
      ]
    }
  ]
};

function renderMenu(data) {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  container.innerHTML = '';

  data.categories.forEach((category, catIndex) => {
    const section = document.createElement('div');
    section.className = 'menu-category fade-in';
    section.style.transitionDelay = `${catIndex * 0.1}s`;

    let itemsHTML = '';
    category.items.forEach(item => {
      const imageHTML = item.image
        ? `<img src="${item.image}" alt="${item.name}" class="menu-item-image" loading="lazy">`
        : '';

      itemsHTML += `
        <div class="menu-item">
          <div class="menu-item-info">
            <div class="menu-item-name">${item.name}</div>
            <div class="menu-item-desc">${item.description}</div>
          </div>
          <div class="menu-item-price">${data.currency}${item.price}</div>
          ${imageHTML}
        </div>
      `;
    });

    section.innerHTML = `
      <h2 class="menu-category-title">${category.name}</h2>
      <div class="menu-category-en">${category.nameEn}</div>
      <div class="menu-category-divider"></div>
      ${itemsHTML}
    `;

    container.appendChild(section);
  });

  const fadeElements = container.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
}

async function loadMenu() {
  try {
    const response = await fetch('data/menu.json');
    if (!response.ok) throw new Error('fetch failed');
    const data = await response.json();
    renderMenu(data);
  } catch (error) {
    console.log('JSON fetch failed, using embedded data');
    renderMenu(MENU_DATA);
  }
}

document.addEventListener('DOMContentLoaded', loadMenu);
