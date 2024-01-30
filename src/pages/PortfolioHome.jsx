import React from "react";
import { GoPlus } from "react-icons/go";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const PortfolioHome = () => {
    return (
        <>
            <div className="bg-dark mx-5 mb-20">
                <Header />
                <div className="flex justify-between mt-8 ">
                    <button className="bg-white rounded-3xl px-4 py-2 text-black font-[500] text-base">Overview</button>
                    <Link to='/portfolio-details' className="flex flex-row justify-center items-center bg-secondary rounded-3xl px-4 py-2 text-secondary  text-base">
                        <GoPlus className="text-secondary text-xl pt-1" />
                        Portfolio
                    </Link>
                </div>
                <div className="mt-7">
                    <div className="flex justify-between">
                        <h2 className="text-white font-[500] text-lg " >Total Portfolio Value</h2>
                        <h2 className="text-white text-xl font-bold" >5.45 Cr</h2>
                    </div>
                </div>

                <div className="rounded-2xl bg-lightest py-3 mt-4 mx-1">
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-primary text-left text-xl font-bold">+18,245.10</h1>
                            <p className="text-secondary text-left text-sm mt-1">Day's Gain</p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-red text-xl text-end font-bold">-12.12 lac</h1>
                            <p className="text-secondary text-end text-sm mt-1">Unrealised Gain</p>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-primary text-left text-xl font-bold">+9.99%</h1>
                            <p className="text-secondary text-left text-sm mt-1">Day's Gain %</p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-red text-xl text-end font-bold">-99.99%</h1>
                            <p className="text-secondary text-end text-sm mt-1">Unrealised Gain %</p>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-left text-xl font-bold">+18,245.10</h1>
                            <p className="text-primary text-left text-sm mt-1">(+9.99%)</p>
                            <p className="text-secondary text-left text-sm mt-1">Realised Gain</p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-xl text-end font-bold">-12.12 lac</h1>
                            <p className="text-red text-end text-sm mt-1">(-99.99%)</p>
                            <p className="text-secondary text-end text-sm mt-1">Overall Gain</p>
                        </div>
                    </div>
                </div>

                <div className="mt-7">
                    <div className="flex justify-between">
                        <h2 className="text-white font-[500] text-lg " >Your Portfolio</h2>
                    </div>
                    <div className="flex gap-3 mt-3 overflow-hidden">
                        <button className="bg-light rounded-3xl px-2 py-1 text-black font-[700] text-sm ">Day's&nbsp;Gain</button>
                        <button className="bg-secondary rounded-3xl px-3 py-1 text-secondary font-[400] text-base">Realised</button>
                        <button className="bg-secondary rounded-3xl px-3 py-1 text-secondary font-[400] text-base">Overall</button>
                        <button className="bg-secondary rounded-3xl px-3 py-1 text-secondary font-[400] text-base">Unrealised</button>
                    </div>
                </div>
                <div className="mt-7 bg-darkest rounded-xl">
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-left text-xl font-bold">+18,245.10</h1>
                            <p className="text-primary text-left text-sm mt-1">(+9.99%)</p>
                            <p className="text-secondary text-left text-sm mt-1">Realised Gain</p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-xl text-end font-bold">-12.12 lac</h1>
                            <p className="text-red text-end text-sm mt-1">(-99.99%)</p>
                            <p className="text-secondary text-end text-sm mt-1">Overall Gain</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3 bg-darkest rounded-xl">
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-left text-xl font-bold">+18,245.10</h1>
                            <p className="text-primary text-left text-sm mt-1">(+9.99%)</p>
                            <p className="text-secondary text-left text-sm mt-1">Realised Gain</p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-xl text-end font-bold">-12.12 lac</h1>
                            <p className="text-red text-end text-sm mt-1">(-99.99%)</p>
                            <p className="text-secondary text-end text-sm mt-1">Overall Gain</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioHome;
