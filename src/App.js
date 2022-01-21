import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  //   \B
  // 解釋說明:
  // 比對非「文字/數字的邊界」，包括空格及特別字元。
  // 資料來源:https://ithelp.ithome.com.tw/articles/10229585
  // g : 表示會可比對多個成功的結果，預設沒有 g 時，就是比對到一個就停止
  // 資料來源:https://dotblogs.com.tw/jgame2012/2016/02/27/150013
  const a = colorName.replace(/\B([A-Z])\B/g, ' $1');
  console.log(a);
  return a;
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      {/* <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button> */}
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={e => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
