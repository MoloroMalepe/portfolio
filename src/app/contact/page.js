import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "+27763879307"; // Replace with your WhatsApp number (including country code)
  const emailAddress = "moloromalepe17@gmail.com"; // Replace with your email address
  const emailSubject = "New Inquiry from Portfolio"; // Optional: Default subject for emails

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Contact Me
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-8">
          <p className="text-gray-700 mb-6 text-center font-medium">
            Looking to get in touch? Reach out via WhatsApp or email below!
          </p>
          <div className="space-y-4">
            {/* WhatsApp Button */}
            <div className="flex justify-center ">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-400 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-200"
              >
                <div className="flex flex-row space-x-3 w-[7rem]">
                  <FaWhatsapp size={48} />
                  <p className="font-mono text-sm">WhatsApp Me</p>
                </div>
              </a>
            </div>

            {/* Email Button */}
            <div className="flex justify-center  flex-row">
              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                  emailSubject
                )}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-200"
              >
                <svg
                  className="w-6 h-6 mr-2 inline-block align-middle"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="font-mono text-sm"> Email Me</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
