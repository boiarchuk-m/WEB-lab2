
function validateForm() {
    let isNotValid = false;
    const nameRegex = /^[А-Яа-яІіЇї]{3,} [А-Яа-яІіЇї]\.[А-Яа-яІіЇї]\.$/;
    const IDcardRegex =  /^[А-ЯІЇЄ|A-Z]{1,2}\s[№][0-9]{1,6}$/;
    const facultyRegex = /[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]{4}/;
    const birthdateRegex = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
    const addressRegex = /^[м][.][ ][a-zA-Zа-яА-ЯІіЇїҐґЄє-]+/;

    const Name= document.getElementById('name');
    const name = Name.value
    if ( !nameRegex.test(name)) {

        alert("Поле 'ПІБ' заповнене не правильно. Правильний варіант ТТТТТТ Т.Т.");
        isNotValid = true
        Name.style.border = '1px solid red'
    }
    else{
        Name.style.border = '1px solid black'
    }

    const IDcard = document.getElementById('IDcard');
    const idcard = IDcard.value
    if (idcard == null || idcard.length != 10 || !IDcardRegex.test(idcard)) {
        if (!isNotValid) {
            alert("Введіть правильну ID-card");
        }
        IDcard.style.border = '1px solid red'
        isNotValid = true
    }
    
    const Faculty = document.getElementById('faculty');
    const faculty = Faculty.value
    if (faculty == null || faculty.length != 4 || !facultyRegex.test(faculty)) {
        if (!isNotValid) {
            alert("Введіть правильний факультет");
        }
        Faculty.style.border = '1px solid red'
        isNotValid = true
    }

    const Birthdate = document.getElementById('birthdate');
    const birthdate = Birthdate.value
    if (birthdate == null || birthdate.length != 10 || !birthdateRegex.test(birthdate)) {
        if (!isNotValid) {
            alert("Введіть правильну дату народження");
        }
        Birthdate.style.border = '1px solid red'
        isNotValid = true
    }

    const Address = document.getElementById('address');
    const address = Address.value
    if (address == null || address.length < 4 || !addressRegex.test(address)) {
        if (!isNotValid) {
            alert("Введіть правильну адресу");
        }
        Address.style.border = '1px solid red'
        isNotValid = true
    }
    if(!isNotValid){
        document.getElementById('name-value').innerHTML = name;
        document.getElementById('IDcard-value').innerHTML = idcard;
        document.getElementById('faculty-value').innerHTML = faculty;
        document.getElementById('birthdate-value').innerHTML = birthdate;
        document.getElementById('address-value').innerHTML = address;   
        
        const responseBlock = document.getElementById('response-block');
        responseBlock.style.display = 'block'
    }
    
    return false;
}


const createTable = () => {
    const tbody = document.createElement('tbody');
    
    for (let i = 0; i < 6; i++) {
      const tr = document.createElement('tr');
      tr.id = 'tr' + (i + 1);
  
      for (let j = 0; j < 6; j++) {
        const n = i * 6 + j + 1;
        const td = document.createElement('td');
        td.innerHTML = n;
        td.id = 'td' + n;
  
        tr.appendChild(td);
      }
  
      tbody.appendChild(tr);
    }
  
    table.appendChild(tbody);
  };
  
createTable();

const td4 = document.getElementById('td4');
const color = document.getElementById('color');

const elemChangeColorRandom = (elem) => {
    let text_color = getRandomColor();
    let bg_color = getRandomColor();
    while (text_color === bg_color) {
        text_color = getRandomColor();
    }
    elem.style.backgroundColor = bg_color;
    elem.style.color = text_color;
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const elemChangeColor = (elem) => {
    elem.style.backgroundColor = color.value;
    elem.style.color = "black";
};

const diagonalChangeColor = (elem) => {
    let rowCount = table.rows.length;
    num = 6
    el = 'td'+num
    var tdn = document.getElementById('td'+num);
    tdn.style.backgroundColor = color.value;
    tdn.style.color = "black";
    for (let i =1; i<rowCount; i+=1){
        num = num + 5
        var tdn = document.getElementById('td'+num);
        tdn.style.backgroundColor = color.value;
        tdn.style.color = "black";
    }
};

td4.addEventListener('mouseover', () => elemChangeColorRandom(td4));
td4.addEventListener('click', () => elemChangeColor(td4));
td4.addEventListener('dblclick', () => diagonalChangeColor(td4));
