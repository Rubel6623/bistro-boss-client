import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './featured.css';


const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-10 my-20 text-white">
      <SectionTitle 
      subHeading={"Check it out"}
      heading={"From Our menu"}
      ></SectionTitle>
      <div className="md:flex items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">

        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>June 20, 2029</p>
          <p className="">WHERE CAN I GET SOME?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
        <button className="btn btn-outline border-0 border-b-4 mt-4">READ MORE</button>
        </div>

      </div>
    </div>
  );
};

export default Featured;