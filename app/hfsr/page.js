"use client";
import dynamic from "next/dynamic";
import "./Components/Home.css";
import { useEffect } from "react";


const Header = dynamic(() => import("./components/Header"), {
    loading: () => <p>Header Loading</p>,
});

const Content = dynamic(() => import("./components/Content"), {
    loading: () => <p>Header Loading</p>,
});

const SelectProduct = dynamic(() => import("@/app/commonUse/SelectProduct"), {
    loading: () => <p>Header Loading</p>,
});

const Certified = dynamic(() => import("./Components/Certified"), {
    loading: () => <p>Header Loading</p>,
});


const CustomerReview = dynamic(() => import("./components/Reviews"), {
    loading: () => <p>Header Loading</p>,
});


const Footer = dynamic(() => import("@/app/components/Footer"), {
    loading: () => <p>Header Loading</p>,
});


const FooterP = dynamic(
    () => import("@/app/commonUse/bottompopup/BottomHandler"),
    {
        loading: () => <p>loader</p>,
    }
);

const page = () => {
    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfsr");
    }, []);

    return (
        <section className="w-full md:max-w-3xl mx-auto bg-gray-100">
            <div className="">
                <Header />
                <Content />
                <SelectProduct />
                <Certified/>
                <CustomerReview />
                <Footer />
                <FooterP />
            </div>
        </section>
    );
};

export default page;
