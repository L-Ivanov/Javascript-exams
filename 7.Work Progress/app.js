// function solve() {
//     let firstName = document.getElementById('fname');
//     let lastName = document.getElementById('lname');
//     let email = document.getElementById('email');
//     let birthDate = document.getElementById('birth');
//     let position = document.getElementById('position');
//     let salary = document.getElementById('salary');
//     let submitButtonHireWorkers = document.getElementById('add-worker');
//     submitButtonHireWorkers.addEventListener('click', submitWorkers);
//     let buttonFired = document.createElement('button');
//     let buttonEdit = document.createElement('button');
//
//
//     let paragraph = document.getElementById('message');
//     let spanTake = document.getElementById('sum');
//
//     function submitWorkers(e){
//         e.preventDefault();
//         if(firstName.value === '' && lastName.value === '' && email.value === '' && birthDate.value === '' && position.value === '' && salary.value === ''){
//             return;
//         }
//         let tableBody = document.getElementById('tbody');
//         let tr = document.createElement('tr');
//         let firstNameTd = document.createElement('td');
//         let lastNameTd = document.createElement('td');
//         let emailTd = document.createElement('td');
//         let birthDateTd = document.createElement('td');
//         let positionTd = document.createElement('td');
//         let salaryTd = document.createElement('td');
//         let fName = firstName.value;
//         let lName = lastName.value;
//         let emailName = email.value;
//         let birthD = birthDate.value;
//         let positionName = position.value;
//         let salaryName = salary.value;
//         firstNameTd.textContent = fName
//         lastNameTd.textContent = lName
//         emailTd.textContent = emailName
//         birthDateTd.textContent = birthD
//         positionTd.textContent = positionName
//         salaryTd.textContent = salaryName
//         buttonFired.textContent = 'Fired';
//         buttonEdit.textContent = 'Edit';
//         let buttonAppend = document.createElement('td');
//         buttonAppend.appendChild(buttonFired);
//         buttonAppend.appendChild(buttonEdit);
//         tr.appendChild(firstNameTd);
//         tr.appendChild(lastNameTd);
//         tr.appendChild(emailTd);
//         tr.appendChild(birthDateTd);
//         tr.appendChild(positionTd);
//         tr.appendChild(salaryTd);
//         tr.appendChild(buttonAppend);
//         tableBody.appendChild(tr);
//         spanTake.textContent = `${salaryName} + ${salary.value}`;
//         // let currentTotalPrice = spanTake.textContent;
//         // let totalPrice = currentTotalPrice + salaryName;
//         // spanTake.textContent = totalPrice;
//         paragraph.append(spanTake);
//         firstName.textContent = '';
//         lastName.value = '';
//         email.value = '';
//         birthDate.value = '';
//         position.value = '';
//         salary.value = '';
//
//
//
//     }
//
//
//
//
// }
// solve()


function solve() {
    let employees = [];
    let emplSum = []
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birthDate = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let submitButtonHireWorkers = document.getElementById('add-worker');
    submitButtonHireWorkers.addEventListener('click', submitWorkers);
    let buttonFired = document.createElement('button');
    let buttonEdit = document.createElement('button');


    let paragraph = document.getElementById('message');
    let spanTake = document.getElementById('sum');
    let tr = document.createElement('tr');
    function submitWorkers(e) {
        e.preventDefault();
        if (firstName.value === '' && lastName.value === '' && email.value === '' && birthDate.value === '' && position.value === '' && salary.value === '') {
            return;
        }
        let tableBody = document.getElementById('tbody');



        let fName = firstName.value;
        let lName = lastName.value;
        let emailName = email.value;
        let birthD = birthDate.value;
        let positionName = position.value;
        let salaryName = salary.value;

        let salarySum = 0;

        let employee = {
            firstName: fName,
            lastName: lName,
            email: emailName,
            birthDay: birthD,
            position: positionName,
            salary: salaryName
        };

        let buttonAppend = document.createElement('td');



        let firstNameTd = document.createElement('td');
        let lastNameTd = document.createElement('td');
        let emailTd = document.createElement('td');
        let birthDateTd = document.createElement('td');
        let positionTd = document.createElement('td');
        let salaryTd = document.createElement('td');

        firstNameTd.textContent = employee.firstName;
        lastNameTd.textContent = employee.lastName;
        emailTd.textContent = employee.email;
        birthDateTd.textContent = employee.birthDay;
        positionTd.textContent = employee.position;
        salaryTd.textContent = employee.salary;

        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(birthDateTd);
        tr.appendChild(positionTd);
        tr.appendChild(salaryTd);
        buttonFired.textContent = 'Fired';
        buttonEdit.textContent = 'Edit';
        buttonAppend.appendChild(buttonFired);
        buttonAppend.appendChild(buttonEdit);
        tr.appendChild(buttonAppend);

        tableBody.appendChild(tr);

        emplSum.push(employee)
        employees.push(tableBody);



        salarySum = 0;
        emplSum.forEach(empl => {
            salarySum += Number(empl.salary);

        })


        spanTake.textContent = `${salarySum.toFixed(2)}`;
        // let currentTotalPrice = spanTake.textContent;
        // let totalPrice = currentTotalPrice + salaryName;
        // spanTake.textContent = totalPrice;
        paragraph.append(spanTake);
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        birthDate.value = '';
        position.value = '';
        salary.value = '';

        buttonEdit.addEventListener('click', (e)=> {
            tr.removeChild(firstNameTd);
            tr.removeChild(lastNameTd);
            tr.removeChild(emailTd);
            tr.removeChild(birthDateTd);
            tr.removeChild(positionTd);
            tr.removeChild(salaryTd);
            firstName.value = fName;
            lastName.value = lName;
            email.value = emailName;
            birthDate.value = birthD;
            position.value = positionName;
            salary.value = salaryName;


        });
       buttonFired.addEventListener('click', ()=>{
           tr.removeChild(firstNameTd);
           tr.removeChild(lastNameTd);
           tr.removeChild(emailTd);
           tr.removeChild(birthDateTd);
           tr.removeChild(positionTd);
           tr.removeChild(salaryTd);
           tr.removeChild(buttonAppend);

           emplSum.forEach(empl => {
               salarySum -= Number(empl.salary);
               spanTake.textContent = `${salarySum.toFixed(2)}`;

           })
       })

    }



}

solve()