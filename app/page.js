import Image from "next/image";
import Link from "next/link";

const friendsData = [
	{
		name: "BD",
		friends: [
			{ image: "/IMG_7441.jpg", name: "Alice" },
			{ image: "/1.jpg", name: "Bob" },
			{ image: "/2.jpg", name: "Charlie" },
			{ image: "/3.jpg", name: "David" },
			{ image: "/4.jpg", name: "Eve" },
		],
	},
	{
		name: "KA",
		friends: [
			{ image: "/7.jpg", name: "Frank" },
			{ image: "/8.jpg", name: "Grace" },
			{ image: "/9.jpg", name: "Hank" },
			{ image: "/10.jpg", name: "Ivy" },
			{ image: "/11.jpg", name: "Jack" },
		],
	},
	{
		name: "SI",
		friends: [
			{ image: "/12.jpg", name: "Kevin" },
			{ image: "/13.jpg", name: "Laura" },
			{ image: "/14.jpg", name: "Mike" },
			{ image: "/15.jpg", name: "Nancy" },
			{ image: "/16.jpg", name: "Oscar" },
		],
	},
];

function ClassCard({ className, friends }) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-lg">
			<h2 className="text-xl font-bold mb-4">Kelas {className}</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center ">
				{friends.map((friend, index) => (
					<div key={index} className="flex justify-center">
						<Image
							src={friend.image}
							width={100}
							height={100}
							alt={friend.name}
							className="rounded-full aspect-square object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-110 "
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="flex flex-col items-center gap-8 p-8 bg-gray-100 min-h-screen">
			{friendsData.map((kelas, index) => (
				<ClassCard
					key={index}
					className={kelas.name}
					friends={kelas.friends}
				/>
			))}
		</div>
	);
}
