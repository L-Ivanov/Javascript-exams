window.addEventListener('load', solve);

function solve() {
    let buttonE = document.getElementsByTagName('button')[0];
    let inputForClientName = document.getElementById('client-name');
    let inputForClientPhone = document.getElementById('client-phone');
    let description = document.getElementById('description');
    let section = document.getElementById('received-orders');
    let optionComputer = document.getElementsByTagName('option')[0];
    let optionPhone = document.getElementsByTagName('option')[1];
    let sectionCompletedOrders = document.getElementById('completed-orders');

    buttonE.addEventListener('click', (e) => {
        e.preventDefault();
        if (optionComputer.value) {
            let client = inputForClientName.value;
            let phone = inputForClientPhone.value;
            let description1 = description.value;
            let firstDiv = document.createElement('div');
            let h2 = document.createElement('h2');
            h2.textContent = "Product type for repair: " + optionComputer.value;
            let h3 = document.createElement('h3');
            h3.textContent = "Client information: " + client + ", " + phone;
            let h4 = document.createElement('h4');
            h4.textContent = "Description of the problem: " + description1;

            let startButton = document.createElement('button');
            startButton.className = 'start-btn';

            startButton.textContent = 'Start repair';
            let finishButton = document.createElement('button');
            firstDiv.className = 'container';
            finishButton.textContent = 'Finish repair';
            finishButton.className = 'finish-btn';
            firstDiv.appendChild(h2);
            firstDiv.appendChild(h3);
            firstDiv.appendChild(h4);
            firstDiv.appendChild(startButton);
            firstDiv.appendChild(finishButton);
            section.appendChild(firstDiv);
            finishButton.disabled = true;
            inputForClientName.value = "";
            inputForClientPhone.value = "";
            description.value = "";
            startButton.addEventListener("click", (e) => {
                e.preventDefault();
                startButton.disabled = true;
                finishButton.disabled = false;


            });
            finishButton.addEventListener("click", (e) => {
                e.preventDefault();
                firstDiv.removeChild(startButton);
                firstDiv.removeChild(finishButton);
                sectionCompletedOrders.appendChild(firstDiv);

            })
            let clearButton = document.querySelector('.clear-btn');
            clearButton.addEventListener('click', (e) => {
                e.preventDefault();
                sectionCompletedOrders.removeChild(firstDiv);
            })

        }else if(optionPhone.value) {
            let client = inputForClientName.value;
            let phone = inputForClientPhone.value;
            let description1 = description.value;
            let firstDiv = document.createElement('div');
            let h2 = document.createElement('h2');
            h2.textContent = "Product type for repair: " + optionPhone.value;
            let h3 = document.createElement('h3');
            h3.textContent = "Client information: " + client + ", " + phone;
            let h4 = document.createElement('h4');
            h4.textContent = "Description of the problem: " + description1;

            let startButton = document.createElement('button');
            startButton.className = 'start-btn';

            startButton.textContent = 'Start repair';
            let finishButton = document.createElement('button');
            firstDiv.className = 'container';
            finishButton.textContent = 'Finish repair';
            finishButton.className = 'finish-btn';
            firstDiv.appendChild(h2);
            firstDiv.appendChild(h3);
            firstDiv.appendChild(h4);
            firstDiv.appendChild(startButton);
            firstDiv.appendChild(finishButton);
            section.appendChild(firstDiv);
            finishButton.disabled = true;
            inputForClientName.value = "";
            inputForClientPhone.value = "";
            description.value = "";
            startButton.addEventListener("click", (e) => {
                e.preventDefault();
                startButton.disabled = true;
                finishButton.disabled = false;


            });
            finishButton.addEventListener("click", (e) => {
                e.preventDefault();
                firstDiv.removeChild(startButton);
                firstDiv.removeChild(finishButton);
                sectionCompletedOrders.appendChild(firstDiv);

            })
            let clearButton = document.querySelector('.clear-btn');
            clearButton.addEventListener('click', (e) => {
                e.preventDefault();
                sectionCompletedOrders.removeChild(firstDiv);
            })
        }


    })

}