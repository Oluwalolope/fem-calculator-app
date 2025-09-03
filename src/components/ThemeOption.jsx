import ThemeOptionButton from "./ThemeOptionButton";

const ThemeOption = ({currentTheme, handleThemeChange}) => {
    return (
        <div className="theme">
            <span>Theme</span>
            <menu >
                <ThemeOptionButton currentTheme={currentTheme} onThemeUpdate={handleThemeChange} value={1} />
                <ThemeOptionButton currentTheme={currentTheme} onThemeUpdate={handleThemeChange} value={2} />
                <ThemeOptionButton currentTheme={currentTheme} onThemeUpdate={handleThemeChange} value={3} />
            </menu>
        </div>    
    );
}
 
export default ThemeOption;