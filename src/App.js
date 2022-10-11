import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Step2({
  street,
  county,
  state,
  postcode,
  handleStreet,
  handleCounty,
  handleState,
  handlePostCode,
  stateRef,
  countyRef,
  streetRef,
  postcodeRef,
}) {
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: "-100%" }}
      exit={{ x: "-100%" }}
      className="py-2 px-3  flex flex-col gap-4 min-w-fit w-full  "
    >
      <h1 className="font-medium text-2xl mb-11 underline    underline-offset-[10px] text-black/50 ">
        Adress Information
      </h1>
      <label className="flex items gap-3 w-full justify-between">
        Street:
        <input
          required
          onChange={handleStreet}
          value={street}
          ref={streetRef}
          type={"text"}
          className="border drop-shadow-sm px-2 py-1"
        />
      </label>
      <label className="flex items gap-3 justify-between">
        County:
        <input
          required
          ref={countyRef}
          onChange={handleCounty}
          value={county}
          type={"text"}
          className="border drop-shadow-sm px-2 py-1"
        />
      </label>

      <label className="flex items gap-3 justify-between">
        Sate:
        <input
          required
          onChange={handleState}
          ref={stateRef}
          value={state}
          type={"text"}
          className="border drop-shadow-sm px-2 py-1"
        />
      </label>

      <label className="flex items gap-3 justify-between">
        PostCode:
        <input
          required
          onChange={handlePostCode}
          value={postcode}
          ref={postcodeRef}
          type={"text"}
          className="border drop-shadow-sm px-2 py-1"
        />
      </label>
    </motion.div>
  );
}

const Step1 = React.forwardRef(
  ({
    name,
    lastname,
    birth,
    email,
    nameChange,
    lastnameChange,
    birthChange,
    emailChange,
    nameRef,
    lastnameRef,
    emailRef,
  }) => {
    return (
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "-100%" }}
        exit={{ x: "-100%" }}
        className="py-2 px-3  b flex flex-col gap-4 min-w-fit w-full "
      >
        <h1 className="font-medium text-2xl mb-11 underline    underline-offset-[10px] text-black/50 ">
          Personal Information
        </h1>
        <label className="flex items gap-3 w-full justify-between">
          Name:
          <input
            ref={nameRef}
            required
            onChange={nameChange}
            value={name}
            className="border drop-shadow-sm px-2 py-1"
          />
        </label>
        <label className="flex items gap-3 justify-between">
          Lastname:
          <input
            required
            ref={lastnameRef}
            onChange={lastnameChange}
            value={lastname}
            className="border drop-shadow-sm px-2 py-1"
          />
        </label>

        <label className="flex items gap-3 justify-between">
          Email:
          <input
            required
            type={"email"}
            ref={emailRef}
            onChange={emailChange}
            value={email}
            className="border drop-shadow-sm px-2 py-1"
          />
        </label>

        <label className="flex items gap-3 justify-between">
          Birth:
          <input
            required
            value={birth}
            onChange={birthChange}
            type="date"
            className="border drop-shadow-sm px-2 py-1"
          />
        </label>
      </motion.div>
    );
  }
);

function App() {
  let [counster, setCounter] = React.useState(0);
  let [showSendButton, setShowSendButton] = React.useState(false);

  //triger hover
  let [hover, setHover] = React.useState(false);

  /**variables */
  let [name, setName] = React.useState("");
  let [lastname, setLastName] = React.useState("");
  let [birth, setBirth] = React.useState("");
  let [email, setEmail] = React.useState("");
  let [street, setStreet] = React.useState("");
  let [county, setCountry] = React.useState("");
  let [state, setState] = React.useState("");
  let [postCode, setPostCode] = React.useState("");


 let[err,setErr]=React.useState('')

  /**Handle variables */

  /**Handle name */
  const handleName = (e) => {
    setName(e.target.value);
  };
  /**Handle lastaname */
  var handleLastName = (e) => setLastName(e.target.value);
  /**Handle birth */
  var hadndleBirth = (e) => setBirth(e.target.value);
  /**Handle email */
  var handleEmail = (e) => setEmail(e.target.value);
  /**Handle country */
  var handleCountry = (e) => setCountry(e.target.value);
  /**Handle state */
  const handleState = (e) => setState(e.target.value);
  /**Handle postcode */
  const handlePostCode = (e) => setPostCode(e.target.value);
  /**Handle Street */
  const handleStreet = (e) => setStreet(e.target.value);

  //Refs forwards
  let nameRef = React.useRef();
  let lastnameRef = React.createRef();
  let emailRef = React.createRef();
  let streetRef = React.createRef();
  let countryRef = React.createRef();
  let stateRef = React.createRef();
  let postcoreRef = React.createRef();

  let formRef = React.useRef();

  let nextBtnRef=React.useRef()

  const render=()=>{

    if(counster==0){
      return  <Step1
      nameRef={nameRef}
      lastnameRef={lastnameRef}
      emailRef={emailRef}
      nameChange={(e) => setName(e.target.value)}
      lastnameChange={(e) => setLastName(e.target.value)}
      emailChange={(e) => setEmail(e.target.value)}
      name={name}
      lastname={lastname}
      email={email}
    />
    }
    if(counster==1){
      return   <Step2
      stateRef={stateRef}
  countyRef={countryRef}
  postcodeRef={postcoreRef}
      street={street}
      county={county}
      state={state}
      postcode={postCode}
      handleStreet={handleStreet}
      handleCounty={handleCountry}
      handleState={handleState}
      handlePostCode={handlePostCode}
    />
    }
  }

  useEffect(() => {
    let arr = [name, lastname, email, street, county, state, postCode];

    if (arr.every((i) => i !== "")) {
      setShowSendButton(true);
    } else {
      setShowSendButton(false)
    }

    


  }, [name, lastname, birth, email, street, county, state, postCode]);

  return (
    <div className="App w-full drop-shadow-2xl flex-col h-screen bg-purple-800 flex items-center justify-center">


      <form onSubmit={(e)=>{
        e.preventDefault()
      }}
        ref={formRef}
        className="min-w-[500px] flex flex-col bg-white rounded-xl  overflow-hidden py-8 px-8 min-h-[250px]"
      >


       
        <AnimatePresence>
        {render(counster)}
          <div className="flex gap-5 my-8 items-center">
            
            
            
            
            
            
            {counster >= 1 && (
              <button
              
                onClick={() => {
                 
                    
                  
                 
                    setCounter((prev) => {
                      if (prev === 0) {
                        return 0;
                      } else {
                        return prev - 1;
                      }
                    });
                  }
                }
                type="button"
                className="py-2 self-start px-5 text-purple-800 broder max-w-fit border text-black/80 border-purple-900 hover:bg-purple-900 hover:text-white text-white/70 rounded-md"
              >
                Prev step
              </button>
            )}

            {counster < 1 && (
              <button
               ref={nextBtnRef}
                onClick={() => {
                  
                  let arr=[name,lastname,email]
                  let reffs=[nameRef.current,emailRef.current,lastnameRef.current]

                  if(arr.some(i=>i==='')){
                    nextBtnRef.current.style.border=`solid 1px red`;
                    reffs.forEach((r)=>{
                      if(r.value==''){
                      r.style.border='solid 1px red'
                      }
                    })
                    
                  }else{

                    setCounter((prev) => {
                      if (prev == 1) {
                        return 1;
                      } else {
                        return prev + 1;
                      }
                    });
                  }

                 


                }}
                type="button"
                className="py-2 self-start text-purple-800  px-5 broder max-w-fit border  border-purple-900 hover:bg-purple-900 hover:text-white rounded-md"
              >
                Next step
              </button>
            )}

            {showSendButton && (
              <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="py-2 items-center justify-center gap-5 text-white flex bg-purple-800  px-5 broder max-w-fit border  border-purple-900 hover:bg-purple-900 hover:text-white rounded-md"
              >
                Send
                <motion.svg
                  initial={{ y: -100 }}
                  animate={{ y: hover && 0 }}
                  width={16}
                  height={16}
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 2 11 13" />
                  <path d="m22 2-7 20-4-9-9-4 20-7z" />
                </motion.svg>
              </button>
            )}
          </div>
        </AnimatePresence>
       
      </form>
    </div>
  );
}

export default App;
