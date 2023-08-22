"use client";

import { useFormatedTime } from "@/hooks/use-formated-time";
// import { useSystemInfo } from "@/hooks/use-system-info";
import { Flex, Text } from "@radix-ui/themes";

export const KindleHeader = () => {
  const time = useFormatedTime();
  // const { battery } = useSystemInfo();
  
  return (
    <Flex
      justify="between"
      px="2"
      pb="1"
      className="text-xs font-semibold"
      style={{
        zoom: 0.8,
      }}
    >
      <Text>moon 的 Kindle</Text>
      <div className="flex gap-1">
        <span className="flex items-center gap-[1px]">
          <Text>80%</Text>
          <svg
            viewBox="0 0 1828 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="8"
            fill="#2c2c2c"
          >
            <path d="M60.275337 3.248868l-57.025203 57.025203C-8.154907 10.377019 10.378284-8.156172 60.275337 3.248868z" />
            <path d="M1822.354106 673.295002V345.400086c0-28.512601 0-61.302093-22.810081-79.835284-41.343272-34.215122-48.471422-79.835284-54.173943-126.881077-7.12815-59.876463-25.661341-111.199146-88.389064-135.434857H60.275337C28.911475 10.377019 10.378284 28.91021 3.250134 60.274071v898.146946C24.634585 1014.020589 71.680377 1022.57437 128.70558 1024h1459.845194c95.517215 0 134.009227-29.938232 153.968048-122.604186 12.830671-59.876463 12.830671-122.604186 67.004613-166.798719 15.681931-14.256301 12.830671-39.917642 12.830671-61.302093z m-104.070995-52.748312c1.42563 31.363862-11.405041 44.194532-41.343272 38.492012-57.025203-11.405041-64.153353 18.533191-64.153354 67.004613 1.42563 188.18317 0 188.18317-186.757539 188.183169-420.560871 0-839.696112-1.42563-1260.256984 1.425631-62.727723 0-81.260914-15.681931-79.835284-78.409654 4.27689-222.398291 2.85126-446.222213 0-668.620504-1.42563-54.173943 15.681931-68.430243 68.430244-67.004614 235.228962 1.42563 467.606664 0 699.984365 0 232.377702 0 464.755404 1.42563 697.133105-1.42563 55.599573-1.42563 71.281504 15.681931 65.578984 68.430244-4.27689 32.789492 1.42563 67.004613-1.425631 99.794105-2.85126 54.173943-5.70252 102.645365 72.707134 88.389064 25.661341-4.27689 29.938232 14.256301 29.938232 35.640752 0 75.558394-1.42563 152.542418 0 228.100812z" />
            <path d="M851.500027 814.432379c-199.58821 0-399.17642-1.42563-598.76463 1.42563-51.322683 1.42563-62.727723-14.256301-62.727724-64.153353 2.85126-166.798718 2.85126-332.171807 0-498.970525 0-38.492012 8.55378-52.748313 49.897053-52.748313 407.730201 1.42563 816.886031 1.42563 1224.616232 0 41.343272 0 51.322683 12.830671 51.322682 52.748313-1.42563 168.224349-2.85126 336.448697 0 506.098676 1.42563 49.897053-17.107561 57.025203-61.302093 57.025202-199.58821-2.85126-402.02768-1.42563-603.04152-1.42563z" />
          </svg>
        </span>
        <Text>{time}</Text>
      </div>
    </Flex>
  );
};
