import React, {useRef} from 'react';
import Clock from './Clock.jsx';

const InputForm = (props) => {
  const refName = useRef();
  const refTimezone = useRef();

  const timeSettingsHandler = () => {
    if (refName.current.value) {
      props.addClock({
        name: refName.current.value,
        clock: <Clock name={refName.current.value} timezone={refTimezone.current.value}/>
      })
      refName.current.value = ''
      refTimezone.current.value = ''
    } else {
      alert('Введите название часов')
    }
  }

  return (
    <div className="input-form">
      <div className="name-block">
        <div className="name-label">Название</div>
        <input ref={refName} className="name" type="text"/>
      </div>
      <div className="timezone-block">
        <div className="timezone-label">Временная зона</div>
        <input ref={refTimezone} className="timezone" type="text"/>
      </div>
      <div className="btn" onClick={timeSettingsHandler}>Добавить</div>
    </div>
  );
};

export default InputForm;