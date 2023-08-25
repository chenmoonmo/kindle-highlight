import { getClippings } from "@/utils";
import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import path from "path";

const fonts =
  "Noto Sans SC,PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, Songti SC";

export const GET = async (request: Request) => {
  const params = new URL(request.url).searchParams;
  const id = params.get("id");

  GlobalFonts.registerFromPath(
    path.join(process.cwd(), "/public/NotoSansSC-VariableFont_wght.ttf"),
    "Noto Sans SC"
  );

  GlobalFonts.registerFromPath(
    path.join(process.cwd(), "/public/AmazonEmber_Rg.ttf"),
    "Amazon Ember"
  );

  let book = null;
  if (id) {
    const books = await getClippings();
    book = books[+id];
  }

  const canvas = createCanvas(1024, 536);
  const ctx = canvas.getContext("2d");

  function getWrapText(text = "", maxWidth = 840) {
    let txtList = [];
    let str = "";
    for (let i = 0, len = text.length; i < len; i++) {
      str += text.charAt(i);
      if (ctx.measureText(str).width > maxWidth) {
        txtList.push(str.substring(0, str.length - 1));
        str = "";
        i--;
      }
    }
    txtList.push(str);
    return txtList;
  }

  function drawText(text: string, x = 0, y = 0, lineHeight = 38) {
    const txtList = getWrapText(text);
    txtList.forEach((txt, index) => {
      const textWidth = ctx.measureText(txt).width;
      ctx.fillStyle = "#e7e7e7";
      ctx.fillRect(x, y + lineHeight * index - 24, textWidth, lineHeight - 4);
      ctx.fillStyle = "#000";
      ctx.fillText(txt, x, y + lineHeight * index);
    });
    return txtList.length * lineHeight;
  }

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, 1024, 536);
  ctx.fillStyle = "#4B4B4B";
  ctx.beginPath();
  ctx.roundRect(15, 15, 994, 506, 32);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.roundRect(20, 20, 984, 496, 30);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#FFFFFD";
  ctx.beginPath();
  ctx.roundRect(40, 40, 944, 400, 20);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#9BA3AF";
  ctx.font = `500 40px Amazon Ember`;
  ctx.fillText("Kindle", 460, 453 + 40);

  if (book) {
    ctx.fillStyle = "#000";
    ctx.font = `bold 36px ${fonts}`;
    const showTitle =
      book.title.length > 15 ? book.title.slice(0, 15) + "..." : book.title;
    ctx.fillText(showTitle, 80, 96);

    if (book.author) {
      const showTitleLengh = ctx.measureText(showTitle).width;
      ctx.font = `bold 24px ${fonts}`;
      ctx.fillStyle = "#4c4c4c";
      ctx.fillText(book.author, 80 + showTitleLengh + 20, 96);
    }

    ctx.fillStyle = "#000";
    let startY = 96 + 20 + 36;
    book.highlights.map((highlight) => {
      if (startY < 350)
        if (highlight.text) {
          ctx.font = `600 24px ${fonts}`;
          const textHeight = drawText(highlight.text, 80, startY);
          startY += textHeight + 20;
        }
    });
  } else {
    ctx.fillStyle = "#000";
    ctx.font = `bold 80px ${fonts}`;

    const text = `${process.env.NEXT_PUBLIC_USER} 的 Kindle`;
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(
      `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
      1024 / 2 - textWidth / 2,
      536 / 2
    );
  }

  const buffer = canvas.toBuffer("image/png");
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
