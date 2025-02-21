import Link from "next/link";
import Image from "next/image";
import { formatToTimeAgo, formatToWon } from "@/lib/utils";

interface IListProduct {
  id: number;
  title: string;
  price: number;
  created_at: Date;
  photo: string;
}

export default function ListProducts({
  title,
  price,
  created_at,
  photo,
  id,
}: IListProduct) {
  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="relative size-28 rounded-md overflow-hidden">
        <Image 
            className="object-cover" 
            src={photo} alt={title} 
            fill />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {formatToTimeAgo(created_at.toString())}
        </span>
        <span className="text-lg">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
}
