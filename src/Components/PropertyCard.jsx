// export default function PropertyCard({
//   img,
//   location,
//   title,
//   description,
//   star,
//   price,
//   total,
// }) {
//   return (
//     <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
//       <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
//         <img
//           src={img}
//           alt={title}
//           className="object-cover rounded-2xl w-full h-full"
//         />
//       </div>

//       <div className="flex flex-col flex-grow pl-5">
//         <div className="flex justify-between">
//           <p>{location}</p>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="h-7 cursor-pointer"
//           >
//             <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
//           </svg>
//         </div>

//         <h4 className="text-xl">{title}</h4>
//         <div className="border-b w-10 pt-2" />
//         <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

//         <div className="flex justify-between items-end pt-5">
//           <p className="flex items-center">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="h-5 text-red-400"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             {star}
//           </p>

//           <div>
//             <p className="text-lg font-semibold pb-2 lg:text-2xl">
//               {price} / night
//             </p>
//             <p className="text-right font-extralight">{total} total</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function PropertyCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="flex flex-col rounded-xl cursor-pointer hover:shadow-lg transition duration-200 ease-out">
      <div className="relative h-64 w-full">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover rounded-xl"
        />
        <button className="absolute top-3 right-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-white hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-col flex-grow p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">{location}</h3>
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-rose-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span>{star}</span>
          </div>
        </div>

        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-500 text-sm flex-grow">{description}</p>

        <div className="mt-4">
          <p className="text-lg">
            <span className="font-semibold">{price}</span>
            <span className="text-gray-500"> / night</span>
          </p>
          <p className="text-gray-500 text-sm">{total}</p>
        </div>
      </div>
    </div>
  );
}
