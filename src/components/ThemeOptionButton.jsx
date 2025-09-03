const ThemeOptionButton = ({onThemeUpdate, value, currentTheme}) => {
    return (
        <button onClick={() => {onThemeUpdate(value)}} className={`theme-${value} ${currentTheme == value? 'active': 'inactive'}`} >
            <span>{value}</span>
        </button>
    );
}
 
export default ThemeOptionButton;