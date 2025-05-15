import SocialLinks from "../socialLinks/page"; // Create this component
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../profilePic/page";
import myPhoto from "../assets/picture/myphoto.jpg";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-slate-100 text-black min-h-screen">
      <div className="p-8">
        <h1 className="text-2xl font-semibold">
          I&#39;m{" "}
          <Link href="/about" className="underline text-blue-600">
            Moloro Malepe,
          </Link>
        </h1>
        <p className="text-3xl mt-4 font-bold text-gray-800">
          Entry-Level Developer & Quality Assurance Enthusiast
        </p>
        <p className="text-sm my-2 text-gray-500">
          {" "}
          Junior developer & Focused on software testing and quality assurance,
          with a basic appreciation for user-centered design.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-end w-full sm:space-x-4">
          <SocialLinks />
          <div className="mt-4 sm:mt-2 flex flex-row space-x-4">
            <Link
              href="https://docs.google.com/document/d/1Yb9ngZEJosIre-EpuuyJ_r_-ypygJ85q/edit?usp=sharing&ouid=115767614928927143459&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg h-10 px-6 bg-blue-600 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
            >
              View CV
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column (Image) */}
      <div className="p-8 mt-8 shadow-lg flex items-center justify-center border-l-0 md:border-l-2 md:border-gray-300 bg-white ">
        <Image
          src={myPhoto}
          alt="Moloro"
          width={400}
          height={200}
          className="rounded-xl"
        />
        {/* <ProfilePic /> */}
      </div>
    </div>
  );
}

export default Hero;
