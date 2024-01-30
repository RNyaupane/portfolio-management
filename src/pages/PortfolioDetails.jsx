import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Header from "../components/Header";
import { data } from "../const/data";
import { Link } from 'react-router-dom'

const PortfolioDetails = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        if (selectedValue === 'mero') {
            window.location.href = '/portfolio-details';
        } else if (selectedValue === 'fam') {
            window.location.href = '/stock-details';
        }
    }
    return (
        <>
            <div className="bg-dark mx-5 mb-20">
                <Header />
                <div className="flex justify-between mt-8 ">
                    <Link to='/' className="justify-center items-center bg-secondary rounded-3xl px-4 py-2 text-secondary  text-base">
                        Back to Overview
                    </Link>
                    <div className="relative inline-block">
                        <select
                            className="bg-white rounded-3xl px-4 py-2 text-black font-[500] w-[100px] text-base appearance-none"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="mero">Mero</option>
                            <option value="fam">Fam</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <IoIosArrowDown className="text-black text-xl" />
                        </div>
                    </div>

                </div>
                <div className="mt-7">
                    <div className="flex justify-between">
                        <h2 className="text-white font-[500] text-lg ">
                            Total Portfolio Value
                        </h2>
                        <h2 className="text-white text-xl font-bold">5.45 Cr</h2>
                    </div>
                </div>

                <div className="rounded-2xl bg-lightest py-3 mt-4 mx-1">
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-primary text-left text-xl font-bold">
                                +18,245.10
                            </h1>
                            <p className="text-secondary text-left text-sm mt-1">
                                Day's Gain
                            </p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-red text-xl text-end font-bold">
                                -12.12 lac
                            </h1>
                            <p className="text-secondary text-end text-sm mt-1">
                                Unrealised Gain
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-primary text-left text-xl font-bold">
                                +9.99%
                            </h1>
                            <p className="text-secondary text-left text-sm mt-1">
                                Day's Gain %
                            </p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-red text-xl text-end font-bold">-99.99%</h1>
                            <p className="text-secondary text-end text-sm mt-1">
                                Unrealised Gain %
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-left text-xl font-bold">
                                +18,245.10
                            </h1>
                            <p className="text-primary text-left text-sm mt-1">(+9.99%)</p>
                            <p className="text-secondary text-left text-sm mt-1">
                                Realised Gain
                            </p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-xl text-end font-bold">
                                -12.12 lac
                            </h1>
                            <p className="text-red text-end text-sm mt-1">(-99.99%)</p>
                            <p className="text-secondary text-end text-sm mt-1">
                                Overall Gain
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-7">
                    <div className="flex justify-between">
                        <h2 className="text-white font-[500] text-lg ">Your Portfolio</h2>
                        <div className="flex gap-2">
                            <button className="bg-light rounded-[50%] px-3 py-1 text-black font-[700] text-base ">
                                %
                            </button>
                            <button className="bg-secondary rounded-[50%] px-3 py-2 text-secondary font-[400] text-base">
                                Rs
                            </button>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-3 mt-6">
                    {/* Row 1 */}
                    <div className="col-span-1 bg-transparent text-white p-4"></div>
                    <div className="col-span-1 bg-transparent text-white font-semibold py-4">Day's Gain</div>
                    <div className="col-span-1 flex flex- bg-transparent font-semibold text-white py-4">Unrelaised&nbsp;Gain</div>

                    {/* Row 2 */}

                    {data.map((data, index) => (
                        <React.Fragment key={index}>
                            <div className="col-span-1 bg-transparent text-white p-4 font-semibold">{data.title}</div>
                            <div className="col-span-1 bg-transparent text-primary p-4">{data.dayGain}</div>
                            <div className="col-span-1 bg-transparent text-end text-red  p-4">{data.unrealeasedGain}</div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PortfolioDetails;
