export default function Reviews() {
  const reviews = [
    {
      name: "Jess Hopkins",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Vero debitis assumenda nostrum neque, voluptas voluptates porro 
      cupiditate magnam deleniti nisi ea natus provident!`,
      date: "Jan 21, 2022",
    },
    {
      name: "Peter Parker",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Vero debitis assumenda nostrum neque, voluptas voluptates porro 
      cupiditate magnam deleniti nisi ea natus provident!`,
      date: "Feb 13, 2021",
    },
    {
      name: "Romeo Larvels",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Vero debitis assumenda nostrum neque, voluptas voluptates porro 
      cupiditate magnam deleniti nisi ea natus provident!`,
      date: "Dec 30, 2023",
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center mt-32 mx-4">
        <span className="text-gray-700 text-xl flex justify-center mb-10">
          <span>
            What <span className="text-customBlue font-semibold">Jetma</span>{" "}
            users are saying
          </span>
        </span>
        <div className="flex justify-evenly items-center flex-wrap opacity-90 text-gray-700">
          {reviews.map((reviewer) => (
            <div className="flex flex-col gap-3 w-1/3 text-gray-600">
              <div className="flex flex-col gap-4 p-4">
                <div className="flex justify justify-between">
                  <div className="flex gap-2">
                    <div className="w-7 h-7 text-center rounded-full bg-red-500 text-white">
                      J
                    </div>
                    <span>{reviewer.name}</span>
                  </div>
                  <div className="flex p-1 gap-1 text-orange-300">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-half"></ion-icon>
                  </div>
                </div>

                <div>{reviewer.review}</div>

                <div className="flex justify-between">
                  <span>{reviewer.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
