export const About = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl text-gray-900 font-bold text-center">
        About This Website
      </h1>
      <div className="w-[750px] flex justify-center mx-auto pt-7">
        <p className="text-lg text-gray-700">
          This website uses the{" "}
          <span className="font-semibold text-blue-600">
            REST Countries API
          </span>{" "}
          to display comprehensive information about countries from around the
          world.
          <br /> Explore our data to learn about country names, capitals,
          regions, populations, flags, and much more. Whether you’re curious
          about a particular country or looking for insights about global
          regions, our interactive explorer makes it easy.
          <br /> Our goal is to build a fully responsive and modern web
          application using the latest technologies, including React Router v7
          for seamless routing and Tailwind CSS for a beautiful, responsive user
          interface.
        </p>
      </div>
    </div>
  );
};
