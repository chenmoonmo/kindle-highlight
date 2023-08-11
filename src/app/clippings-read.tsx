"use client";
import React, { useState } from "react";
import { toObject } from "kindle-zhcn-clippings-to-json";
import { TextField } from "@radix-ui/themes";
import { KindleContainer } from "@/components";
import { useSystemInfo } from "@/hooks/useSystemInfo";
import Link from "next/link";

export const ClippingsRead: React.FC = () => {
  const { battery } = useSystemInfo();
  const [records, setRecords] = useState<any[]>([]);
  const [books, setBooks] = useState<any[]>([
    {
      id: 1,
      title:
        "足利女童连续失踪事件（获日本推理作家协会奖、新潮纪实奖、纪伊国屋年度ZUI佳图书！揭开日本司法的黑暗面，推动17年蒙冤者无罪释放！连环女童SHA人犯还在外面，你正在和凶手擦肩而过！）",
      author: "清水洁",
      records: [
        {
          title:
            "足利女童连续失踪事件（获日本推理作家协会奖、新潮纪实奖、纪伊国屋年度ZUI佳图书！揭开日本司法的黑暗面，推动17年蒙冤者无罪释放！连环女童SHA人犯还在外面，你正在和凶手擦肩而过！）",
          author: "清水洁",
          type: "Highlight",
          start: 3005,
          end: 3006,
          time: "2023-08-07T10:20:50.000Z",
          text: "营者被警方的秘密侦查吓到了。所谓的隐蔽住所，也不过是一名四十五岁男子离开父母后的独立住所。警方扣押的录像带中",
        },
      ],
    },
    {
      id: 2,
      title: "丰饶之海之一·春雪",
      author: "三岛由纪夫",
      records: [
        {
          title: "丰饶之海之一·春雪",
          author: "三岛由纪夫",
          type: "Highlight",
          start: 57,
          end: 58,
          time: "2023-08-07T11:09:53.000Z",
          text: "藤花的薄紫，一旦罩在她们比平时更加着意修饰的粉脸上，宛若沉落着优雅的死影。",
        },
        {
          title: "丰饶之海之一·春雪",
          author: "三岛由纪夫",
          type: "Highlight",
          start: 94,
          end: 96,
          time: "2023-08-07T11:13:54.000Z",
          text: "她端正姿势，径直果断前行，玉体轻摇，那动作虽然没有传到裙裾上来，但在清显眼里，那似扇形展开的香气馥郁的白色，随着音乐的旋律，宛若山巅的残雪，于飘忽不定的云影里时隐时现，或浮或沉。此时，他有生第一次发现那令人目眩的女性美的优雅的核心。",
        },
      ],
    },
  ]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // read file to string
    const reader = new FileReader();
    reader.onload = (e) => {
      const books: any = {};
      const text = e.target?.result as string;
      const json = toObject(text);
      console.log(json);
      json.map((record) => {
        if (record.title) {
          if (!books[record.title]) {
            const book = {
              title: record.title,
              author: record.author,
              records: [],
            };
            books[record.title] = book;
            setBooks((pre) => [...pre, book]);
          }
          books[record.title].records.push(record);
        }
      });
      setRecords(json);
    };
    reader.readAsText(file);
  };

  console.log(books)
  return (
    <>
      <label>
        <input type="file" accept="*,.txt" onChange={handleFileChange} />
      </label>
      <div
        className="flex justify-between px-2 pb-1 text-xs font-semibold"
        style={{
          zoom: 0.8,
        }}
      >
        <div>moon 的 Kindle</div>
        <div className="flex gap-1">
          <span className="flex items-center gap-[1px]">
            {battery}%
            <svg
              viewBox="0 0 1828 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1716"
              width="20"
              height="8"
            >
              <path
                d="M60.275337 3.248868l-57.025203 57.025203C-8.154907 10.377019 10.378284-8.156172 60.275337 3.248868z"
                fill="#2c2c2c"
                p-id="1717"
              ></path>
              <path
                d="M1822.354106 673.295002V345.400086c0-28.512601 0-61.302093-22.810081-79.835284-41.343272-34.215122-48.471422-79.835284-54.173943-126.881077-7.12815-59.876463-25.661341-111.199146-88.389064-135.434857H60.275337C28.911475 10.377019 10.378284 28.91021 3.250134 60.274071v898.146946C24.634585 1014.020589 71.680377 1022.57437 128.70558 1024h1459.845194c95.517215 0 134.009227-29.938232 153.968048-122.604186 12.830671-59.876463 12.830671-122.604186 67.004613-166.798719 15.681931-14.256301 12.830671-39.917642 12.830671-61.302093z m-104.070995-52.748312c1.42563 31.363862-11.405041 44.194532-41.343272 38.492012-57.025203-11.405041-64.153353 18.533191-64.153354 67.004613 1.42563 188.18317 0 188.18317-186.757539 188.183169-420.560871 0-839.696112-1.42563-1260.256984 1.425631-62.727723 0-81.260914-15.681931-79.835284-78.409654 4.27689-222.398291 2.85126-446.222213 0-668.620504-1.42563-54.173943 15.681931-68.430243 68.430244-67.004614 235.228962 1.42563 467.606664 0 699.984365 0 232.377702 0 464.755404 1.42563 697.133105-1.42563 55.599573-1.42563 71.281504 15.681931 65.578984 68.430244-4.27689 32.789492 1.42563 67.004613-1.425631 99.794105-2.85126 54.173943-5.70252 102.645365 72.707134 88.389064 25.661341-4.27689 29.938232 14.256301 29.938232 35.640752 0 75.558394-1.42563 152.542418 0 228.100812z"
                fill="#2c2c2c"
                p-id="1718"
              ></path>
              <path
                d="M851.500027 814.432379c-199.58821 0-399.17642-1.42563-598.76463 1.42563-51.322683 1.42563-62.727723-14.256301-62.727724-64.153353 2.85126-166.798718 2.85126-332.171807 0-498.970525 0-38.492012 8.55378-52.748313 49.897053-52.748313 407.730201 1.42563 816.886031 1.42563 1224.616232 0 41.343272 0 51.322683 12.830671 51.322682 52.748313-1.42563 168.224349-2.85126 336.448697 0 506.098676 1.42563 49.897053-17.107561 57.025203-61.302093 57.025202-199.58821-2.85126-402.02768-1.42563-603.04152-1.42563z"
                fill="#2c2c2c"
                p-id="1719"
              ></path>
            </svg>
          </span>
          <span>下午 5:02</span>
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 px-2 py-1 border-b-[1px] border-gray-300">
        <TextField.Root className="w-full">
          <TextField.Slot>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </TextField.Slot>
          <TextField.Input radius="full" placeholder="搜索 Kindle" />
        </TextField.Root>
        <div className="rounded-full p-1 cursor-pointer hover:bg-gray-300 ">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
              fill="currentColor"
              fillRule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="divide-y-2 px-2 mt-1">
        {books.map((book) => {
          return (
            <Link
              key={book.title + book.author}
              className="flex justify-between items-center p-2 pt-1 pr-1 text-xs font-semibold hover:bg-gray-200 cursor-pointer"
              href={`/book/${book.id}`}
            >
              <div className="flex-1 max-w-[90%]">
                <div className="text-ellipsis whitespace-nowrap overflow-hidden">
                  {book.title}
                </div>
                <div
                  className="mt-1"
                  style={{
                    zoom: 0.8,
                  }}
                >
                  {book.author}
                </div>
              </div>
              <div
                className="rounded-full p-1 hover:bg-gray-400"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </Link>
          );
        })}
      </div>

      {/* <Grid columns="repeat(3,368px)" rows="auto" gap="3" justify="start">
        {records.map((record, index) => (
          <div key={record.title + record.start + record.end} className="p-4">
            <KindleContainer>
              <Text
                className="bg-gray-200 font-medium text-sm  drop-shadow-sm blur-[0.3px]"
                size="1"
                style={{
                  fontFamily: "Amazon Ember",
                  textShadow: "2px 1px 2px rgba(0,0,0,0.15)",
                }}
              >
                {record.text}
              </Text>
              <Text
                size="1"
                className="absolute bottom-1 left-2 text-xs font-bold border-gray-200 blur-[0.3px]"
                style={{
                  fontFamily: "Amazon Ember",
                  textShadow: "2px 1px 2px rgba(0,0,0,0.15)",
                  zoom: 0.8,
                }}
              >
                {record.title}
              </Text>
            </KindleContainer>
          </div>
        ))}
      </Grid> */}
    </>
  );
};
