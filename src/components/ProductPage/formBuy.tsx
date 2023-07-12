
export default function FormBuy () {
  return (
    <form className="mx-auto m-6 max-w-lg rounded-lg border">
      <div className="flex flex-col gap-4 p-4 md:p-8">
        <div className="flex gap-5">
          <div>
            <input
              name="name"
              placeholder="الاسم الكامل"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>

          <div>
            <input
              placeholder="رقم الهاتف"
              name="phone"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>
        </div>
        <div className="flex gap-5 w-full">
          <div className="w-full  px-3 py-2 flex justify-end items-center ">
            <input
              placeholder="العنوان والمدينة"
              name="address"
              className="w-full rounded border  bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            ></input>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
            اطلب الان
          </button>

          <div className="flex items-center gap-4 mx-5 border border-gray-200 rounded">
            <button className=" text-lg w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
              +
            </button>
            <p>1</p>
            <button className=" text-lg w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75">
              -
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
