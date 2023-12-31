import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { productsAction } from "src/redux/slices/product";
// import { Product } from "src/types";

const Product = () => {
  const dispatch = useAppDispatch();
  const [products, setProducts] = useState<any | null>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response: any = await dispatch(productsAction());
      setProducts(response?.payload?.data);
    };

    fetchProducts();
  }, [dispatch, products]);

  return (
    <section className="px-[_calc(_1rem+_8vw)] py-[_calc(_1rem+_8vh)]">
      {products?.map((prod) => (
        <article key={prod?.id} className="relative flex items-center justify-between gap-6">
          <div className=" flex flex-col gap-3 w-[20%]">
            {console.log(prod?.category)}
            {prod.images.map((image, index) => (
              <img
                src={image}
                alt=""
                className="w-max-full h-[5rem] p-2 rounded-sm cursor-pointer bg-slate-400"
                // onClick={() => handleImageClick(image)}
                key={index}
              />
            ))}
            <div className="active-image"></div>
          </div>

          {/* <div className=" bg-slate-400 p-2 h-auto w-full">
            <img src={activeImage} alt="Active Product Image" />
          </div> */}

          <div className="relative flex flex-col p-2 w-[70%] gap-3">
            <h2 className="text-2xl ">{prod.title}</h2>
            <p className="text-[1rem] my-2">{prod.price}</p>
            <p className="text-[1rem]">{prod.description}</p>
            <hr className="my-2" />
            {/* <p className="flex gap-4 text-[1rem]">
              {" "}
              Size :{" "}
              {prod.size.map((color) => (
                <p key={color} className={`px-3 border rounded-sm text-white text-center `}>
                  {color}
                </p>
              ))}
            </p> */}
            <section className=" flex w-full items-center mt-4 gap-2 mb-7">
              <div className=" flex w-full">
                <button className="bg-slate-200 py-2 px-4 w-[40%] rounded-sm border-[#000000] border h-[2.5rem]">
                  -
                </button>
                <p className="bg-slate-200 py-2 px-4 w-full border-[#000000] border h-[2.5rem] text-center">
                  {2}
                </p>
                <button className="py-2 px-4 w-[40%] border h-[2.5rem] rounded-sm bg-[#DB4444] text-white">
                  +
                </button>
              </div>
              <button className="  w-full py-2 px-4 rounded-sm bg-[#DB4444] text-white h-[2.5rem]">
                Buy Now
              </button>
            </section>

            {/* <div className="border-[#000000] border p-3 rounded-sm">
              <div className="flex items-center gap-4">
                <p className="text-[2rem]">{prod.details[0].icon}</p>
                <article className="flex flex-col gap-1">
                  <h2 className="text-[1rem]">{prod.details[0].title}</h2>
                  <p className="text-[.8rem]">{prod.details[0].sum}</p>
                </article>
              </div>
              <hr className="my-4" />
              <div className="flex items-center gap-4">
                <p className="text-[2rem]">{prod.details[1].icon}</p>
                <article>
                  <h2 className="text-[1rem]">{prod.details[1].title}</h2>
                  <p className="text-[.8rem]">{prod.details[1].sum}</p>
                </article>
              </div>
            </div> */}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Product;
