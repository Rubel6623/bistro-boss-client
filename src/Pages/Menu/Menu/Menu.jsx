import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
  const [menu]=useMenu();
  const desserts=menu.filter(item=>item.category==='dessert');
  const pizza=menu.filter(item=>item.category==='pizza');
  const salad=menu.filter(item=>item.category==='salad');
  const soup=menu.filter(item=>item.category==='soup');
  const offered=menu.filter(item=>item.category==='offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title={"our menu"}></Cover>

      <SectionTitle
      subHeading={"Don't Miss"}
      heading={"Today Offer"}
      ></SectionTitle>

      {/* offered menu items*/}
      <MenuCategory items={offered}></MenuCategory>

      {/* desert menu items */}
      <MenuCategory items={desserts} title={"dessert"} img={dessertImg}></MenuCategory>

      {/* pizza menu */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>


      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>


      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;