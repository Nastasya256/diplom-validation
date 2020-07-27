//E6 class
class TypeWriter{
  constructor(txtElement, words, wait = 3000){
    this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;

  }
type(){
  const current = this.wordIndex % this.words.length;

   const fullTxt = this.words[current];

  // проверка на удаление
  if(this.isDeleting) {
     // удаляем буквы
     this.txt = fullTxt.substring(0, this.txt.length - 1);
 } else {
    // добавляем буквы
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  //Скорость
  let typeSpeed = 300;
  if(this.isDeleting){
    typeSpeed /=2;
  }

  //если слово полностью написано
  if(!this.isDeleting && this.txt === fullTxt) {
//добавим паузу в конце
    typeSpeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    //переходим к другому слову
    this.wordIndex++;
    //пауза перед началом
    typeSpeed = 500;
  }


  setTimeout(() => this.type(), typeSpeed);

}

}



document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, wait);
}
