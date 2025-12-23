import classes from "./Product.module.css";
import { AiOutlineProduct } from "react-icons/ai";

function Product() {
 
  const items = [
    {
      title: "Broccoli",
      img: "https://media.istockphoto.com/id/533995930/photo/sprout.jpg?s=612x612&w=0&k=20&c=F_kMgwgpa2NDWuhEkQIqr2KaHCMa829Qnyj2Pi9njD8=",
      desc: "Rich in antioxidants and sulforaphane, these broccoli microgreens support immunity, detoxification, and overall wellness. Perfect for salads, sandwiches, smoothies, and garnishing meals.",
    },
    {
      title: "Pink Radish",
      img: "https://media.istockphoto.com/id/1372746721/photo/fresh-purple-radish-sprouts-isolated-on-white-microgreens.webp?a=1&s=612x612&w=0&k=20&c=F6tbFp17hr5fqpaMm6jgqEJQrpB6D8Hqu99SWaAKXlc=",
      desc: "Spicy and crunchy, radish microgreens add flavor and nutrition to your dishes. Packed with vitamins, minerals, and antioxidants for a healthy, tasty boost.",
    },
    {
      title: "Sunflower",
      img: "https://media.istockphoto.com/id/2242154582/photo/microgreens-of-sunflower-seeds-on-a-white-background-concept-of-proper-nutrition-healthy.jpg?s=612x612&w=0&k=20&c=27bLoNR_wpRAc7IjwhrGTU_FDTQX2XNo6QrPY5kFBFA=",
      desc: "Nutty and crisp, sunflower microgreens are high in protein and essential nutrients. Ideal for sandwiches, salads, and healthy snacking.",
    },
    {
      title: "Pea Shoot",
      img: "https://th.bing.com/th/id/OIP.6iucbHFg-UelTLdGBDTtlAHaE8?w=302&h=201&c=7&r=0&o=7&pid=1.7&rm=3",
      desc: "Sweet, tender pea shoots are nutrient-rich and versatile. Excellent in stir-fries, salads, and wraps, providing natural vitamins, minerals, and antioxidants.",
    },
    {
      title: "Basil",
      img: "https://media.istockphoto.com/id/1222634068/photo/broccoli-microgreen-green-leaf-texture-close-up.jpg?s=612x612&w=0&k=20&c=rV7ISuX1rg9FyRibVD0UTv8i9j-dLn39dRp6PmyOv4U=",
      desc: "romatic and flavorful, basil microgreens enhance taste while offering antioxidants and nutrients. Perfect for garnishing dishes, sandwiches, or adding to smoothies.",
    },
    {
      title: "Sango raddish",
      img: "https://media.istockphoto.com/id/1370477902/photo/fresh-purple-radish-sprouts-isolated-on-white-microgreens.jpg?s=612x612&w=0&k=20&c=Yq-Olif7hdLPoEmk1HQaVPHGmPjJ6DieZi5Ume3L-HE=",
      desc: "Fresh and fragrant, coriander microgreens add flavor and essential vitamins to meals. Great for salads, soups, and garnishing your favorite dishes.",
    },
    {
      title: "Mustard",
      img: "https://media.istockphoto.com/id/1475449322/photo/kale-sprouts-on-white-background.jpg?s=612x612&w=0&k=20&c=LiChwvd_PbMrB_a6BL-rBYO8L6u6IEcRNrmxo2pZRCo=",
      desc: "Bold, spicy mustard microgreens are packed with antioxidants, vitamins, and minerals. Ideal for sandwiches, salads, and healthy culinary creations.",
    },
    {
      title: "Bokchoy",
      img: "https://media.istockphoto.com/id/1457057073/photo/microgreens-superfood-microgreen-sprouts-in-plastic-container-close-up.jpg?s=612x612&w=0&k=20&c=TRpdUmQZvqpCcbYcYRflMqfQpwDwCCT2Q4dL_qD64KY=",
      desc: "Superfood kale microgreens are loaded with vitamins, minerals, and antioxidants. Perfect for smoothies, salads, or adding nutrient density to everyday meals.",
    },
    {
      title: "Spinach",
      img: "https://images.unsplash.com/photo-1645712429415-e613305e2300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHNwaW5hY2glMjBtaWNyb2dyZWVuJTIwZnJlZSUyMGhkJTIwaW1hZ2UlMjBkb3dubG9hZHxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Tender spinach microgreens are mild and nutritious, rich in iron, vitamins, and antioxidants. Great for salads, soups, and gre.",
    },
      
    {
      title: "Fenugreek",
      img: "https://media.istockphoto.com/id/1943347825/photo/young-sprouts-of-sweet-peas-on-the-window.jpg?s=612x612&w=0&k=20&c=zyQArfyfYfOQkCS2tFJapk1frEUaWWPMrq8LarkBwcA=",
      desc: "Slightly bitter fenugreek microgreens aid digestion and are rich in nutrients. Ideal for culinary dishes, salads, or garnishing your meals.",
    },
    {
      title: "Beetroot",
      img: "https://media.istockphoto.com/id/2246692618/photo/concept-of-healthy-eating-wholesome-foods-vegetarianism.jpg?s=612x612&w=0&k=20&c=NVKGHrXa6xahEuJeS2sJW4FnKGd3N1HbRXrSvHe7FTE=",
      desc: "Vibrant beetroot microgreens are packed with antioxidants and nutrients. Add color, taste, and nutrition to salads, wraps, or smoothies.",
    },
    {
      title: "Turnip",
      img: "https://media.istockphoto.com/id/2055928198/photo/microgreens-japanese-cabbage-sprouts-on-white-isolate-background-healthy-vitamin-nutrition.jpg?s=612x612&w=0&k=20&c=YJxQamMgOkpqucC2La0FUStzkG-QTIGH3VnphE2VwcE=",
      desc: "Bright and nutritious, amaranth microgreens are rich in vitamins and antioxidants. Perfect for adding color, flavor, and health benefits to meals.",
    },
  ];

  return (
    <div className={classes.ProductParentBox}>
       <div className={classes.logo}>
    <AiOutlineProduct className={classes.prologo}></AiOutlineProduct>
<div className={classes.prTitle}>Products</div>
</div>
      <div className={classes.ProductWrapper}>
        {items.map((item, index) => (
          <div className={classes.ProductGroup} key={index}>
            <img
              src={item.img}
              alt={item.title}
              className={classes.ProductImage}
            />

            <div className={classes.ProductTitle}>{item.title}</div>
            <div className={classes.ProductDescription}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;

// import classes from "./Product.module.css"

// function Product() {
//     return (
//       <div className={classes.ProductParentBox}>

// <div className={classes.ProductGroup}>

//   <div className={classes.ProductImage}></div>
//   <div className={classes.ProductTitle}>AALLU WITH SHAALU</div>
//   <div className={classes.ProductDescription}>Motapppa With Cake Eating hungry stomack. alway hungry for cake and other things like drinks. Ans one is Wadapaav girl</div>

// </div>

//       </div>
//     );
//   }

//   export default Product;
