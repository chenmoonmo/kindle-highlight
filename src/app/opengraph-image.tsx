import { createCanvas, GlobalFonts } from "@napi-rs/canvas";
import path from "path";

const fonts = "Noto Sans SC";

export const runtime = "nodejs";

export const contentType = "image/png";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  GlobalFonts.registerFromPath(
    path.join(process.cwd(), "/public/NotoSansSC-Bold.ttf"),
    "Noto Sans SC"
  );

  GlobalFonts.registerFromPath(
    path.join(process.cwd(), "/public/NotoSansSC-Regular.ttf"),
    "Noto Sans SC Regular"
  );

  GlobalFonts.registerFromPath(
    path.join(process.cwd(), "/public/AmazonEmber_Rg.ttf"),
    "Amazon Ember"
  );

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

  ctx.fillStyle = "#000";
  ctx.font = `bold 80px ${fonts}`;

  const text = `${process.env.NEXT_PUBLIC_USER} 的 Kindle`;
  const textWidth = ctx.measureText(text).width;
  ctx.fillText(
    `${process.env.NEXT_PUBLIC_USER} 的 Kindle`,
    1024 / 2 - textWidth / 2,
    536 / 2
  );

  const buffer = canvas.toBuffer("image/png");
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
