export function ProductCardSkelleton() {
  const flashAnimation = (
    <div className="animate-flash-animation rounded-lg w-full h-full m-auto bg-gradient-to-r from-easyblue via-white/75 to-easyblue" />
  );

  return (
    <>
      <div className="flex items-center justify-center absolute -top-1 w-56 h-3 rounded-lg bg-private">
        <div className="relative overflow-hidden rounded-lg h-1 w-52 m-auto bg-easyblue">
          {flashAnimation}
        </div>
      </div>
      <div className=" absolute top-8 left-6 w-2 h-2 rounded-full bg-easyblue overflow-hidden">
        {flashAnimation}
      </div>
      <div className=" absolute top-5 right-3 overflow-hidden bg-easyblue rounded-full flex items-center justify-center w-9 h-9">
        {flashAnimation}
      </div>
      <div className=" felx flex-col text-center items-center justify-center w-36 m-auto">
        <div className="overflow-hidden h-3 mb-1 w-16 m-auto bg-easyblue rounded-full">
          {flashAnimation}
        </div>
        <div className="overflow-hidden h-5 mb-1 w-full bg-easyblue rounded-full">
          {flashAnimation}
        </div>
        <div className="overflow-hidden h-4 mb-1 w-20 m-auto bg-easyblue rounded-full">
          {flashAnimation}
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-2 w-full">
        <div className="overflow-hidden text-center truncate w-full h-7 mb-1 rounded-full bg-easyblue">
          {flashAnimation}
        </div>
        <div className="overflow-hidden text-center truncate w-full h-7 mb-1 rounded-full bg-easyblue">
          {flashAnimation}
        </div>
      </div>
      <ul className=" flex flex-col justify-center p-2 items-center gap-2 w-full h-full bg-easyblue rounded-xl">
        <div className="overflow-hidden h-5 mb-1 w-full bg-darkblue rounded-full">
          {flashAnimation}
        </div>

        <li className=" flex gap-2 items-center bg-darkblue w-full p-2 rounded-xl">
          <div className="overflow-hidden w-8 h-8 rounded-full bg-easyblue">{flashAnimation}</div>
          <div className="overflow-hidden h-5 mb-1 w-32 bg-easyblue rounded-full">
            {flashAnimation}
          </div>
        </li>
        <li className=" flex gap-2 items-center bg-darkblue w-full p-2 rounded-xl">
          <div className="overflow-hidden w-8 h-8 rounded-full bg-easyblue">{flashAnimation}</div>
          <div className="overflow-hidden h-5 mb-1 w-32 bg-easyblue rounded-full">
            {flashAnimation}
          </div>
        </li>
        <li className=" flex gap-2 items-center bg-darkblue w-full p-2 rounded-xl">
          <div className="overflow-hidden w-8 h-8 rounded-full bg-easyblue">{flashAnimation}</div>
          <div className="overflow-hidden h-5 mb-1 w-32 bg-easyblue rounded-full">
            {flashAnimation}
          </div>
        </li>
      </ul>
    </>
  );
}
