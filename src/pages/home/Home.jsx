import { Footer, Hero, PopularProduct, SpecialOffer, Subscribe, SuperQuality } from "../../componets";
import { CustomerReview } from "../../componets/customerreview/CustomerReview";
import { Services } from "../../componets/services/Services";

export const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProduct/>
      <SuperQuality/>
      <Services/>
      <SpecialOffer/>
      <CustomerReview/>
      <Subscribe/>
      <Footer/>
    </div>
  );
};
