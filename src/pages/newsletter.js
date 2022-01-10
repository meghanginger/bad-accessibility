import React, { useState } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import Bio from "../components/bio";

const Newsletter = () => {
  const mathsProblem = Math.floor(Math.random() * 25) + 20;
  const mathsAnswer = mathsProblem * mathsProblem;
  const [isFormIncorrect, setIsFormIncorrect] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.mathProblem);
    }
  return (
    <Layout location="/" title="Fran's food blog">
      <Seo title="Newsletter Sign-up" />
        <div className="container mx-auto p-2">
          <h3 className="text-3xl">Sign up to my newsletter!</h3>
          <form onSubmit={handleSubmit}>
            { isFormIncorrect & 
              <div>Tskk, you filled out the form wrong. Fill out fields in red.</div> 
            }
            <fieldset>
              <label>
                <p>Name</p>
                <input name="name" />
              </label>
              <p>Email</p>
              <input name="Email" />
              <label>
                <p>{`What is ${mathsProblem}x${mathsProblem}???`}</p>
                <input name="mathProblem" />
              </label>
            </fieldset>
            <button type="submit">Submit form</button>
          </form>
        </div>
      <Bio mainPage="true"/>  
    </Layout>
  )
}
export default Newsletter;