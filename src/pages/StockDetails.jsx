import React, { useState } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import Button from '../components/Button';
import Header from '../components/Header';
import tableData from '../const/TableData';
import { Link } from 'react-router-dom';

const StockDetails = () => {
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
                    <Link to='/' className="flex flex-row justify-center items-center font-[500] pr-4 py-2 text-white text-xl">
                        <FaArrowLeftLong className="text-white text-xl pt-1 mr-4" />
                        Fam
                    </Link>

                    <div className="relative inline-block">
                        <select
                            className="bg-white rounded-3xl px-4 py-2 text-black font-[600] w-[100px] text-base appearance-none"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="mero">ADBL</option>
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
                            Market Value
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
                            <p className="text-primary text-left text-sm mt-1">(+9.99%)</p>
                            <p className="text-secondary text-left text-sm mt-1">
                                Day's Gain
                            </p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-red text-xl text-end font-bold">
                                -12.12 lac
                            </h1>
                            <p className="text-red text-end text-sm mt-1">(-99.99%)</p>
                            <p className="text-secondary text-end text-sm mt-1">
                                Unealised Gain
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-primary text-left text-xl font-bold">
                                +18,245.10
                            </h1>
                            <p className="text-primary text-left text-sm mt-1">(+9.99%)</p>
                            <p className="text-secondary text-left text-sm mt-1">
                                Realised Gain
                            </p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-red text-xl text-end font-bold">
                                -12.12 lac
                            </h1>
                            <p className="text-red text-end text-sm mt-1">(-99.99%)</p>
                            <p className="text-secondary text-end text-sm mt-1">
                                Overall Gain
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl bg-lightest py-3 mt-4">
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-left text-xl font-bold">
                                +18,245.10
                            </h1>
                            <p className="text-secondary text-left text-sm mt-1">
                                Realised Gain
                            </p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-xl text-end font-bold">
                                -12.12 lac
                            </h1>
                            <p className="text-secondary text-end text-sm mt-1">
                                Overall Gain
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between ">
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-left text-xl font-bold">
                                +18,245.10
                            </h1>
                            <p className="text-secondary text-left text-sm mt-1">
                                Realised Gain
                            </p>
                        </div>
                        <div className="flex flex-col my-3 mx-5">
                            <h1 className="text-white text-xl text-end font-bold">
                                -12.12 lac
                            </h1>
                            <p className="text-secondary text-end text-sm mt-1">
                                Overall Gain
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-7 flex flex-row items-center justify-center gap-3 mx-5">
                    <Button title='Buy' color='primary' />
                    <Button title='Sell' color='red' />
                </div>

                <div className="mt-10">
                    <h2 className="text-white font-[500] text-xl ">Transcations</h2>
                    <div className="grid grid-cols-4 ">
                        {/* Row 1 */}
                        <div className="col-span-1 bg-transparent text-white font-semibold py-4">Date</div>
                        <div className="col-span-1 bg-transparent text-white font-semibold text-end py-4">Type</div>
                        <div className="col-span-1 bg-transparent text-white font-semibold text-end py-4">Qty</div>
                        <div className="col-span-1 bg-transparent font-semibold text-white text-end py-4">Price</div>

                        {/* Row 2 */}
                        {tableData.map((data, index) => (
                            <React.Fragment key={index}>
                                <div className="col-span-1 bg-transparent text-light py-3">{data.date}</div>
                                <div className="col-span-1 bg-transparent text-light text-end py-3">{data.type}</div>
                                <div className="col-span-1 bg-transparent text-light text-end py-3">{data.qty}</div>
                                <div className="col-span-1 bg-transparent text-light text-end py-3">{data.price}</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default StockDetails