const HomePost = () => {
  return (
    <>
      <div className="w-full flex mt-8 space-x-4">
        {/* left */}
        <div className="w-[35%] h-[200px] flex justify-center items-center">
          <img
            src="https://www.educative.io/v2api/editorpage/5045371785183232/image/6486562523316224"
            alt="img"
            className="h-full w-full object-cover"
          />
        </div>
        {/* right */}
        <div className="flex flex-col w-[65%]">
          <h1 className="text-xl font-semibold md:mb-2 mb-1 md:text-2xl">
            Typescript vs Javascript{" "}
          </h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p>@ShreeMangalam</p>
            <div className="flex space-x-2 ">
              <p>26/12/2023</p>
              <p>12:49</p>
            </div>
          </div>
          <p className="text-sm md:text-lg">
            TypeScript is simply a more feature-full and technically sound way
            to write JavaScript. TypeScript is simply a better way to write
            JavaScript code that is ECMAScript-compliant to ensure
            interoperability across web browsers.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePost;
