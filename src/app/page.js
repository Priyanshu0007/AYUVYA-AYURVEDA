import Image from "next/image";
import styles from "./page.module.css";
import { RxCross2 } from "react-icons/rx";
import Star from "@/components/Star";
import Select from "@/components/Select";

import Like from "@/components/Like";

export default function Home() {
  const words=["Adventurous","Clean","Good Listener","Honest","Inspiring","Kind","Knowledge","Non-judgemental","Spontaneous","Talkative","Thoughtful","Trustworthy"];
  return (
    <div className="main-box">
        <RxCross2 className="cross-logo"/>
        <h1>Leave a review</h1>
        <div className="box">
          <h2>Safety</h2>
          <h3>How safe do you feel with Trausti?</h3>
          <Star/>
        </div>
        <div className="box">
          <h2>Communication</h2>
          <h3>How easy was to communicate with Trausti?</h3>
          <Star/>
        </div>
        <div className="box">
          <h2>Would you recommend Trausti?</h2>
          <h3>Your opinion won't be posted publicly</h3>
          <Like/>
        </div>
        <div className="box">
          <h2>Praise</h2>
          <h3>What best descibe Trausti?</h3>
          <div className="words">
            {words.map((word,id)=>(<Select key={id} word={word}/>))}
          </div>
        </div>
        <div className="box">
          <h2>Care to share more?</h2>
          <h3>How was your overall experience? What's that one thing you won't forgot about Trausti for?</h3>
          <textarea></textarea>
        </div>
        <button className="submit">PUBLISH REVIEW</button>
        
    </div>
  );
}
