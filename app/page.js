"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
  loading: () => <p>loader</p>,
});

const SelectProduct = dynamic(() => import("@/app/commonUse/SelectProduct"), {
  loading: () => <p>loader</p>,
});

const FooterP = dynamic(
  () => import("@/app/commonUse/bottompopup/BottomHandler"),
  {
    loading: () => <p>loader</p>,
  }
);

const page = () => {
  useEffect(() => {
    localStorage.setItem("PATH_KEY", "/");
  }, []);

  return (
    <section className="">
      <div className="">
        {/* <SelectProduct />

        <Review />

        <Footer /> */}

        <FooterP />
      </div>
    </section>
  );
};

export default page;
