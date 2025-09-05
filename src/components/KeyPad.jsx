import CalculatorKey from "./CalculatorKey";
import { ACTIONS } from "../utils/actions";

const KeyPad = ({ dispatch }) => {
    return (
        <>
            <div className="keypad">
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="7" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="8" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="9" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.DELETE_DIGIT} colourType="secondary" gridSpan={1} value="del" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="4" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="5" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="6" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.CHOOSE_OPERATION} colourType="primary" gridSpan={1} value="+" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="1" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="2" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="3" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.CHOOSE_OPERATION} colourType="primary" gridSpan={1} value="-" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="." />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.ADD_DIGIT} colourType="primary" gridSpan={1} value="0" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.CHOOSE_OPERATION} colourType="primary" gridSpan={1} value="/" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.CHOOSE_OPERATION} colourType="primary" gridSpan={1} value="x" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.CLEAR} colourType="secondary" gridSpan={2} value="reset" />
                <CalculatorKey dispatch={dispatch} functionType={ACTIONS.EVALUATE} colourType="tertiary" gridSpan={2} value="=" />
            </div>
        </>
    );
}
 
export default KeyPad;