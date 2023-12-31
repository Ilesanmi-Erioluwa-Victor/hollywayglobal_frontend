import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Slide } from "react-slideshow-image";

const SubHero = ({ product }: any) => {
const itemsLength = Array.from({ length: 5 });

const items = itemsLength.map((item, index) => {
  const style = { width: 150 + index * 100 };
  return (
    <div className="item" style={style}>
      {index + 1}
    </div>
  );
});
  return (
    <div className="bg-white  gap-3 items-center justify-center p-4 shadow-md rounded-md md:px-[1rem]">
      <div className="flex gap-6 items-center mb-4">
        <span className="block w-6 rounded-sm h-12 bg-green-500"></span>
        <span className="block text-green-500">Fresh products</span>
      </div>

      {/* <div className="grid grid-cols-product-grid gap-[10px]">
        {product.map((prod: any) => {
          if (prod.slug.includes("fresh product")) {
            return (
              <div
                className="flex flex-col gap-[0.4rem] mb-3 hover:cursor-pointer hover:shadow-lg rounded-sm px-4 pb-4 pt-0 transition-all"
                key={prod.id}
              >
                <div className="mb-3 ">
                  <img src={prod.images[0]} alt={prod.title} className=" w-[100%] img" />
                  
                </div>
                <p className="text-center text-[20px] bg-white self-start">{prod.title}</p>

                <p className="text-center text-[14px] bg-white self-start">
                  &#8358;{` ${prod.price}`}
                  <span className="text-slate-500 opacity-40 pl-4">{prod.slashedPrice}</span>
                </p>
              </div>
            );
          }
        })}
      </div> */}

      <AliceCarousel autoWidth mouseTracking items={items} />
    </div>
  );
};

export default SubHero;
