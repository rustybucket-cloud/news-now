/* class Element {
    type: string
    classes: 
    constructor(type: string) {
        this.type = type
    }
} */

export function createElement({elementType, id, classes, attributes, text} : {elementType: string, id?: string | null, classes?: string[] | null , attributes?: {name: string, value: string}[] | null, text?: string | null}) : HTMLElement {
    const element = document.createElement(elementType)
    element.id = id
    if (classes) classes.forEach((classValue: string) => {
        element.classList.add(classValue)
    })
    if (attributes) attributes.forEach(({name, value}) => {
        element.setAttribute(name, value)
    })
    if (text) element.textContent = text
    return element
}