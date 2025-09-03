const CalculatorKey = ({colourType, gridSpan, value}) => {
    return (
        <button className={`key span-${gridSpan} ${colourType}-font`}>{value}</button>
    );
}
 
export default CalculatorKey;