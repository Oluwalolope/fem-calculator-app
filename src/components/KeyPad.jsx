import CalculatorKey from "./CalculatorKey";

const KeyPad = () => {
    return (
        <>
            <div className="keypad">
                <CalculatorKey colourType="primary" gridSpan={1} value="7" />
                <CalculatorKey colourType="primary" gridSpan={1} value="8" />
                <CalculatorKey colourType="primary" gridSpan={1} value="9" />
                <CalculatorKey colourType="secondary" gridSpan={1} value="del" />
                <CalculatorKey colourType="primary" gridSpan={1} value="4" />
                <CalculatorKey colourType="primary" gridSpan={1} value="5" />
                <CalculatorKey colourType="primary" gridSpan={1} value="6" />
                <CalculatorKey colourType="primary" gridSpan={1} value="+" />
                <CalculatorKey colourType="primary" gridSpan={1} value="1" />
                <CalculatorKey colourType="primary" gridSpan={1} value="2" />
                <CalculatorKey colourType="primary" gridSpan={1} value="3" />
                <CalculatorKey colourType="primary" gridSpan={1} value="-" />
                <CalculatorKey colourType="primary" gridSpan={1} value="." />
                <CalculatorKey colourType="primary" gridSpan={1} value="0" />
                <CalculatorKey colourType="primary" gridSpan={1} value="/" />
                <CalculatorKey colourType="primary" gridSpan={1} value="x" />
                <CalculatorKey colourType="secondary" gridSpan={2} value="reset" />
                <CalculatorKey colourType="tertiary" gridSpan={2} value="=" />
            </div>
        </>
    );
}
 
export default KeyPad;