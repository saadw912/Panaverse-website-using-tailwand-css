interface HeadingProps {
    Heading: string;

  }
  
  const Heading: React.FC<HeadingProps> = ({ Heading }) => (
 
    <div className="text-[#B60E29]  lg:text-[40px] md:text-[30px] sm:text-[20px]  flex items-center gap-4
    pt-4 pb-4 justify-center">
      <div className="bg-[#B60E29] h-[2px] w-[40px] translate-y-1">

</div>
        {Heading}
        <div className="bg-[#B60E29] h-[2px] w-[40px] translate-y-1">

        </div>
    </div>
  );
  
  export default Heading;