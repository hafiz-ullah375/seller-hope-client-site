import React from 'react';

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-psd/laptop-psd-mockup-with-gradient-led-light_53876-138283.jpg?w=1380&t=st=1669601341~exp=1669601941~hmac=78c87fcefa6db8d0ca00ad15d05c698cb79f8f6c38f812b97ba1b5e7ef0c9dd3")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Find Best selling products online at
                    </h1>
                    <p className="mb-5 text-2xl">our sites is very popular and trusted you can find the best resell Product</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;