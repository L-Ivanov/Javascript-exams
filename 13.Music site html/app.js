window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let name = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let addButton = document.getElementById('add-btn');
    let divAllHitsContainer = document.querySelector(".all-hits-container");
    let section = document.getElementById('all-hits');
    let divToAppend = document.createElement('div');
    let paragraph = document.getElementsByTagName('p')[1];

    addButton.addEventListener('click', (e)=>{
        e.preventDefault();
        let genreValue = genre.value;
        let nameValue = name.value;
        let authorValue = author.value;
        let dateValue = date.value;

        if(genreValue === "" && nameValue === "" && authorValue === ""  && dateValue === ""){
            return;
        }

        let h2Genre = document.createElement('h2');
        let h2Name = document.createElement('h2');
        let h2Author = document.createElement('h2');
        let h3Date = document.createElement('h3');
        h2Genre.textContent = "Genre: " + genreValue;
        h2Name.textContent = "Name: " + nameValue;
        h2Author.textContent = "Author: " + authorValue;
        h3Date.textContent = "Date: " + dateValue;
        let totalLikes = 0;
        divToAppend.className = "hits-info";
        let saveSongButton = document.createElement('button');
        let likeSongButton = document.createElement('button');
        let deleteButton = document.createElement('button');
        saveSongButton.textContent = "Save song";
        likeSongButton.textContent = "Like song";
        deleteButton.textContent = "Delete";
        saveSongButton.className = "save-btn";
        likeSongButton.className = "like-btn";
        deleteButton.className = "delete-btn";
        divToAppend.appendChild(h2Genre);
        divToAppend.appendChild(h2Name);
        divToAppend.appendChild(h2Author);
        divToAppend.appendChild(h3Date);
        divToAppend.appendChild(saveSongButton);
        divToAppend.appendChild(likeSongButton);
        divToAppend.appendChild(deleteButton);
        divAllHitsContainer.appendChild(divToAppend);
        genre.value = "";
        name.value = "";
        author.value = "";
        date.value = "";
        likeSongButton.addEventListener("click", (e)=>{
            e.preventDefault();
            ++totalLikes;
            paragraph.textContent = "Total Likes:" + totalLikes;
            likeSongButton.disabled=true;

        })
        let deleteBtn = document.createElement('button');
        deleteBtn.className = "delete-btn";
        let div = document.querySelector('.saved-container');
        saveSongButton.addEventListener("click", (e)=>{
            e.preventDefault();
            deleteBtn.textContent = "Delete";
            div.appendChild(h2Genre);
            div.appendChild(h2Name);
            div.appendChild(h2Author);
            div.appendChild(h3Date);
            div.appendChild(deleteBtn);
            divAllHitsContainer.removeChild(divToAppend);



        });
        deleteBtn.addEventListener("click", ()=>{
            div.removeChild(h2Genre);
            div.removeChild(h2Name);
            div.removeChild(h2Author);
            div.removeChild(h3Date);
            div.removeChild(deleteBtn);

        })














    })


}