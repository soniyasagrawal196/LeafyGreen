import classes from "./CompanyDetails.module.css";
import photo from "./first.jpg";
import photo2 from "./second.png";

function CompanyDetails() {
  return (
    <div className={classes.parentBlock}>
      <img className={classes.imageData} src={photo2} />
      <div className={classes.detailsBlock}>
        <div className={classes.title}>
        Leafy green microgreens deliver nutrition in micro form
        </div>
        <div className={classes.description}>
          Leafy Green Microgreens brings you pure freshness and natural power
          grown to elevate your daily nutrition. We combine modern hydroponic
          techniques with the purity of nature to cultivate microgreens that are
          exceptionally clean, vibrant, and nutrient-dense. Starting from
          carefully selected NON-GMO seeds, each batch is grown in a controlled,
          pesticide-free environment to ensure superior quality and maximum
          health benefits. Our microgreens are packed with essential vitamins,
          minerals, enzymes, and antioxidants—making them a powerful addition to
          any meal. At Leafy Green, we believe in promoting healthier lifestyles
          through fresh, natural foods, while also supporting the planet with
          sustainable, low-water vertical farming practices. With every harvest,
          we are committed to delivering greens that not only taste better but
          help you feel better, supporting your journey toward a cleaner,
          greener, and more nourishing way of living.From farm to plate, our microgreens are harvested at peak freshness to preserve their full nutritional value and bold flavor. Whether added to everyday meals or gourmet dishes, they provide a simple yet powerful way to nourish your body. Leafy Green Microgreens is where innovation, wellness, and sustainability come together for a healthier future.
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
