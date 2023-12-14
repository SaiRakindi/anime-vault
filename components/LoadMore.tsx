import Image from "next/image";

const LoadMore = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div>
        <Image
          src="./spinner.svg"
          alt="spinner"
          width={56}
          height={56}
          className="object-container"
        />
      </div>
    </section>
  );
};

export default LoadMore;
