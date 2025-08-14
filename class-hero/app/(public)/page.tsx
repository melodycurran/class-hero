'use client'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Home() {
  return (
    <div className="text-center absolute top-15 bottom-0 right-0 left-0">
      <Parallax pages={6}>
        <ParallaxLayer offset={0} speed={2.5} className="flex justify-center items-center">
          <p className="text-[1.5rem] absolute top-45 left-5 md:top-75 md:left-20 md:text-4xl lg:top-55 lg:left-40">Unlock Potential</p>
          <DotLottieReact
            src="https://lottie.host/712ffad1-7154-4bb4-9430-29caf3ca2134/9P5DvAgJB5.lottie"
            loop
            autoplay
          />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 4 }} className="flex justify-start items-center">
          <div className="flex justify-center items-center w-full ml-[5%] w-1/2">
            <DotLottieReact
              src="https://lottie.host/77a9e27d-b08f-4beb-a88a-8138d43599d7/42lbNGAJDo.lottie"
              loop
              autoplay
            />
          </div>

        </ParallaxLayer>

        <ParallaxLayer offset={1.0} speed={1.0} className="flex justify-end items-center">
          <div className="flex justify-center items-center h-[10rem] w-full bg-blue-500">
            <p className="w-full font-serif text-[3.5rem] text-yellow-200 font-extrabold antialiased text-shadow-lg">Learn and Grow</p>
          </div>

        </ParallaxLayer>
        <ParallaxLayer offset={2.0} speed={1.5} className="flex justify-end items-center">
          <div className="flex justify-center items-center items-start h-[10rem] w-full bg-yellow-300">
            <p className="font-serif text-[3.5rem] font-extrabold antialiased text-purple-600 text-shadow-lg">Expertly Crafted</p>
          </div>

        </ParallaxLayer>

        <ParallaxLayer offset={3.0} speed={1.5} className="flex justify-end items-center">
          <div className="flex justify-center items-center h-[10rem] w-full bg-blue-300">
            <p className="font-serif text-[5rem]">By Real Educators</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.0} speed={1.5} className="flex justify-center items-center">
          <div className="flex justify-center items-center h-[10rem] w-full text-shadow-lg bg-black px-1">
            <p className="font-serif text-[3.5rem] font-extrabold antialiased text-pink-600">With Students' Success in Mind</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={5.0} speed={1.0} className="flex justify-center items-center">
          <DotLottieReact
            src="https://lottie.host/89385577-2163-43ca-aa2c-998b5b0f6758/nxFUgEImgY.lottie"
            loop
            autoplay
          />
        </ParallaxLayer>



      </Parallax>

    </div>


  );
}
