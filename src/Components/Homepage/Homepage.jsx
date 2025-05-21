import React, { useState } from "react";
import "./Homepage.css";
import { useContext } from "react";
import { Context } from "../Context/Content";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [send, setsend] = useState(false);
  const [details, setdetails] = useState(false);
  const [input, setinput] = useState("");
  const { onSent, resultData, Loading } = useContext(Context);
  return (
    <div className="homepage">
      <div className="Copiolt_bg">
        <div className="for_agents">
          <div className="for_agents_btn_container">
            <button id="for_agents_btn">
              <div className="circle"></div> For Agents
            </button>
            <h1 id="ai_heading">AI Copilot</h1>
            <div className="buttons_container">
              <button>
                <i
                  className="fa-brands fa-google"
                  style={{ color: "#ffffff", marginRight: "10px" }}
                ></i>
                Login with Google
              </button>
              <button>
                <i
                  className="fa-brands fa-facebook"
                  style={{ color: "#ffffff", marginRight: "10px" }}
                ></i>
                Login with facebook
              </button>
              <button>
                <i
                  className="fa-brands fa-apple"
                  style={{ color: "#ffffff", marginRight: "10px" }}
                ></i>
                Login with Apple
              </button>
              <Link to="/mainpage">
                <button id="get_started_btn">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="14px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#FFFFFF"
                  >
                    <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="Ai_Background">
          <div className="Ai_chat_container">
            <div className="options">
              <h3
                className="option-tab"
                onClick={() => {
                  setdetails(false), setsend(false);
                }}
              >
                Ai Copilot
              </h3>
              <h3
                className="option-tab"
                onClick={() => {
                  setdetails(true);
                }}
              >
                Details
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z" />
              </svg>
            </div>
            {details ? (
              <div className="details_container">
                <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                  Details
                </h2>
                <p style={{ marginTop: "20px" }}>
                  Fin Copilot is your intelligent assistant designed to support
                  agents and users with AI-powered assistance. It helps you get
                  quick, accurate answers to your queries, simplifies complex
                  financial or service-related information, and enhances
                  productivity through real-time AI interaction.
                </p>
                <ul>
                  <li>Conversational AI for instant query resolution</li>
                  <li>Secure login via Google, Facebook, or Apple</li>
                  <li>Ideal for customer service and support environments</li>
                  <li>
                    Context-aware answers trained on relevant business data
                  </li>
                  <li>Easy integration with your existing platforms</li>
                </ul>
              </div>
            ) : (
              <div className="chat_container">
                {send ? (
                  <div className="result_output">
                    {Loading ? (
                      <p>Seaching for the relevant sources...</p>
                    ) : (
                      <div className="output_ai">
                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="chat_box">
                    <img src="finlogo.svg" alt="" id="logo" />
                    <h2>Hi, I'm Fin AI Copilot</h2>
                    <p>Ask me anything about this conversation</p>
                  </div>
                )}
                <div className="search_container">
                  <input
                    id="search_input"
                    type="text"
                    placeholder="Type your message here..."
                    onChange={(e) => setinput(e.target.value)}
                  />
                  <svg
                    id="send_icon"
                    onClick={() => {
                      setsend(true), onSent(input);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
