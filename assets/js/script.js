const title = document.querySelector('#title');
const myList = document.querySelector('#myList');
const myListAll = document.querySelectorAll('#myList li');
const myListGet = document.getElementsByClassName('myListLi');
const firstPar = document.querySelector('#firstPar');
const num1 = document.querySelector('#num1');
const myOption = document.querySelectorAll('#mySelect option');
const lightning = document.querySelector('#lightning');
const myToggle = document.querySelector('#myToggle');
const myTable = document.querySelector('#myTable');

const myListGetArray = Array.from(myListGet);

const myElements = ['nuovo elemento 1', 'nuovo elemento 2', 'nuovo elemento 3'];

// console.log(document);
// console.log(document.body);

console.log(myListAll);
console.log(myListGet);
console.log(myListGetArray);

console.log(title.textContent);
firstPar.textContent = 'Sono scritto da Javascript';

console.log(Number(num1.value)); // TUTTO quello che arriva da un form è testo: se il dato di un campo type="number" ci serve come numero, va convertito con Number()
console.log(4);

myOption.forEach((option) => {
	console.log(option.value);
});

myListAll.forEach((element) => {
	element.textContent += ' della lista myList';
});

myToggle.addEventListener('click', () => {
	lightning.classList.toggle('light');
});

for (let i = 0; i < myElements.length; i++) {
    const newLi = document.createElement('li');
    newLi.textContent = myElements[i];
    myList.appendChild(newLi);
}

for (let i = 0; i < myElements.length; i++) {
    const newTr = document.createElement('tr');
    const tdId = document.createElement('td');
    tdId.textContent = i + 1;
    const nameTd = document.createElement('td');
    nameTd.textContent = myElements[i];
    newTr.appendChild(tdId);
    newTr.appendChild(nameTd);
    myTable.appendChild(newTr);
}
