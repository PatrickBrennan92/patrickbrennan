const mainH1 = document.querySelector("#mainH1")
const mainText = "Hello, I'm Patrick."
const mainP = document.querySelector("#mainP")
const pText = "I'm a self taught web/software developer from Ireland."

const addTextDelay = (where, letter, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            where.textContent += letter;
            resolve();
        }, delay);
    })
}

async function addText(text, where, delay) {
    for (i of text) {
        await addTextDelay(where, i, delay);
    }
}

addText(mainText, mainH1, 100)
setTimeout(() => {
    addText(pText, mainP, 50)
}, 2200)