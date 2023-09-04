export default function Destinations() {
  let destinations = [
    {
      name: "Turkey",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      price: "225$",
      img: "https://i.insider.com/57e447a28f89f569038b4779?width=700",
    },
    {
      name: "Japan",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      price: "550$",
      img: "https://image.cnbcfm.com/api/v1/image/107108131-1661279269174-gettyimages-831412090-20170731-tana9023.jpeg?v=1661279373",
    },
    {
      name: "Italy",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      price: "220$",
      img: "https://static.independent.co.uk/2023/08/02/10/iStock-1248448159%20%281%29.jpg",
    },
    {
      name: "Turkey",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      price: "225$",
      img: "https://i.insider.com/57e447a28f89f569038b4779?width=700",
    },
    {
      name: "Japan",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      price: "550$",
      img: "https://image.cnbcfm.com/api/v1/image/107108131-1661279269174-gettyimages-831412090-20170731-tana9023.jpeg?v=1661279373",
    },
    {
      name: "Italy",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      price: "220$",
      img: "https://static.independent.co.uk/2023/08/02/10/iStock-1248448159%20%281%29.jpg",
    },
  ];
  return (
    <div className="flex flex-col justify-center">
      <span className="text-gray-700 text-xl mx-7 mb-2 flex justify-between">
        <span>
          Find you next adventure with these{" "}
          <span className="text-customBlue font-semibold">flights deals</span>
        </span>
        <span className="opacity-60 cursor-pointer">
          All {"  "}
          <i class="fa-solid fa-arrow-right"></i>
        </span>
      </span>
      <div className="flex justify-evenly items-center flex-wrap opacity-90 text-gray-700">
        {destinations.map((destination) => (
          <div class="max-w-sm rounded overflow-hidden shadow-lg h-96 flex flex-col justify-end cursor-pointer mb-10">
            <img
              class="w-full"
              src={destination.img}
              alt="Sunset in the mountains"
            />
            <div class="px-6 py-4">
              <div className="flex justify-between items-center">
                <div class="font-bold text-xl mb-2">{destination.name}</div>
                <span class="font-semibold  text-xl">{destination.price}</span>
              </div>
              <p class=" text-base">{destination.desc}</p>
            </div>
            <div class="px-6 pt-4 pb-2"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full my-4">
        <button className="px-4 shadow-black shadow-sm py-3 rounded-sm text-white bg-customBlue cursor-pointer w-32 text-center">
          Explore More
        </button>
      </div>
    </div>
  );
}
