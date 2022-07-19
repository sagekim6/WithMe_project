import Btn from "./Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Timer = ({ min, sec, setMin, setSec }) => {
  const [isSet, setIsSet] = useState(false);

  const handlePlay = () => {
    setIsSet(!isSet);
  };

  useEffect(() => {
    let count;
    if (isSet) {
      count = setInterval(() => {
        if (parseInt(sec) > 0) {
          setSec(parseInt(sec) - 1);
        } else {
          setSec(59);
          setMin((current) => current - 1);
        }
      }, 1000);
      if (parseInt(min) === 0) {
        if (parseInt(sec) === 0) {
          clearInterval(count);
        }
      }
    }
    return () => clearInterval(count);
  }, [min, sec, isSet]);

  return (
    <div className="Timer">
      <div className="Timer_wrapper">
        <div className="Time_input">
          <input
            type={"number"}
            min={0}
            max={60}
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          :
          <input
            type={"number"}
            min={0}
            max={60}
            value={sec}
            onChange={(e) => setSec(e.target.value)}
          />
        </div>
        {isSet ? (
          <div>
            {min}:{sec}
          </div>
        ) : null}
        <Btn
          className="Play_btn"
          text={<FontAwesomeIcon icon={faPlay} onClick={handlePlay} />}
        />
      </div>
      <Btn className="Menu_btn" text={<FontAwesomeIcon icon={faBars} />} />
    </div>
  );
};

export default Timer;
