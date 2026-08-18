import { useTheme } from '../context/usecontext'


function ToggleButton(){
    const {themeMode, darkTheme, lightTheme} = useTheme();

    const onChangeFun = (e) => {
        const  modeStatus =   e.currentTarget.checked;;
        if(modeStatus) {
            darkTheme()
        }else{
            lightTheme()
        }
    }

    return (
         <label className="toggle">
            <input 
            onChange={onChangeFun}
            checked={themeMode === 'dark'}
            type="checkbox"/>
            <span className="slider"></span>
          </label>
    );
}


export default ToggleButton;