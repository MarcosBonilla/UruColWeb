document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menuItems");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardTitle = card.querySelector('.card-title');
        const arrow = card.querySelector('.arrow');
        const cardDesc = card.querySelector('.card-desc');

        cardDesc.style.maxHeight = null;

        cardTitle.addEventListener('click', () => {
            const isOpen = card.classList.contains('open');

            if (isOpen) {
                card.classList.remove('open');
                cardDesc.style.maxHeight = null;
                arrow.classList.remove('rotate');
            } else {
                card.classList.add('open');
                cardDesc.style.maxHeight = cardDesc.scrollHeight + 'px';
                arrow.classList.add('rotate');
            }
        });
    });
});


function abrirFormulario(servicio) {
    const contacto = document.getElementById("Contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      const textarea = document.querySelector("textarea[name='mensaje']");
      if (textarea) {
        textarea.value = `Hola, estoy interesado en el servicio de ${servicio}. Me gustaría recibir un presupuesto.`;
      }
    }, 500);
  }
