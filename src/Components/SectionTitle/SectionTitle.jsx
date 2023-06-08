

const SectionTitle = ({heading , subHeading}) => {
  return (
    <div className="md:w-4/12 mx-auto text-center">
      <p className="text-yellow-600 mb-2 mt-6">---{subHeading}---</p>
      <h2 className="text-3xl uppercase border-y-4 py-3 mb-6">{heading}</h2>
    </div>
  );
};

export default SectionTitle;