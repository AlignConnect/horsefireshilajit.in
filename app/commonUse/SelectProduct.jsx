import ShiProcket from "@/app/commonUse/shiprocket";
import { useGetShopifyDataQuery } from "@/lib/service/product.service";
import {
  selectProductById,
  decrementQuantity,
  incrementQuantity,
} from "@/lib/slice/product.slice";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const SelectProduct = () => {
  const searchParams = useSearchParams();

  const taboola_tracking = searchParams.get("tbclid");
  const dispatch = useDispatch();
  const { allVariants, selectProducts } = useSelector((state) => state.productslice);

  // using this data to get product image 
  const { data } = useGetShopifyDataQuery({ id: "9852036514107" });

  const handleChangeSingleVarient = (event) => {
    const variantId = event.target.value;
    // console.log('variantId: ', variantId);
    const selected = allVariants.find((v) => {
      return v.id === Number(variantId);
    });

    dispatch(selectProductById({ selectProducts: selected }));
  };

  // buyDirect:function(e){shiprocketCheckoutDirectHandler(e),l({name:"MANUAL_INTEG_".concat(null==e?void 0:e.type,"_BUTTON_CLICKED"),category:null==e?void 0:e.type})}


  // get product images
  const imageSrc = data?.images?.find((x) => String(x?.id) === String(selectProducts?.image_id))?.src;

  const ratingValue = 4.8;
  const totalStars = 5;

  return (
    <div className="sp_bg poppinsFont py-5">
      <div className="max-w-2xl mx-auto  px-3  ">
        <div className="grid sm:grid-cols-2 items-center sm:gap-6" id="form">
          <div className="py-6">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="pic"
                className="md:w-5/6 w-full mx-auto rounded-xl"
                loading="lazy"
                id="buynow"
              />
            ) : (
              <p>Product image's not available</p> // This can be a fallback message or a placeholder image
            )}
          </div>

          <div className="">
            <div className="fontPoppins font-extrabold sm:text-[1.3vw] text-[7.2vw]">
              Horse Fire Shilajit Resin
            </div>
            <div className="md:text-xl text-md fontPoppins text-gray-500">Pure Himalayan Origin  </div>
            <div className="fontPoppins flex items-center sm:space-x-2 space-x-1 py-1 ">
              <div className="flex text-[#ffd203]">
                {Array.from({ length: totalStars }, (_, index) => (
                  <IoStar
                    key={index}
                    color={
                      index < Math.round(ratingValue)
                        ? "gold"
                        : "lightgray"
                    }
                    size={20}
                  />
                ))}
              </div>

              <span className="sm:text-md text-sm font-medium text-gray-600">
                Excellent
              </span>

              <span className="sm:text-lg text-sm">|</span>

              <span className="sm:text-lg text-sm font-semibold ">
                {ratingValue}
              </span>

              <span className="sm:text-md text-sm text-gray-600">
                out of 5
              </span>
            </div>
            <div className="flex items-center py-2 space-x-2">
              <span className="text-gray-600 text-xl line-through">
                ₹{parseInt(selectProducts?.compare_at_price)}
              </span>
              <span className="md:text-5xl text-4xl font-extrabold text-gray-900">
                <span>₹{parseInt(selectProducts?.price)}</span>
              </span>
              <span className="clip_off text-white text-sm font-semibold bg-red-600 px-4 py-0.5 ">
                {parseInt(
                  ((selectProducts?.compare_at_price - selectProducts?.price) /
                    selectProducts?.compare_at_price) *
                  100
                )}
                % off
              </span>
            </div>

            {/* Size Info */}
            <div className="flex items-center my-3">
              <span className="text-xl font-extrabold">Size:</span>
              <span className="bg-yellow-100 text-yellow-600 font-semibold py-1 px-2 rounded-md ml-2 text-xl">
                {selectProducts?.title}
              </span>
            </div>
          </div>
        </div>




        <div className="grid md:grid-cols-1 items-center gap-4 selectedItem ">
          {allVariants?.map((variant, key) => {
            return (
              <label
                key={variant.id}
                value={variant.id}
                htmlFor={variant.id}
                className={`relative border border-gray-500 border-solid rounded-md cursor-pointer`}
              >

                {/* {key === 1 && (
                  <div className="absolute top-0 left-0 bg-[#df7700] px-1 rounded-ss-lg z-10 text-white text-sm">
                    Most popular
                  </div>
                )} */}

                <div
                  className={`fontPoppins text-center rounded-t-md py-1 ${selectProducts?.id === variant?.id ? "bg-[#05ca4c]" : "bg-gray-300"
                    }`}
                >
                  <h3 className="font-bold text-xl">
                    {variant?.title}
                  </h3>
                </div>
                <div
                  className={`rounded-b-md  p-2 sm:p-2  ${selectProducts?.id === variant?.id ? "activeStatus2" : ""
                    }`}
                >

                  <div
                    className={`flex gap-2 items-center ${key === 1 && ""}`}
                  >

                    <input
                      type="radio"
                      id={variant.id}
                      name="name"
                      value={variant.id}
                      onChange={handleChangeSingleVarient}
                      checked={selectProducts?.id === variant.id}
                    />



                    <div className="text-left ms-5 sm:ms-0 flex items-center gap-2 py-1">
                      <p
                        className="fontPoppins line-through text-lg text-gray-700"
                        style={{ textDecoration: "line-through red" }}
                      >
                        ₹{parseInt(variant?.compare_at_price)}
                      </p>


                      <p className="fontPoppins text-black font-bold md:text-[2.2vw] text-[8vw]">
                        ₹{parseInt(variant?.price)}
                      </p>


                      <p className="fontPoppins text-red-600 font-bold md:text-sm text-sm">
                        (
                        {parseInt(
                          ((variant?.compare_at_price - variant?.price) /
                            variant?.compare_at_price) *
                          100
                        )}
                        % off)
                      </p>

                    </div>
                  </div>
                  <div>
                    <p className="fontPoppins md:text-[1.2rem] text-sm text-gray-500 text-center">
                      (extra 10% discount on online payment)
                    </p>
                  </div>
                </div>
              </label>
            );
          })}
        </div>



        <div className="text-center py-3">
          <ShiProcket />
        </div>


      </div>
      <img
        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e87c6e29-6fc5-41dd-cde9-912aca28dc00/public"
        alt="checkout "
        loading="lazy"
        className="w-full"
      />
    </div>
  );
};

export default SelectProduct;
