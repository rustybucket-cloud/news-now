import { Card } from "./card";
import { req } from "../example";


const main = async () => {
    const data = await fetch("./articles")
    const articles = await data.json()

    articles.forEach((article: any) => {
        const { urlToImage, title, source, author, description, url, content } = article
        const card = new Card(urlToImage, title, source.name, author, description, url, content)
        card.createCard()
    })
}

export { main }