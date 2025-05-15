import { FaWhatsapp, FaEnvelope, FaTelegram } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "+27763879307"; // Replace with your WhatsApp number (including country code)
  const emailAddress = "moloromalepe17@gmail.com"; // Replace with your email address
  const emailSubject = "New Inquiry from Portfolio";
  const telegramUName = "wig4m";

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          <span className="box-reflect below-4">Contact Me</span>
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-8">
          <p className="text-gray-700 mb-6 text-center font-medium">
            Connect me via:
          </p>
          <div className=" flex flex-row justify-between">
            {/* WhatsApp Button */}
            <div className="flex justify-center ">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-green-200 text-green-500 font-bold py-3 px-6 rounded-md transition duration-200"
              >
                <FaWhatsapp size={48} />
              </a>
            </div>
            <div className="flex justify-center ">
              <a
                href={`https://t.me/${telegramUName}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:bg-blue-200 text-blue-500 font-bold py-3 px-6 rounded-md transition duration-200"
              >
                <FaTelegram size={48} />
              </a>
            </div>

            {/* Email Button */}
            <div className="flex justify-center">
              <a
                href={`mailto:${emailAddress}?subject=${encodeURIComponent(
                  emailSubject
                )}`}
                className=" hover:bg-orange-200 text-orange-500 font-bold py-3 px-6 rounded-md transition duration-200"
              >
                <FaEnvelope size={48} />
              </a>
            </div>
          </div>
          <p className="text-gray-600 mt-3 flex justify-center">
            Looking forward to connecting!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
