import { getClippings } from "@/utils";
import { createCanvas } from "@napi-rs/canvas";

const fonts = "PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei";

export const GET = async (request: Request) => {
  const params = new URL(request.url).searchParams;
  const id = params.get("id");

  let book = null;
  if (id) {
    const books = await getClippings();
    book = books[+id];
  }

  const canvas = createCanvas(1500, 750);
  const ctx = canvas.getContext("2d");

  function getWrapText(text = "", maxWidth = 1300) {
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

  function drawText(text: string, x = 0, y = 0, lineHeight = 46) {
    const txtList = getWrapText(text);
    txtList.forEach((txt, index) => {
      const textWidth = ctx.measureText(txt).width;
      ctx.fillStyle = "#e7e7e7";
      ctx.fillRect(
        x,
        y + lineHeight * index - 36 + 2,
        textWidth,
        lineHeight - 4
      );
      ctx.fillStyle = "#000";
      ctx.fillText(txt, x, y + lineHeight * index);
    });
    return txtList.length * lineHeight;
  }

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, 1500, 750);
  ctx.fillStyle = "#4B4B4B";
  ctx.beginPath();
  ctx.roundRect(0, 0, 1500, 750, 42);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.roundRect(25, 20, 1450, 694, 42);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#FFFFFD";
  ctx.beginPath();
  ctx.roundRect(58, 48, 1384, 557, 10);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#fff";
  ctx.font = `bold 40px ${fonts}`;
  ctx.fillText("Kindle", 687, 629 + 40);

  if (book) {
    ctx.fillStyle = "#000";
    ctx.font = `bold 50px ${fonts}`;
    const showTitle =
      book.title.length > 15 ? book.title.slice(0, 15) + "..." : book.title;
    ctx.fillText(showTitle, 103, 110);

    if (book.author) {
      const showTitleLengh = ctx.measureText(showTitle).width;
      ctx.font = `bold 24px ${fonts}`;

      ctx.fillText(book.author, 103 + showTitleLengh + 20, 110);
    }

    ctx.fillStyle = "#000";
    let startY = 96 + 90;
    book.highlights.map((highlight) => {
      if (startY < 500)
        if (highlight.text) {
          ctx.font = `bold 36px ${fonts}`;
          const textHeight = drawText(highlight.text, 103, startY);
          startY += textHeight + 45;
        }
    });
  } else {
    ctx.fillStyle = "#000";
    ctx.font = `bold 80px ${fonts}`;

    const text = `${process.env.NEXT_PUBLIC_USER} 的 Kindle`;
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(
      `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
      1500 / 2 - textWidth / 2,
      421 / 2
    );
  }

  const buffer = canvas.toBuffer("image/png");
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
