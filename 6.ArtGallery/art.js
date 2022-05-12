// class ArtGallery{
//     constructor(creator){
//         this.creator = creator;
//         this.possibleArticles = {"picture":200,"photo":50,"item":250};
//         this.listOfArticles = [];
//         this.guests = [];
//     }
//     addArticle(articleModel, articleName, quantity){
//         if(!this.possibleArticles[articleModel]){
//             throw new Error("This article model is not included in this gallery!");
//         }
//         if(this.possibleArticles[articleModel]){
//             this.possibleArticles[articleModel] +=quantity;
//         }else{
//             this.possibleArticles.picture.add(articleModel.toLowerCase());
//             this.possibleArticles.photo.add(articleName);
//             this.possibleArticles.item.add(quantity);
//             return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
//         }
//
//     }
//     inviteGuest(guestName, personality){
//         let points = 0;
//         if(this.guests.some(h=>h.name === guestName)){
//             return  `${guestName} has already been invited.`
//         }else{
//             this.guests.push({guestName, points, purchaseArticle:0})
//         }
//     }
//
// }

class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = {"picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity){
        articleModel = articleModel.toLowerCase();
        let isInTheArr = false;
        if(!this.possibleArticles[articleModel]){
            throw new Error("This article model is not included in this gallery!");
        }
        for(const el of this.listOfArticles){
            if(el.articleName === articleName && el.articleModel === articleModel){
                el.quantity +=Number(quantity);
                isInTheArr = true;
            }
        }
        if(!isInTheArr){
            this.listOfArticles.push({articleModel, articleName, quantity});
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

    }
    inviteGuest(guestName, personality){
        for(let guest of this.guests){
            if(guest.guestName === guestName){
                throw new Error(`${guestName} has already been invited.`)
            }
        }
        let obj = {guestName, points:0, purchaseArticle:0}
        switch(personality){
            case "VIP":obj.points = 500;break;
            case"Middle":obj.points = 250;break;
            default:obj.points = 50; break;
        }
        this.guests.push(obj);
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName,guestName){
        let article;
        let guest;
        let isArticleInTheArray = false;
        for(let el of this.listOfArticles){
            if(el.articleName !== articleName || el.articleModel !== articleModel){
                isArticleInTheArray = false;

            }else{
                article = el;
                isArticleInTheArray = true;
                break;
            }
        }
        if(!isArticleInTheArray){
            throw new Error("This article is not found.")
        }
        if(article.quantity === 0){
            throw new Error(`The ${articleName} is not available.`)
        }
        let isGuestInTheArray = false;
        for(let el of this.guests){
            if(el.guestName !== guestName){
                isGuestInTheArray = false;
            }else{
                isGuestInTheArray = true;
                guest = el;
                break;
            }
        }
        if(!isGuestInTheArray){
            return "This guest is not invited."
        }
        if(guest.points < this.possibleArticles[articleModel]){
            return "You need to more points to purchase the article.";
        }else{
            article.quantity--;
            guest.points-=this.possibleArticles[articleModel];
            guest.purchaseArticle++;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`


    }


}
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));




console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
//console.log(artGallery.inviteGuest('John', 'Middle'));


artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
//artGallery.inviteGuest('John', 'Vip');
//artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));

