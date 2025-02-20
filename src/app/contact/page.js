// export default function Page() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] md:flex-row and lg:flex-col">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-3xl w-full">
//         <div className="w-flex-shrink-0 max-w-3xl border shadow-xl border-blue-400 rounded-lg p-6 bg-white hover:shadow-2xl transition-all duration-300">
//           <h1>Contact me! </h1>

//           <form className="flex flex-col gap-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Name
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
//               />
//             </label>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
//               />
//             </label>
//             <label className="block text-sm font-medium text-gray-700">
//               Message
//               <textarea
//                 name="message"
//                 required
//                 className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
//               />
//             </label>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

// ContactForm.js (or components/ContactForm.js)

export default function Page() {
  return (
    <div className="w-full border shadow-xl border-blue-400 rounded-lg p-6 bg-white hover:shadow-2xl transition-all duration-300 mt-5">
      <h1>Contact me!</h1>
      <form className="flex flex-col gap-2 mt-5">
        {/* ... (rest of the form elements - Name, Email, Message) */}
        <label className="block text-sm font-medium text-gray-200">
          Message
          <textarea
            name="message"
            required
            className="mt-1 block w-full sm:text-sm border-gray-300 rounded-md resize-none"
          />
        </label>
      </form>
    </div>
  );
}
