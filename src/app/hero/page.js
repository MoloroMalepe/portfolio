import SocialLinks from "../socialLinks/page"; // Create this component
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen items-center justify-center bg-slate-100 text-black">
      <div className="p-8">
        <h1 className="text-2xl font-semibold">
          Im{" "}
          <Link href="/about" className="underline text-blue-600">
            Moloro Malepe,
          </Link>
        </h1>
        <p className="text-3xl mt-4 font-bold">
          Entry-Level Developer | Quality Assurance Enthusiast
        </p>
        <p className="text-s my-2 text-gray-500">
          {" "}
          Junior developer & Focused on software testing and quality assurance,
          with a basic appreciation for user-centered design.
        </p>
        <div className="flex flex-row items-end w-full space-x-4">
          <SocialLinks />
          <div className="mt-2">
            <Link
              href="https://docs.google.com/document/d/1Yb9ngZEJosIre-EpuuyJ_r_-ypygJ85q/edit?usp=sharing&ouid=115767614928927143459&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg h-8 px-4 bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700"
            >
              View CV
            </Link>
          </div>
        </div>
      </div>
      {/* Render social links */}

      {/* Right Column (Image) */}
      <div className="p-8 bg-gray-200">
        {/* <Image
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gettyimages.com%2Fphotos%2Fyoung-professional-woman&psig=AOvVaw1caJbG3qJDXOLOoRM-1t8u&ust=1747218285967000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjvhb-doI0DFQAAAAAdAAAAABAE"
          alt=""
          className="rounded-lg "
          width={400}
          height={400}
        />{" "}
        PICTURE */}
      </div>
    </div>
  );
};

export default Hero;
