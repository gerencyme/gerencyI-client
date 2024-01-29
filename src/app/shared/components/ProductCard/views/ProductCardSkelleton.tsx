import { useTheme } from '~hooks/contexts/useTheme';

export function ProductCardSkelleton() {
  const { theme } = useTheme();

  const darkAnimatin = (
    <div className="animate-flash-animation rounded-lg w-full h-full m-auto bg-gradient-to-r from-easyblue via-white/75 to-easyblue" />
  );
  const lightAnimatin = (
    <div className="animate-flash-animation rounded-lg w-full h-full m-auto bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50" />
  );

  const flashAnimation = theme === 'dark' ? darkAnimatin : lightAnimatin;

  return (
    <>
      <div className="flex items-center justify-center absolute -top-1 w-56 h-3 rounded-lg duration-500 dark:bg-private bg-gray-50">
        <div className="relative overflow-hidden rounded-lg h-1 w-52 m-auto duration-500 dark:bg-easyblue bg-gray-50">
          {flashAnimation}
        </div>
      </div>
      <div className=" absolute top-8 left-6 w-2 h-2 rounded-full duration-500 dark:bg-easyblue bg-gray-50 overflow-hidden">
        {flashAnimation}
      </div>
      <div className=" absolute top-5 right-3 overflow-hidden duration-500 dark:bg-easyblue bg-gray-50 rounded-full flex items-center justify-center w-9 h-9">
        {flashAnimation}
      </div>
      <div className=" felx flex-col text-center items-center justify-center w-36 m-auto">
        <div className="overflow-hidden h-3 mb-1 w-16 m-auto duration-500 dark:bg-easyblue bg-gray-50 rounded-full">
          {flashAnimation}
        </div>
        <div className="overflow-hidden h-5 mb-1 w-full duration-500 dark:bg-easyblue bg-gray-50 rounded-full">
          {flashAnimation}
        </div>
        <div className="overflow-hidden h-4 mb-1 w-20 m-auto duration-500 dark:bg-easyblue bg-gray-50 rounded-full">
          {flashAnimation}
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-2 w-full">
        <div className="overflow-hidden text-center truncate w-full h-7 mb-1 rounded-full duration-500 dark:bg-easyblue bg-gray-50">
          {flashAnimation}
        </div>
        <div className="overflow-hidden text-center truncate w-full h-7 mb-1 rounded-full duration-500 dark:bg-easyblue bg-gray-50">
          {flashAnimation}
        </div>
      </div>
      <ul className=" flex flex-col justify-center p-2 items-center gap-2 w-full h-full duration-500 dark:bg-easyblue bg-gray-50 rounded-xl">
        <div className="overflow-hidden h-5 mb-1 w-full duration-500 dark:bg-darkblue bg-gray-50 rounded-full">
          {flashAnimation}
        </div>

        <li className=" flex gap-2 items-center duration-500 dark:bg-darkblue bg-gray-100 w-full p-2 rounded-xl">
          <div className="overflow-hidden w-8 h-8 rounded-full duration-500 dark:bg-easyblue bg-gray-50">
            {flashAnimation}
          </div>
          <div className="overflow-hidden h-5 mb-1 w-32 duration-500 dark:bg-easyblue bg-gray-50 rounded-full">
            {flashAnimation}
          </div>
        </li>
        <li className=" flex gap-2 items-center duration-500 dark:bg-darkblue bg-gray-100 w-full p-2 rounded-xl">
          <div className="overflow-hidden w-8 h-8 rounded-full duration-500 dark:bg-easyblue bg-gray-50">
            {flashAnimation}
          </div>
          <div className="overflow-hidden h-5 mb-1 w-32 duration-500 dark:bg-easyblue bg-gray-50 rounded-full">
            {flashAnimation}
          </div>
        </li>
        <li className=" flex gap-2 items-center duration-500 dark:bg-darkblue bg-gray-100 w-full p-2 rounded-xl">
          <div className="overflow-hidden w-8 h-8 rounded-full duration-500 dark:bg-easyblue bg-gray-50">
            {flashAnimation}
          </div>
          <div className="overflow-hidden h-5 mb-1 w-32 duration-500 dark:bg-easyblue bg-gray-50 rounded-full">
            {flashAnimation}
          </div>
        </li>
      </ul>
    </>
  );
}
