import classes from "./Subscription.module.css"
// import Photo from "./microgreens.png"
import { TiTick } from "react-icons/ti";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdCircleNotifications } from "react-icons/md";

function Subscription() {
    return (
 <div className={classes.subscriptionBox}>
      <div className= {classes.logobox}>
<MdCircleNotifications className= {classes.logo}/>

<div className={classes.sbTitle}>Subscriptions</div>
</div>
      <div className={classes.AllBoxes}>
            
      <div className={classes.SubBox1}>

<div className={classes.headGroup}>
<div className={classes.icon}>
<IoCheckmarkDoneCircleOutline className={classes.right5}/>
</div>
<div className={classes.subTitle}>Weekly Plan</div>
<div className={classes.description}>Loyalty Program (Refer your friend or anyone, and earn 20%)</div>
<div className={classes.price}>&#8377;299</div>
</div>


<div className={classes.featuresBox}>
<div className={classes.featuresTitle}><b>What’s included</b>
</div>
<div className={classes.features1}>
<TiTick className={classes.right1}/>
 <div className={classes.text1}>boxes of Live Microgreens
</div>
</div>


<div className={classes.features2}>
      <TiTick className={classes.right2}/>
      <div className={classes.text2}>boxes of Live Microgreens
</div>
</div>
<div className={classes.features3}>
      <TiTick className={classes.right3}/> 
       <div className={classes.text3}>Eco-friendly packaging
      </div>
      </div>
</div>

<button className={classes.Button}>Get Started</button>
      
</div>





      <div className={classes.SubBox1}>

<div className={classes.headGroup}>
<div className={classes.icon}>
<IoCheckmarkDoneCircleOutline className={classes.right5}/>
</div>
<div className={classes.subTitle}>Monthly Plan</div>
<div className={classes.description}>Loyalty Program (Refer your friend or anyone, and earn 20%)</div>
<div className={classes.price}>&#8377;1099</div>
</div>
<div className={classes.featuresBox}>
<div className={classes.featuresTitle}><b>What’s included</b></div>
<div className={classes.features1}>
<TiTick className={classes.right1}/>boxes of Live Microgreens
</div>
<div className={classes.features2}>
      <TiTick className={classes.right2}/>Free doorstep delivery
</div>
<div className={classes.features3}>
      <TiTick className={classes.right3}/> Eco-friendly packaging
      </div>
</div>

<button className={classes.Button}>Get Started</button>
        </div>


      <div className={classes.SubBox1}>

<div className={classes.headGroup}>
<div className={classes.icon}>
<IoCheckmarkDoneCircleOutline className={classes.right6}/>
</div>
<div className={classes.subTitle}>Quaterly Plan</div>
<div className={classes.description}>Loyalty Program (Refer your friend or anyone, and earn 20%)</div>
<div className={classes.price}>&#8377;2999</div>
</div>


<div className={classes.featuresBox}>
<div className={classes.featuresTitle}><b>What’s included</b></div>
<div className={classes.features1}>
<TiTick className={classes.right1}/>boxes of Live Microgreens
</div>
 <div className={classes.features2}>
      <TiTick className={classes.right2}/>Free doorstep delivery
</div>
<div className={classes.features3}>
      <TiTick className={classes.right3}/> Eco-friendly packaging
      </div>
</div>

<button className={classes.Button}>Get Started</button>
      
</div>


  
      <div className={classes.SubBox1}>

<div className={classes.headGroup}>
<div className={classes.icon}>
<IoCheckmarkDoneCircleOutline className={classes.right7}/>
</div>
<div className={classes.subTitle}>Half-Yearly Plan</div>
<div className={classes.description}>Loyalty Program (Refer your friend or anyone, and earn 20%)</div>
<div className={classes.price}>&#8377;5199</div>
</div>


<div className={classes.featuresBox}>
<div className={classes.featuresTitle}><b>What’s included</b></div>
<div className={classes.features1}>
<TiTick className={classes.right1}/>boxes of Live Microgreens
</div>
<div className={classes.features2}>
      <TiTick className={classes.right2}/>Free doorstep delivery
</div>
<div className={classes.features3}>
      <TiTick className={classes.right3}/> Eco-friendly packaging
      </div>
</div>

<button className={classes.Button}>Get Started</button>

      </div>

      </div>
      </div>

      
    );
  }
  
  export default Subscription;