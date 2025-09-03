import ThemeOption from "./ThemeOption";

const Header = ({ currentTheme, handleChange}) => {
    return (
        <header>
            <h1 className="logo">calc</h1>
            <ThemeOption currentTheme={currentTheme} handleThemeChange={handleChange}/>
        </header>
    );
}
 
export default Header;