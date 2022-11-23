import "./calculator.css";
import { useState } from "react";
function Calculator() {
  const [soluton, setsolution] = useState("");
  const [checkdot, setdot] = useState(false);

  const handlenumber = (num) => {
    // all condition goes inside here
    if ((num === "." || num === "0.") && checkdot === false) {
      setsolution(soluton + num);
      setdot(true); // this need to be false if certain button are clicked
    } else if (num === "") {
      setsolution("");
      setdot(false);
    } else {
      setsolution(soluton + num);
    }
  };

  return (
    <div className="calculator">
      <div className="solutions">
        <h1 className="answer">{soluton.length === 0 ? 0 : soluton}</h1>
      </div>
      <div className="allbuttons">
        <div className="first">
          <button className="button" onClick={() => handlenumber("")}>
            AC
          </button>
          <button className="button">+/-</button>
          <button className="button">%</button>
          <button className="button">/</button>
        </div>
        <div className="first">
          <button className="button" onClick={() => handlenumber("7")}>
            7
          </button>
          <button className="button" onClick={() => handlenumber("8")}>
            8
          </button>
          <button className="button" onClick={() => handlenumber("9")}>
            9
          </button>
          <button className="button">*</button>
        </div>
        <div className="first">
          <button className="button" onClick={() => handlenumber("4")}>
            4
          </button>
          <button className="button" onClick={() => handlenumber("5")}>
            5
          </button>
          <button className="button" onClick={() => handlenumber("6")}>
            6
          </button>
          <button className="button">-</button>
        </div>
        <div className="first">
          <button className="button" onClick={() => handlenumber("1")}>
            1
          </button>
          <button className="button" onClick={() => handlenumber("2")}>
            2
          </button>
          <button className="button" onClick={() => handlenumber("3")}>
            3
          </button>
          <button className="button">+</button>
        </div>
        <div className="first">
          <button
            className="button1"
            onClick={() => (soluton.length === 0 ? 0 : handlenumber("0"))}
          >
            0
          </button>
          <button
            className="button"
            onClick={() =>
              soluton.length === 0
                ? handlenumber("0.")
                : checkdot === false && handlenumber(".")
            }
          >
            .
          </button>
          <button className="button">=</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
