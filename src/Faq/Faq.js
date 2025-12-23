import React, { useState } from "react";
import classes from "./Faq.module.css";
import faqImage from "./faqqq.png";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FcFaq } from "react-icons/fc"
import { FaQuestionCircle } from "react-icons/fa";

function Faq() {
  // State to track which question is clicked
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const toggleAnswer = (index) => {
    // Toggle visibility: if the same index is clicked, hide the answer
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };


const questionsAndAnswers = [
  {
    question: (
      <>
        <IoMdArrowDropdownCircle /> Are microgreens the same as sprouts?
      </>
    ),
    answer:
      "No. Sprouts are germinated seeds grown in water, while microgreens are grown in soil or cocopeat and harvested after they develop leaves. Microgreens are safer, more flavorful, and more nutritious.",
  },
  {
    question: (
      <>
        <IoMdArrowDropdownCircle /> Which microgreens are best for beginners to try?
      </>
    ),
    answer:
      "Popular beginner-friendly microgreens include sunflower, broccoli, radish, mustard, and pea shoots. They have great taste, high nutrition, and can be used in almost any dish.",
  },
  {
    question: (
      <>
        <IoMdArrowDropdownCircle /> Do microgreens need to be washed before eating?
    </>
    ),
    answer:
      "If grown cleanly, microgreens usually do not need washing. However, a gentle rinse before use is recommended, especially if you prefer extra freshness.",
  },
  {
    question: (
      <>
        <IoMdArrowDropdownCircle /> Are microgreens suitable for kids?
      </>
    ),
    answer:
      "Yes, microgreens are safe for children and provide essential vitamins and minerals. Mild varieties like sunflower and pea shoots are especially good for kids.",
  },
  {
    question: (
      <>
        <IoMdArrowDropdownCircle /> Can I grow microgreens at home?
      </>
    ),
    answer:
      "Absolutely! Microgreens are easy to grow at home using trays, cocopeat/soil, and good sunlight or indoor lights. They grow quickly, usually within 7–12 days, making them perfect for home gardening.",
  },
];


  // const questionsAndAnswers = [
  //   {
    
  //     question: "1. Are microgreens the same as sprouts?",
  //     answer:
  //       "No. Sprouts are germinated seeds grown in water, while microgreens are grown in soil or cocopeat and harvested after they develop leaves. Microgreens are safer, more flavorful, and more nutritious.",
  //     },
  //   {
  //     question: "2. Which microgreens are best for beginners to try?",
  //     answer:
  //       "Popular beginner-friendly microgreens include sunflower, broccoli, radish, mustard, and pea shoots. They have great taste, high nutrition, and can be used in almost any dish.",
  //   },
  //   {
  //     question: "3. Do microgreens need to be washed before eating?",
  //     answer:
  //       "If grown cleanly, microgreens usually do not need washing. However, a gentle rinse before use is recommended, especially if you prefer extra freshness.",
  //   },
  //   {
  //     question: "4. Are microgreens suitable for kids?",
  //     answer:
  //       "Yes, microgreens are safe for children and provide essential vitamins and minerals. Mild varieties like sunflower and pea shoots are especially good for kids.",
  //   },
  //   {
  //     question: "5. Can I grow microgreens at home?",
  //     answer:
  //       "Absolutely! Microgreens are easy to grow at home using trays, cocopeat/soil, and good sunlight or indoor lights. They grow quickly, usually within 7–12 days, making them perfect for home gardening.",
  //   },
  // ];

  return (
    <div className={classes.faqBlock}>
      <div className= {classes.logo}>
< FcFaq className={classes.faqlogo}></FcFaq>
<div className={classes.faqTitle}>FAQ</div>
</div>
    {/* <div className={classes.logo}></div> */}

<div className={classes.mainFaqBox}>
      <div className={classes.queBlock}>

        {questionsAndAnswers.map((qa, index) => (
          <div className={classes.parentQueBlock} key={index}>
            <div
              className={classes.QUE}
              onClick={() => toggleAnswer(index)} // Toggle the answer visibility
            >
              {qa.question}
            </div>
            {/* Conditionally render the answer */}
            {visibleAnswerIndex === index && (
              <div className={classes.ANS}>{qa.answer}</div>
            )}
          </div>
        ))}
    </div>
      
      <img className={classes.imageBlock} src={faqImage} />
      </div>

      {/* Your image block content */}
    </div>
  );
}

export default Faq;

// THIS IS THE FUKing code for practice

// import classes from "./Faq.module.css"

// function Faq() {
//     return (
//       <div className={classes.faqBlock}>

// <div className={classes.queBlock}>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

//   <div className={classes.parentQueBlock}>
//     <div className={classes.QUE}>This is the Fucking Questions?</div>
//     <div className={classes.ANS}>This is the Fucking Ans?</div>
//   </div>

// </div>

//        <div className={classes.imageBlock}>

//        </div>

//       </div>
//     );
//   }

//   export default Faq;
