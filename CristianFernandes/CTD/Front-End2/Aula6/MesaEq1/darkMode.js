function dark() {
  let element = document.querySelector('body');
  element.classList.toggle('dark-mode');

  let title = document.querySelector('h1');
  title.classList.toggle('h1Dark');

  const items = document.querySelectorAll(".item");
  items.forEach(item => {
    item.classList.toggle("itemDark");
  })

  const documentText = document.querySelectorAll('h2 , p');
  documentText.forEach(i => {
    i.classList.toggle('textDark');
  })
  
//Estilização do Botão 
  let btn = document.querySelector('.btnDark');
  btn.classList.toggle('btnLight');
}