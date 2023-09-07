// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const button = document.getElementById("button");
const userForm = document.querySelector("#cretionForm");


const form = document.forms.creationForm;

const nameIn = form.elements.fio; 
const phoneIn = form.elements.phone; 
const dateIn = form.elements.birthday; 
const emailIn = form.elements.email; 

class User {
  constructor (fio, phone, birthday, email){
    this.fio = fio;
    this.phone = phone;
    this.birthday = birthday;
    this.email = email;
  }
};

button.onclick = () => {
  const item = new User(nameIn.value, phoneIn.value, dateIn.value, emailIn.value);
  console.log(item);

outBlock.innerHTML += `<form>
<p>FIO: ${ item.fio}</p>
<p>Tel.: ${ item.phone}</p>
<p>Birthday: ${item.birthday}</p>
<p>Email: ${item.email}</p>
</form>`;
};
