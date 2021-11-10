import React, { Component } from "react";
import '../main/Calculator.css'
import Button from '../componets/button'
import Display from '../componets/display'

const stateInicial = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    value: [0, 0],
    current: 0

}

export default class Calculator extends Component {

    state = { ...stateInicial }

    constructor(props) {

        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperatio = this.setOperatio.bind(this)
        this.addDigital = this.addDigital.bind(this)
    }
    clearMemory() {
        this.setState({ ...stateInicial })
    }
    setOperatio(op) {
        console.log(op)
    }
    addDigital(n) {
        if (n === "." && this.state.displayValue.includes(".")) {
            return
        }
        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })
        if (n != '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = { ...this.state.value }
            values[i] = newValue
            this.setState({ values })
            console.log(values)

        }
    }

    render() {

        return (
            <div className="calculator">

                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple></Button>
                <Button label="/" click={this.setOperatio} operation></Button>
                <Button label="7" click={this.addDigital}></Button>
                <Button label="8" click={this.addDigital}></Button>
                <Button label="9" click={this.addDigital}></Button>
                <Button label="*" click={this.setOperatio} operation></Button>
                <Button label="4" click={this.addDigital}></Button>
                <Button label="5" click={this.addDigital}></Button>
                <Button label="6" click={this.addDigital}></Button>
                <Button label="-" click={this.setOperatio} operation></Button>
                <Button label="1" click={this.addDigital}></Button>
                <Button label="2" click={this.addDigital}></Button>
                <Button label="3" click={this.addDigital}></Button>
                <Button label="+" click={this.setOperatio} operation></Button>
                <Button label="0" click={this.addDigital} double></Button>
                <Button label="." click={this.addDigital} ></Button>
                <Button label="=" click={this.setOperatio} operation></Button>

            </div>
        )
    }
}