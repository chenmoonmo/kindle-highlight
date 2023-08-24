import { Text } from "@radix-ui/themes";
import { Cover, KindlePower } from ".";

export const KindleContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="kindle-farme relative sm:p-8 sm:pb-16 sm:bg-black rounded-xl sm:shadow-2xl sm:border-[5px] sm:border-[#4b4b4b]">
      <div className="flex items-stretch w-screen h-screen sm:w-[350px] sm:h-auto !bg-[#fffffd] sm:aspect-[125/174] rounded-sm">
        <div className="kindle-screen relative flex flex-col flex-auto w-full pt-1 px-1 overflow-hidden grayscale blur-none sm:blur-[0.02vh]">
          {children}
          <Cover />
        </div>
        <KindlePower/>
      </div>
      <Text className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-1/2 text-2xl font-medium text-gray-400 blur-[0.3px] hidden sm:block">
        Kindle
      </Text>
    </div>
  );
};
