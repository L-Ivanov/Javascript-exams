function solve() {

    const recipientName = document.querySelector('#recipientName');
    const titleName = document.getElementById('title');
    const message = document.getElementById('message');


    let addButton = document.getElementById('add');
    let resetButton = document.getElementById('reset');
    let ulList = document.getElementById('list');
    let liList = document.createElement('li');
    let sendButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    sendButton.textContent = "Send";
    deleteButton.textContent = "Delete";
    sendButton.id = "send";
    deleteButton.id = "delete";
    let h4Title = document.createElement('h4');
    let h4Name = document.createElement('h4');
    let spanMessage = document.createElement('span');
    let divForButtons = document.createElement('div');
    let liForSendMails = document.createElement('li');
    let spanForMail = document.createElement('span');
    let spanForTitle = document.createElement('span');
    let divForDeleteButton = document.createElement('div');
    let buttonDeleteForSend = document.createElement('button');
    divForDeleteButton.class = "btn";
    buttonDeleteForSend.class = "delete";
    buttonDeleteForSend.textContent = "Delete";
    divForButtons.id = 'list-actions';
    let ulForSentMails = document.querySelector('.sent-list');
    let ulForDeletedMails = document.querySelector('.delete-list');
    let liForDeletedMails = document.createElement('li');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (!recipientName.value && !titleName.value && !message.value) {
            return;
        }
        if (recipientName.value === "" && titleName.value === "" && message.value === "") {
            return;
        }
        let recipientNameValue = recipientName.value;
        let titleNameValue = titleName.value;
        let messageValue = message.value;

        h4Title.textContent = "Title: "+titleNameValue;
        h4Name.textContent = "Recipient Name: "+recipientNameValue;
        spanMessage.textContent = messageValue;
        divForButtons.appendChild(sendButton);
        divForButtons.appendChild(deleteButton);
        liList.appendChild(h4Title);
        liList.appendChild(h4Name);
        liList.appendChild(spanMessage);
        liList.appendChild(divForButtons);
        ulList.appendChild(liList);

        recipientName.value = "";
        titleName.value = "";
        message.value = "";
        recipientName.textContent = "";
        sendButton.addEventListener('click', ()=>{


            spanForMail.textContent = "To: " + h4Name.textContent.replace("Recipient Name: ", '');
            spanForTitle.textContent =h4Title.textContent;
            divForDeleteButton.appendChild(buttonDeleteForSend);
            liForSendMails.appendChild(spanForMail);
            liForSendMails.appendChild(spanForTitle);
            liForSendMails.appendChild(divForDeleteButton);
            ulForSentMails.appendChild(liForSendMails);
            recipientName.value = "";
            titleName.value = "";
            message.value = "";
            recipientName.innerHTML = "";
            message.innerHTML = "";
            titleName.innerHTML = "";




        })

        deleteButton.addEventListener('click', ()=>{

            spanForMail.textContent = "To: " + h4Name.textContent.replace("Recipient Name: ", '');
            spanForTitle.textContent =h4Title.textContent;
            liForDeletedMails.appendChild(spanForMail);
            liForDeletedMails.appendChild(spanForTitle);
            ulForDeletedMails.appendChild(liForDeletedMails);
            ulList.removeChild(liList);
            recipientName.value = "";
            titleName.value = "";
            message.value = "";
            // ulForSentMails.removeChild(liForSendMails);

        })
        buttonDeleteForSend.addEventListener('click', ()=>{

            spanForMail.textContent = "To: " + h4Name.textContent.replace("Recipient Name: ", '');
            spanForTitle.textContent =h4Title.textContent;
            liForDeletedMails.appendChild(spanForMail);
            liForDeletedMails.appendChild(spanForTitle);
            ulForDeletedMails.appendChild(liForDeletedMails);
            // ulForSentMails.removeChild(liForDeletedMails);
            ulForSentMails.removeChild(liForSendMails);




        })
        resetButton.addEventListener('click', ()=>{

            recipientName.value = "";
            titleName.value = "";
            message.value = "";
            ulList.removeChild(liList);
            ulForSentMails.removeChild(liForSendMails);



        })
    })








}

solve();