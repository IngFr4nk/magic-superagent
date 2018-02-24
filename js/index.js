(function(){
    const API_URL = 'https://api.magicthegathering.io/v1/cards?';
    const request = superagent;
    const element1 = document.querySelector('.card-space');
    const element = document.querySelector('.info');
    const button = document.querySelector('.button');
    const div = document.createElement('div');

    let query = () => {
        
        let page = document.querySelector('.page').value;
        document.querySelector('.page').value = '';

        request
        .get(API_URL + `page=${page}`)
        .then((res) => {
            element.innerHTML = " ";
            let cards = res.body.cards;
            for(let n = 0; n < cards.length; n++){
                console.log(cards[n])
                if(cards[n].imageUrl) {
                    let img = document.createElement('img');
                    img.src = `${cards[n].imageUrl}`;
                    element.appendChild(img);
                }
            }
        })
        element.replaceWith(element);
    }
    button.addEventListener('click', query);
})();