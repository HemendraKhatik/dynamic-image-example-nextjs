import { PreviewImage } from "@/components/PreviewImage";
import { ImageResponse } from "next/og";

export const size = {
  width: 256,
  height: 256,
};

export default async function Image({ params }: { params: { name: string } }) {
  return new ImageResponse(<PreviewImage name={params.name} />);
}
