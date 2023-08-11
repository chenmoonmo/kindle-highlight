export const KindleContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className="kindle-farme relative p-8 pb-16 bg-black rounded-xl shadow-2xl"
      style={{
        border: "5px solid #4b4b4b",
      }}
    >
      <div className="relative flex items-stretch w-[350px] !bg-[#fffffd] aspect-[125/174] rounded-sm blur-[0.3px]">
        <div
          className="kindle-screen relative flex flex-col flex-auto w-full pt-1 px-1 overflow-hidden"
          style={{
            textShadow: "2px 1px 2px rgba(0,0,0,0.15)",
            filter: "grayScale(1) blur(0.3px)",
          }}
        >
          {children}
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-1/2 text-2xl font-medium text-gray-400 blur-[0.3px]"
        style={{
          fontFamily: "Amazon Ember",
        }}
      >
        Kindle
      </div>
    </div>
  );
};
