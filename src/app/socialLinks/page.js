import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const SocialLinks = () => {
  const links = [
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/MoloroMalepe",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/moloro-malepe",
    },
    { name: "Whatsapp", icon: <FaWhatsapp size={24} />, url: "" },
  ];
  return (
    <div className="flex space-x-4 mt-4">
      {links.map((link) => (
        <a key={link.name} href={link.url} className="hover:text-blue-300">
          {link.icon} {/* Replace with actual icon components or images */}
        </a>
      ))}
    </div>
  );
};
export default SocialLinks;
