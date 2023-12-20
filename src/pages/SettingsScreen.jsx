import {useTheme} from '../components/Theme';
import './styles/Settings.css';

const SettingsScreen = () => {
    const {theme, setTheme, resetTheme} = useTheme();

    const handleChange = (key, value) => {
        setTheme({...theme, [key]: value});
    };

    return (
        <div className="settings">
            <label>
                Background Color:
                <input
                    type="color"
                    value={theme.backgroundColor}
                    onChange={(e) => handleChange('backgroundColor', e.target.value)}
                />
            </label>
            <label>
                Border Color:
                <input
                    type="color"
                    value={theme.borderColor}
                    onChange={(e) => handleChange('borderColor', e.target.value)}
                />
            </label>
            <label>
                Box Shadow Color:
                <input
                    type="color"
                    value={theme.boxShadowColor}
                    onChange={(e) => handleChange('boxShadowColor', e.target.value)}
                />
            </label>
            <button onClick={resetTheme}>Reset to Default</button>
        </div>
    );
};

export default SettingsScreen;
