import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex justify-center items-center min-h-screen bg-gray-100">
				<div className="flex flex-col items-center bg-white p-16 rounded-lg shadow-lg">
					<Image
						src="/IMG_7441.jpg"
						width={1000}
						height={1000}
						alt="yogi"
						className="w-1/5 max-w-[1000px] aspect-square object-cover rounded-full border-4 border-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
					/>
					<h1 className="text-center mt-4 text-lg font-semibold">
						Yogi Tri Dirgantara
					</h1>
				</div>
			</div>
		</>
	);
}
