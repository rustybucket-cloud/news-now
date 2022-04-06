import { Card } from "./card";
import { req } from "../example";


const main = async () => {
    console.log(req)
    const articles = req.articles


    articles.forEach(article => {
        const { urlToImage, title, source, author, description, url, content } = article
        const card = new Card(urlToImage, title, source.name, author, description, url, content)
        card.createCard()
    })
}

export { main }