"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import "./MainComponent/Home.css";

const Header = dynamic(() => import("./MainComponent/Header"));

const Contant = dynamic(() => import("./MainComponent/Content"), {
  loading: () => <p>loader</p>,
});

const Howtouse = dynamic(() => import("./MainComponent/Howtouse"), {
  loading: () => <p>loader</p>,
});

const Review = dynamic(() => import("./MainComponent/Reviews"), {
  loading: () => <p>loader</p>,
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
  loading: () => <p>loader</p>,
});

const SelectProduct = dynamic(() => import("./MainComponent/SelectProduct"), {
  loading: () => <p>loader</p>,
});

// const FooterP = dynamic(
//   () => import("@/app/commonUse/bottompopup/BottomHandler"),
//   {
//     loading: () => <p>loader</p>,
//   }
// );

const page = () => {
  useEffect(() => {
    localStorage.setItem("PATH_KEY", "/hfsr");
  }, []);

  return (
    <section className="sm:max-w-2xl w-full mx-auto bg-white">
      <div className="">
        <Header />

        <Contant />

        <SelectProduct />

        <Howtouse />

        <Review />

        <Footer />

        {/* <FooterP /> */}
      </div>
    </section>
  );
};

export default page;
