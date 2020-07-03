const task3Element = document.getElementById('task-3');

function showAlert(){
    alert("prem");
}

function showAlertWithName(name){
    alert(name);
}

function showAlertWithName3(name1, name2, name3){
    alert(`${name1} ${name2} ${name3}`);
}

task3Element.addEventListener('click', showAlert);

showAlert();
showAlertWithName("Lakshmi")
showAlertWithName3("prem","the great", "asok")