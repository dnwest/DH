function dark() {
    let element = document.querySelector('body');
    element.classList.toggle('dark-mode');

    let title = document.querySelector('h1');
    title.classList.toggle('h1Dark');

    let item = document.querySelector('.item');
    item.classList.toggle('itemDark');

    let h2 = document.querySelector('h2');
    h2.classList.toggle('textDark');

    let p = document.querySelector('p');
    p.classList.toggle('textDark');
  }