export const KindleContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="kindle-farme relative sm:p-8 sm:pb-16 md:bg-black rounded-xl md:shadow-2xl sm:border-[5px] sm:border-[#4b4b4b]">
      <div className="relative flex items-stretch w-screen h-screen sm:w-[350px] sm:h-auto !bg-[#fffffd] sm:aspect-[125/174] rounded-sm blur-[0.4px]">
        <div
          className="kindle-screen relative flex flex-col flex-auto w-full pt-1 px-1 overflow-hidden grayscale"
          style={{
            textShadow: "2px 1px 2px rgba(0,0,0,0.15)",
          }}
        >
          {children}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-1/2 text-2xl font-medium text-gray-400 blur-[0.3px] hidden sm:block">
        Kindle
      </div>
    </div>
  );
};
