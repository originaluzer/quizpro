import './App.css';
import Hiw from './Components/Hiw';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Groq from "groq-sdk";
function App() {


/* 
This is the code for the API
  const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ,dangerouslyAllowBrowser: true});
  async function main() {
  const completion = await groq.chat.completions
    .create({
      messages: [
        {
          role: "user",
          content: "Explain why girls like cunnilingus",
        },
      ],
      model: "llama3-8b-8192",
    })
    .then((chatCompletion) => {
      console.log(chatCompletion.choices[0]?.message?.content || "");
    });
}
main();
 */
  return (
    <div className="App">
       <Hero/>
       <Hiw></Hiw>
       <Features/>
    </div>
  );
}

export default App;
