import React, { useState } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";
import { is } from 'immutable';

const Newsletter = () => {
  const mathsProblem = Math.floor(Math.random() * 25) + 20;
  let trueMathsAnswer = mathsProblem*mathsProblem;
  let response;
  const [incorrectFields, setIncorrectFields] = useState({
    name: false,
    email: false,
    mathsAnswer: false
  });
  const [isFormIncorrect, setIsFormIncorrect] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    
    response = {
      name: event.target[1].value,
      email: event.target[2].value,
      mathsAnswer: event.target[3].value*event.target[3].value
    }
    setIncorrectFields({
      name: response.name == '' ? true:false,
      email: response.email == '' ? true:false,
      mathsAnswer: response.mathsAnswer != trueMathsAnswer ? true:false
    })
    if(response.name == '' || response.email == '' || response.mathsAnswer != trueMathsAnswer)  {setIsFormIncorrect(true);}
    console.log(incorrectFields);
    }

  return (
    <Layout location="/" title="Fran's food blog">
      <Seo title="Newsletter Sign-up" />
        <div className="container mx-auto p-2">
          <h3 className="text-3xl">Sign up to my newsletter</h3>
          Sign up here to hear all my latest recipes and news!
          <form onSubmit={handleSubmit} className="p-4 bg-dark_blue my-4 rounded-lg">
            { isFormIncorrect && 
              <div className="text-red">Tskk, you filled out the form wrong. Fill out fields in red.</div> 
            }
            <fieldset>
              <label>
                <p className="text-cream">Name</p>
                <input name="name" className={`${incorrectFields.name && "border-red border-2"}`} />
              </label>
              <p className="text-cream">Email</p>
              <input name="Email" className={`${incorrectFields.email && "border-red border-2"}`}/>
              <label>
                <p className="text-cream">{`What is ${mathsProblem}x${mathsProblem}???`}</p>
                <input name="mathProblem" className={`${incorrectFields.mathsAnswer && "border-red border-2"}`}/>
              </label>
            </fieldset>
            <button type="submit" className="bg-light_blue p-2 rounded-md mt-2">Submit form</button>
          </form>
        </div>
      <Bio mainPage="true"/>  
    </Layout>
  )
}
export default Newsletter;