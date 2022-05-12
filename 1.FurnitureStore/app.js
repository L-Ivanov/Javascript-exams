window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add');
    addButtonElement.addEventListener('click',addClickHandler );
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const furnitureListElement = document.getElementById('furniture-list');
    let contentsRowElement = document.createElement('tr');
    let totalPriceElement = document.querySelector('.total-price');
    const price = document.getElementById('price');
    function addClickHandler(e){
        e.preventDefault();
        let mode = model.value;
        let yea = Number(year.value);
        let pri = Number(price.value);
        let descr = description.value;
        if(!model.value || !description.value){
            return;
        }
        if(yea <=0 || price<=0){
            return;
        }
        let rowElement = document.createElement('tr');
        let modelCellElement = document.createElement('td');
        let infoButtonElement= document.createElement('button');
        let buyButtonElement = document.createElement('button');
        let yearContentElement = document.createElement('td');
        let descriptionContentElement = document.createElement('td');
        infoButtonElement.textContent = 'More Info';
        buyButtonElement.textContent = 'Buy it';

        modelCellElement.textContent = mode;
        let priceCellElement = document.createElement('td');
        priceCellElement.textContent = pri.toFixed(2);

        let actionsCellElement = document.createElement('td');
        actionsCellElement.appendChild(infoButtonElement);
        actionsCellElement.appendChild(buyButtonElement);
        rowElement.classList.add('info');
        infoButtonElement.classList.add('moreBtn');
        infoButtonElement.addEventListener('click', infoButton);
        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionsCellElement);
        rowElement.appendChild(actionsCellElement);
        furnitureListElement.appendChild(rowElement);
        contentsRowElement.classList.add('hide');
        contentsRowElement.style.display = 'none';
        yearContentElement.textContent = `Year: ${yea}`;
        descriptionContentElement.setAttribute('colspan',3);
        descriptionContentElement.textContent = `Description: ${descr}`;
        contentsRowElement.appendChild(yearContentElement);
        contentsRowElement.appendChild(descriptionContentElement);
        furnitureListElement.appendChild(contentsRowElement);
        function infoButton(e){
            if(e.currentTarget.textContent === 'More info'){
                contentsRowElement.style.display = 'contents'
                e.currentTarget.textContent = 'Less Info';
            }else{
                contentsRowElement.style.display = 'none';
                e.currentTarget.textContent = 'More info';
            }
        }

        buyButtonElement.classList.add('buyBtn');
        buyButtonElement.addEventListener('click',buy);
        function buy(){
            rowElement.remove();
            contentsRowElement.remove();
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + pri;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            //1:16
        }

    }
}
