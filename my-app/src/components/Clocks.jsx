import React, {useRef} from 'react';

const Clocks = (props) => {
  console.log(props)

  const deleteClock = (e) => {
    props.deleteClock(e.currentTarget.closest('.clock-block').querySelector('.clock-name').innerText)
  }

  return (
    <div className="clocks">
      {props.clocks.length > 0 && props.clocks.map((el) =>
        <div className="clock-block" key={el.name}><span className="material-symbols-outlined close" onClick={deleteClock}>close</span>
          <div className="clock-name">{el.name}</div>
          {el.clock}
        </div>
      )}
    </div>
  );
};

export default Clocks;