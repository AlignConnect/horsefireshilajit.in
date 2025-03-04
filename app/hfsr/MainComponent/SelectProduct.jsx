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

  return (
    <div className="poppinsFont">
      <div className="  px-3  ">
        <div className="" id="form">
          <div className="py-3">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="pic"
                className="md:w-3/4 w-full mx-auto rounded-xl"
                loading="lazy"
                id="buynow"
              />
            ) : (
              <p>Product image's not available</p> // This can be a fallback message or a placeholder image
            )}
          </div>

          <div className="">
            <div className="flex items-center justify-between">
              <div className="fontPoppins font-bold sm:text-[2vw] text-[5.7vw]">
                Horse Fire Shilajit Resin
              </div>
              <div className="clip_off text-white md:text-md text-sm font-semibold bg-[#e88018] px-4 py-0.5 rounded-full">
                {parseInt(
                  ((selectProducts?.compare_at_price - selectProducts?.price) /
                    selectProducts?.compare_at_price) *
                  100
                )}
                % off
              </div>
            </div>

            <div className="md:text-lg text-sm fontPoppins text-[#329166] font-semibold">Special Price </div>

            <div className="flex items-end py-2 space-x-2">

              <span className="md:text-5xl text-4xl font-extrabold text-gray-900">
                <span>₹{parseInt(selectProducts?.price)}</span>
              </span>
              <span className="text-gray-600 text-xl line-through">
                ₹{parseInt(selectProducts?.compare_at_price)}
              </span>

            </div>

            <div className="text-xs text-gray-400 fontPoppins">*Tax Included</div>

            <div className="flex items-center justify-start py-2 gap-1">
              <div className="md:text-lg text-sm fontPoppins text-[#e88018] font-semibold">Special Offer:- </div>
              <div className="md:text-lg text-sm fontPoppins text-black">Get extra 10% with Prepaid Order </div>
            </div>

            <div className="  flex items-center gap-1 font-semibold my-2">
              <div className=" bg-[#329166] px-2  rounded-full  flex items-center w-[17%] sm:w-[9%] gap-1 ">
                <div className="text-white text-md flex items-center gap-1">
                  4.5 </div>
                <div className="text-white">★</div>
              </div>
              <div className="text-sm  text-gray-600">200 Ratings and 12 reviews </div>
            </div>




            {/* Size Info */}
            <div className="flex items-center">
              <span className="text-md font-extrabold">Size:</span>
              <span className="text-black font-semibold py-1 px-2">
                {selectProducts?.title}
              </span>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-start py-1 gap-1">
          <div className="md:text-lg text-sm fontPoppins text-[#e88018] font-semibold">Availability:- </div>
          <div className="md:text-lg text-sm fontPoppins text-[#329166]"> Ready to Ship </div>
        </div>

        <div className="grid grid-cols-12 items-center">
          <div className="col-span-2 sm:col-span-3">
            {allVariants?.map((variant, key) => {
              return (
                <div className="text-lg bg-[#329166] text-white py-2 text-center rounded-xl" key={key}>
                  {selectProducts?.title}
                </div>
              );
            })}
          </div>
          <div className="col-span-10 sm:col-span-9 text-center">
            <ShiProcket />
          </div>
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
