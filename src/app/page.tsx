// src/app/page.tsx
import FullscreenTool from "@/components/FullscreenTool";

export default function Home() {
  return (
    <>
      <head>
        {{> title-meta}}
        {{> head-css}}
      </head>
      <body>
        {{> topbar }}

        {/* Updated Hero with FullscreenTool */}
      
<section  id="home"  className="pt-40 bg-[url('../images/hero/6.jpg')] bg-cover bg-center bg-light-200 bg-blend-overlay">
  <div className="container">
    <div className="text-center w-7/10 mx-auto">
      <div className="flex justify-center">
        <img src="assets/images/logo/sm-phone.png" alt="" className="mb-6" />
      </div>
      <h5 className="mb-4 text-primary text-xl">Welcome To Skywave</h5>
      <h1 className="lg:text-4.1xl md:text-3.3xl text-2.7xl mb-2">
        Are You Ready For A Revolution In Tech Industry?
        <span className="text-primary"> Explore Us.</span>
      </h1>
      <p className="mb-6 text-secondary">
        At the heart of every successful tech application lies a fusion of creativity, functionality, and
        user-centric design. Whether it's streamlining business processes, enhancing customer experiences...
      </p>
      <div className="mt-6 flex gap-4 justify-center">
        <img src="assets/images/logo/apple_store.png" alt="" />
        <img src="assets/images/logo/google-play.png" alt="" />
      </div>
      <div className="mt-12">
        <img src="assets/images/hero/7.png" alt="" />
      </div>

      {/* Fullscreen Color Tool - placed below the original content */}
      <div className="mt-16">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-dark">
            Screen Test & Calibration Tool
          </h3>
          <FullscreenTool />
        </div>
        <p className="mt-6 text-secondary text-center text-sm">
          Use this fullscreen color tool to test your display, check for dead pixels, or calibrate lighting.
        </p>
      </div>
    </div>
  </div>
		  
        </section>

        {/* All other sections remain unchanged */}
        <!-- About US Section --> {/* ... */}
        <!-- Feature Section --> {/* ... */}
        {/* ... rest of your page ... */}

        {{> footer }}
      </body>
    </>
  );
}