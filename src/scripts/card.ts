import { createElement } from "./support"

class Card {
    img: string | null
    title: string | null
    source: string | null
    author: string | null
    description: string | null
    url: string | null
    content: string | null

    constructor(img: string | null, title: string | null, source: string | null, author: string | null, description:string | null, url: string | null, content: string | null) {
        this.img = img
        this.title = title
        this.source = source
        this.author = author
        this.description = description
        this.url = url
        this.content = content
    }

    createCard() {
        /*
        <div class="card">
            <figure>
                <img src=img>
            </figure>
            <div>
                <h3>title</h3>
                <p>source</p>
                <p>author</p>
            </div>
        </div>
        */

        const card = createElement({elementType: 'div', classes: ['card']})

        const img = createElement({elementType: 'img', attributes: [{name: 'src', value: `${this.img}`}]})
        img.setAttribute('src', this.img)
        const figure = document.createElement('figure')
        figure.append(img)
    
        const div = createElement({elementType: 'div', classes:['card__body']})
        const title = createElement({elementType: 'h3', text: `${this.title}`})
        const source = createElement({elementType: 'p', text: `${this.source}`})
        const author = createElement({elementType: 'p', text: `${this.author || 'See article'}`})
        div.append(title, source, author)
        card.append(figure, div)

        document.querySelector('.stories')?.append(card)
        card.addEventListener('click', () => this.expandCard())
    }

    expandCard() {
        const html = `
            <div class="card__expanded__container">
                <button id="closeCard">X</button>
                <figure>
                    <img src="${this.img}" alt="bitcoin">
                </figure>
                <div class="card__body">
                    <h3>${this.title}</h3>
                    <p><b>Source:</b> ${this.source}</p>
                    <p><b>Author:</b> ${this.author || "See article"}</p>
                    <p>${this.description}</p>
                    <a class="to-article" href='${this.url || '#'}' target="_blank">View story</a>
                </div>
            </div>
        `

        const card = document.createElement('div')
        card.classList.add('card__expanded')
        card.innerHTML = html
    
        document.querySelector('.stories')?.append(card)

        document.querySelector('#closeCard').addEventListener('click', () => {
          document.querySelector('.card__expanded').remove()  
        })
    }
}

export { Card }