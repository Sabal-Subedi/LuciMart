import "../css/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__row1">
        <Product
          id={Math.random() * 10000}
          title={"Redmi note 7"}
          price={1800}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZMo9w2GfYT6LWdhajAX3vh5Bzn2oHioVsgl-94Aps1dxjxfG0MNhZrd7phNq2sgEMX5g&usqp=CAU"
          }
          rating={5}
        />
        <Product
          id={Math.random() * 10000}
          title={"Redmi note 8"}
          price={1900}
          image={
            "https://www.gizmochina.com/wp-content/uploads/2019/09/Xiaomi-Redmi-Note-8-1-500x500.jpg"
          }
          rating={5}
        />
        <Product
          id={Math.random() * 10000}
          title={"Redmi note 10 pro"}
          price={2300}
          image={"https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SKXI229b3"}
          rating={5}
        />
      </div>
      <div className="home__row2">
        <Product
          id={Math.random() * 10000}
          title={"Redmi note 8 pro"}
          price={2400}
          image={
            "https://www.gizmochina.com/wp-content/uploads/2019/08/Xiaomi-Redmi-Note-8-Pro-2-500x500.jpg"
          }
          rating={5}
        />
        <Product
          id={Math.random() * 10000}
          title={"Redmi note 9"}
          price={2000}
          image={"https://cf.shopee.ph/file/ecc5a13f6d1e41f629028993c35b4323"}
          rating={5}
        />
        <Product
          id={Math.random() * 10000}
          title={"Redmi note 9 pro"}
          price={2300}
          image={
            "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/Xiaomi_Redmi_Note_9_Pro_Max/Xiaomi_Redmi_Note_9_Pro_Max_L_1.jpg"
          }
          rating={5}
        />
      </div>
      <div className="home__row3">
        <Product
          id={Math.random() * 10000}
          title={"Redmi note 10"}
          price={2300}
          image={
            "https://cdn.shopify.com/s/files/1/0231/3627/2464/products/Product-Image---600x600-02.png?v=1620326869"
          }
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
