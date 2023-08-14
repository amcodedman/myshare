import { Avatar } from "@mui/material";
import React from "react";

const Testgood = () => {
  return (
    <div className="testmain">
      <h1>How learners like you are achieving their goals</h1>
      <div className="testlayout">
        <div className="textbox">
          <h1 className="comma">"</h1>
          <p>
I'm delighted to announce that following a few months of active participation in "The Complete SQL Bootcamp: Go from Zero to Hero"...
<span>
I've successfully completed the course and have transformed into an SQL Maestro!
</span>{" "}
The course material perfectly encompassed the subject matter tested in the certification evaluation.
</p>

          <div className="usertest">
            <Avatar /> <span>James mensah</span>
          </div>
          <div className="breakline"></div>
          <div className="testcourse">
          The Complete SQL Bootcamp: Go from Zero to Hero
          </div>
        </div>




        <div className="textbox">
          <h1 className="comma">"</h1>
          <p>
I'm thrilled to announce that following several months of engaging with the "Artificial Intelligence (ARS): Build the Most Powerful AI" course...
<span>
I successfully cleared my assessment and am now a certified AI Mastermind!
</span>{" "}
The course material perfectly aligned with the AI Mastermind certification exam.
</p>
          <div className="usertest">
            <Avatar /> <span>Kofi Mark</span>
          </div>
          <div className="breakline"></div>
          <div className="testcourse">
          Artificial Intelligence (ARS): Build the Most Powerful AI
          </div>
        </div>




        <div className="textbox">
          <h1 className="comma">"</h1>
          <p>
I'm excited to share that after dedicating a few months to the "Cyber Security: Info Security, Combat Cyber Threats, ChatGPT" course...
<span>
I have triumphed in my examination and am now a certified Cyber Security Defender!
</span>{" "}
The course content comprehensively covered the topics tested in the certification assessment.
</p>

          <div className="usertest">
            <Avatar /> <span>Sana Adams</span>
          </div>
          <div className="breakline"></div>
          <div className="testcourse">
          Cyber Security: Info Security, Combat Cyber Threats, ChatGPT
          </div>
        </div>

       
      </div>
    </div>
  );
};
export default Testgood;
