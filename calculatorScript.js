class Calculator {
    constructor(prevOpTextElement, currentOpTextElement) {
        this.prevOpTextElement = prevOpTextElement
        this.currentOpTextElement = currentOpTextElement
        this.clear()
    }

    clear(){
        this.currentOp = ''
        this.prevOp = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        this.currentOp = number
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOpTextElement.innerText = this.currentOp
    }
}

const numBtn = document.querySelectorAll('[data-num')
const opBtn = document.querySelectorAll('[data-op')
const eqBtn = document.querySelector('[data-eq]')
const delBtn = document.querySelector('[data-del]')
const acBtn = document.querySelector('[data-ac]')
const prevOpTextElement = document.querySelector('[data-prevop]')
const currentOpTextElement = document.querySelector('[data-currop]')


const calculator = new Calculator(prevOpTextElement, currentOpTextElement)

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
