import React, {useEffect, useState} from 'react';

const Clock = (props) => {

  const [value, setValue] = useState([new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds()])
  const [degSec, setDegSec] = useState(0)
  const [degMin, setDegMin] = useState(0)
  const [degHour, setDegHour] = useState(0)
  const [deleteClockFlag, setDeleteClockFlag] = useState(0)


  useEffect(() => {
    if (deleteClockFlag) {
      return () => {}
    }
    const timeout = setTimeout(() => setValue([new Date().getUTCHours(), new Date().getUTCMinutes(), new Date().getUTCSeconds()]), 1000);
    let shiftTimezone = 0
    if (props.timezone) {
      shiftTimezone = +props.timezone
    }

    setDegSec(value[2] * 6)
    setDegMin((value[1] * 6) + (value[2] * 0.1))
    setDegHour(((value[0] + shiftTimezone) * 30) + (value[1] * 0.5))
  }, [value[2]]);


  // const deleteClock = (e) => {
  //   // e.target.closest('.clock-block').remove()
  //   setDeleteClockFlag(1)
  //   props.deleteClock(props.name)
  // }

  return (
    <>
      <div className="clock">
        <span className="clock__stroke clock__stroke--small clock__stroke--1"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--2"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--3"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--4"></span>
        <span className="clock__stroke clock__stroke--5"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--6"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--7"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--8"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--9"></span>
        <span className="clock__stroke clock__stroke--10"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--11"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--12"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--13"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--14"></span>
        <span className="clock__stroke clock__stroke--15"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--16"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--17"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--18"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--19"></span>
        <span className="clock__stroke clock__stroke--20"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--21"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--22"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--23"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--24"></span>
        <span className="clock__stroke clock__stroke--25"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--26"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--27"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--28"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--29"></span>
        <span className="clock__stroke clock__stroke--30"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--31"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--32"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--33"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--34"></span>
        <span className="clock__stroke clock__stroke--35"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--36"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--37"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--38"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--39"></span>
        <span className="clock__stroke clock__stroke--40"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--41"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--42"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--43"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--44"></span>
        <span className="clock__stroke clock__stroke--45"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--46"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--47"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--48"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--49"></span>
        <span className="clock__stroke clock__stroke--50"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--51"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--52"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--53"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--54"></span>
        <span className="clock__stroke clock__stroke--55"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--56"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--57"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--58"></span>
        <span className="clock__stroke clock__stroke--small clock__stroke--59"></span>
        <span className="clock__stroke clock__stroke--60"></span>

        <span style={{transform: `rotate(${degHour}deg)`}} className="clock__hand clock__hand--hour"></span>
        <span style={{transform: `rotate(${degMin}deg)`}} className="clock__hand clock__hand--minute"></span>
        <span style={{transform: `rotate(${degSec}deg)`}} className="clock__hand clock__hand--second"></span>
      </div>
    </>
  );
};

export default Clock;