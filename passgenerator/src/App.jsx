import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%^&*()-_+";

    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //use effect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  //use ref hook
  const passRef = useRef(null);

  return (
    <>
      <div className="w-screen h-screen bg-grey flex justify-center items-center">
        <div className="bg-gray-800 w-125 flex flex-col items-center justify-center p-5 rounded-2xl">
          <div className="text-3xl mb-2">Password Generator</div>

          <div className="flex w-full">
            <input
              ref={passRef}
              type="text"
              value={password}
              className="bg-white w-full text-black px-1 py-3 rounded-xl"
              placeholder="PASSWORD.."
              readOnly
            />

            <button
              className="shrink-0 bg-blue-700 text-white outline-none"
              onClick={copyToClipBoard}
            >
              Copy
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-2.5 w-full my-5">
            <div className="flex gap-1.5">
              <input
                type="range"
                min={6}
                max={25}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-xl"> Length : {length}</label>
            </div>

            <div className="flex gap-1.5">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numAllowed}
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label className="text-xl" htmlFor="numberInput">
                NumberAllowed
              </label>
            </div>

            <div className="flex gap-1.5">
              <input
                type="checkbox"
                id="characterInput"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="text-xl" htmlFor="characterInput">
                CharacterAllowed
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
