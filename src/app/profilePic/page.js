import Image from "next/image";
import myPhoto from "../assets/picture/myphoto.jpg";
const ProfilePic = () => {
  return <Image src={myPhoto} alt="my photo" />;
};
export default ProfilePic;
