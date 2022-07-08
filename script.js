const carts = document.querySelectorAll('[data-cart]');

carts.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    const currentElement = e.target;
    if (!currentElement.classList.contains('reveal-cart')) {
      carts.forEach((element, currentIndexEl) => {
        if (index != currentIndexEl) {
          element.classList.remove('reveal-cart');

          element
            .getElementsByClassName('info')[0]
            .classList.remove('show-text');
        }
      });
      currentElement.classList.add('reveal-cart');

      currentElement
        .getElementsByClassName('info')[0]
        .classList.add('show-text');
    }
  });
});
