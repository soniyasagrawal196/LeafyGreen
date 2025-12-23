import classes from "./Microgreen.module.css";
import microgreenImg from "./micro.jpg";
import { PiPlantLight } from "react-icons/pi";
import { FaCircle } from "react-icons/fa"
import { GiOakLeaf } from "react-icons/gi";

function Microgreen() {
  return (
    <div className={classes.MicrogreenParent}>
      <div className= {classes.logoimg1}>
<GiOakLeaf className={classes.headlogo}></GiOakLeaf>

      <div className={classes.QUE}>Microgreens</div>
       </div>
      <div className={classes.MicrogreenSubParent}>
        <img className={classes.microGeenImage} src={microgreenImg} />

        <div className={classes.microDetails}>
          <div className={classes.whatSMicrogress}>
            <div className={classes.ANS}>
              
              <b>Microgreens</b> are young, edible plants harvested shortly after
              sprouting, when they are at their peak in flavor and nutrition.
              These tiny greens contain highly concentrated levels of vitamins,
              minerals, antioxidants, and enzymes—often 4 to 40 times more than
              fully grown vegetables. Their fresh taste, vibrant colour, and
              high nutritional value make them an excellent addition to everyday
              meals.
            </div>
          </div>

          <div className={classes.types}>
            <div className={classes.newleaf}>
            <PiPlantLight className={classes.leaf}/>
            <div className={classes.ty1}> Types of Microgreens</div>
            </div>
            <div className={classes.tyd1}>
              <b>Microgreens</b> come in categories offering unique taste and
              health benefits. They include leafy greens like kale, spinach, and
              lettuce; herbs such as basil, coriander, and parsley; cruciferous
              varieties like broccoli, mustard, and radish; and specialty
              microgreens like sunflower, pea shoots, and wheatgrass. Each type
              delivers distinct flavours, from mild to spicy, making them
              versatile for many dishes.
          </div>
          </div>

          <div className={classes.benifits}>
            <div className={classes.bf1}>Benefits of Microgreens?</div>
            {/* <ul className={classes.bf2}>
  <li>Extremely high in vitamins, minerals, and antioxidants</li>
  <li>Supports immunity, digestion, and overall natural wellness</li>
  <li>Adds vibrant colour, flavour, and texture to meals</li>
  <li>Grown sustainably without pesticides using minimal resources</li>
</ul>
</div> */}
{/* <div className={classes.bullet}>
   <FaCircle className={classes.bullet1}/> */}

            <div className={classes.bf2}> 
               <FaCircle className={classes.bullet1}/>
               Extremely high in vitamins, minerals, and antioxidants
            </div>
            <div className={classes.bf2}>
            <FaCircle className={classes.bullet2}/>
            Supports immunity, digestion, and overall wellness natural
            </div>
            <div className={classes.bf2}>
              <FaCircle className={classes.bullet3}/>
            Adds vibrant colour, flavour, and texture to meals
            </div>
            <div className={classes.bf2}>
            <FaCircle className={classes.bullet4}/>
            Grown sustainably without pesticides using minimal resources
            </div>
            </div>
          </div>
        </div>
        </div>

  );
}

export default Microgreen;
