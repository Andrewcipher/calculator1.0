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
        this.currentOp = this.currentOp.toString().slice(0, -1)
    }

    appendNumber(number){
        if (number === '.' && this.currentOp.includes('.')) return
        this.currentOp = this.currentOp.toString() + number.toString()
    }

    chooseOperation(operation){
        if (this.currentOp === '') return 
        if (this.prevOp !== '') {
            this.compute()
        }
        this.operation = operation 
        this.prevOp = this.currentOp
        this.currentOp = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.prevOp)
        const current = parseFloat(this.currentOp)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '÷':
                computation = prev / current
                break
            case 'x':
                computation = prev * current
                break
            default: 
            return
        }
        this.currentOp = computation
        this.oepration = undefined
        this.prevOp = ''
    }

getDisplayNumber(number){
    const stringNum = number.toString()
    const integerDigits = parseFloat(stringNum.split('.')[0])
    const decimalDigits = stringNum.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
        integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en' , {
            maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
}

    updateDisplay(){
        this.currentOpTextElement.innerText = 
        this.getDisplayNumber(this.currentOp)
        if (this.operation != null){
        this.prevOpTextElement.innerText = 
        `${this.getDisplayNumber(this.prevOp)} ${this.operation}`
        } else {
            this.prevOpTextElement.innerText = ''
        }
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

opBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

eqBtn.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})

acBtn.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

delBtn.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})