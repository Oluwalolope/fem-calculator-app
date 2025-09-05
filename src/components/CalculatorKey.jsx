const CalculatorKey = ({functionType, dispatch, colourType, gridSpan, value}) => {
    const handleClick = () => {
        dispatch({type: functionType, payload: value});
    };

    return (
        <button className={`key span-${gridSpan} ${colourType}-font`} onClick={handleClick}>{value}</button>
    );
}
 
export default CalculatorKey;