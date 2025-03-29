import React, { useEffect, useState } from "react";
import "../styles/globals.css";

// import Providers from "../redux/providers";
// import { store } from "../redux/store";
import { AppProps } from "next/app";
import SmoothScroll from "@/components/useables/SmoothScroll";
import Header from "@/components/useables/Header";
import Footer from "@/components/useables/Footer";
import Image from "next/image";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isdeskTop, setisdeskTop] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 500) {
      setisdeskTop(true);
      setIsLoading(true);

    }
    else {
      setisdeskTop(false);
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    const handleLoad = () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);       
    };
    if (document.readyState === 'complete') {
      if (window.innerWidth > 500) {
        setIsLoading(true);
        handleLoad();
      } else {
        setIsLoading(false);
      }
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {/* <Providers store={store}> */}
      {isdeskTop && <div className={`loader-mask transition-all ${isLoading ? '' : 'loader-mask-none'}`}>
        {/* <div className="loader w-full h-full noise-bg"> */}
          <div className="logo-div w-full">
            <Image
              height={200}
              width={250}
              src="/images/logo.webp"
              alt="logo"
              className="  text-center m-auto  reveal-curve-left"
            />
          </div>
        {/* </div> */}
      </div>}
      <SmoothScroll>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </SmoothScroll>
      {/* </Providers> */}
    </>
  );
};

export default App;