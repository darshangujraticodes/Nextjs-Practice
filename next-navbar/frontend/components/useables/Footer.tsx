import Image from "next/image"
import React from "react"

const Footer: React.FC = () => {
    return (
        <>
            <footer className="sec-padding bg-[#420516]">

                <div className="xl:w-[80%] md:w-[90%] w-[95%] m-auto">

                    <div className="flex items-start justify-center w-full flex-wrap md:flex-row flex-col md:gap-0 gap-[20px]">
                        <div className="lg:w-2/12 md:w-6/12 w-full h-full py-[20px] text-center">
                            <Image
                                src={'/images/footerlogo.webp'}
                                alt={"img"}
                                width={400}
                                className="max-w-full max-h-full text-center w-[200px] md:ms-0 m-auto"
                                height={500}
                                sizes="100%"
                                priority
                            />
                        </div>
                        <div className="lg:w-3/12 md:w-6/12 h-full flex items-start lg:justify-center justify-start py-[20px]">
                            <ul>
                                <li className="mb-3 ">
                                    <p className="footer-title ValkyRegular text-[#fff] tracking-widest">RESIDENTIAL PROJECTS</p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Lorem ipsum dolor sit amet </p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Lorem ipsum dolor sit amet </p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Lorem ipsum dolor sit amet </p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Lorem ipsum dolor sit amet </p>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-3/12 md:w-6/12 h-full flex items-start lg:justify-center justify-start py-[20px]">
                            <ul>
                                <li className="mb-3 ">
                                    <p className="footer-title ValkyRegular text-[#fff] tracking-widest">COMMERCIAL PROJECTS</p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Lorem ipsum dolor sit amet </p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Lorem ipsum dolor sit amet </p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Lorem ipsum dolor sit amet </p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Lorem ipsum dolor sit amet </p>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-2/12 md:w-6/12 h-full flex items-start lg:justify-center justify-start py-[20px]">
                            <ul>
                                <li className="mb-3 ">
                                    <p className="footer-title ValkyRegular text-[#fff] tracking-widest">QUICK LINKS</p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Properties</p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">About Us</p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Contact Us</p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Media</p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff]">Blog</p>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-2/12  md:w-12/12 h-full flex items-start lg:justify-center justify-start py-[20px]">
                            <ul>
                                <li className="mb-3 ">
                                    <p className="footer-title ValkyRegular text-[#fff] tracking-widest">CONTACT US</p>
                                </li>
                                <li className="mb-1">
                                    <p className="footer-li mont-regular text-[#fff] capitalize">VAKULA MANSION,, D NO 1-72/3/2/1/1F, GACHILBOWLI X ROADS, BESIDE HP PETROL BUNK, HYDERABAD, Ranga Reddy, Telangana, 500032</p>
                                </li>
                                <li className="mt-[20px]">
                                    <div className="flex items-center lg:justify-between justify-center lg:gap-0 gap-3 ">
                                        <div className="cursor-pointer">
                                            <Image
                                                src={'/images/footer/insta.svg'}
                                                alt={'alt'}
                                                width={32}
                                                height={32}
                                                className="max-w-full max-h-full text-center  object-contain"
                                                priority
                                            />
                                        </div>
                                        <div className="cursor-pointer">
                                            <Image
                                                src={'/images/footer/fb.svg'}
                                                alt={'alt'}
                                                width={32}
                                                height={32}
                                                className="max-w-full max-h-full text-center  object-contain"
                                                priority
                                            />
                                        </div>
                                        <div className="cursor-pointer">
                                            <Image
                                                src={'/images/footer/youtube.svg'}
                                                alt={'alt'}
                                                width={40}
                                                height={40}
                                                className="max-w-full max-h-full text-center  object-contain"
                                                priority
                                            />
                                        </div>
                                        <div className="cursor-pointer">
                                            <Image
                                                src={'/images/footer/linkedin.svg'}
                                                alt={'alt'}
                                                width={32}
                                                height={32}
                                                className="max-w-full max-h-full text-center  object-contain"
                                                priority
                                            />
                                        </div>
                                        <div className="cursor-pointer">
                                            <Image
                                                src={'/images/footer/x.svg'}
                                                alt={'alt'}
                                                width={30}
                                                height={30}
                                                className="max-w-full max-h-full text-center  object-contain"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>

            </footer>
        </>
    )
}


export default Footer;