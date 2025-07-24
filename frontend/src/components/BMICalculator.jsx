import React from 'react'
import { useState } from 'react';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BMICalculator = () => {
  const[weight, setWeight] = useState('');
  const[height, setHeight] = useState('');
  const[gender, setGender] = useState('');
  const[bmi, setBmi] = useState(null);

  const BMICalculateBMI = (e) => {
    e.preventDefault();
    if( !height || !weight || !gender) {
      toast.error("Please fill in all fields");
      return;
    }

    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = weight / (heightInMeters * heightInMeters).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.info("You are underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have a normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight");
    } else {
      toast.error("You are obese");
    }
  
  };


  return (
    <section className="bmi">
      <h1> BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={BMICalculateBMI}>

            <div>
              <label>Height(cm)</label>
              <input type="text"
               value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height in cm"
                required
                 />
            </div>

            <div>
              <label>Weight(kg)</label>
              <input type="text"
               value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight in kg"
                required
                 />
            </div>
             
             <div>
              <label>Gender</label>
                <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <button type="submit">Calculate BMI</button>

          </form>
        </div>
        <div className="wrapper">
         <img src="/bmi.jpg" alt="" />
        </div>
      </div>
      
    </section>
  )
}

export default BMICalculator

