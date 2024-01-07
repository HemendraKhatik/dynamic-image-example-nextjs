import { PreviewImage } from "@/components/PreviewImage";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Demo for previw link";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { name: string } }) {
  return new ImageResponse(<PreviewImage name={params.name} />);
}
