import React from "react";

import Faq from "react-faq-component";

import "./css/faq.css";

import dyst31 from "./images/dyst-3-1.png";
import dyst32 from "./images/dyst-3-2.png";
import dyst33 from "./images/dyst-3-3.png";
import shuffle from "./images/shuffle.png";

import zach from "./images/zach.png";
import cryptid from "./images/cryptid.png";
import drac from "./images/drac.png";
import chris from "./images/chris.png";

const App = () => {
	return (
		<div className="w-screen h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden">
			<div className="flex relative w-screen h-screen snap-start">
				<img
					className="absolute w-full h-full object-top object-cover"
					src={dyst31}
					alt=""
				/>
				<div className="absolute w-full h-full bg-vgray-900 opacity-75"></div>
				<div className="absolute w-full h-full">
					<div className="max-w-7xl mx-auto top-0 left-0 w-full flex gap-4 items-center h-16 p-3">
						<a
							className="h-full"
							target="_blank"
							href="https://discord.gg/immortalssol"
						>
							<img
								className="h-full"
								src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg"
								alt=""
							/>
						</a>
						<a
							className="h-full"
							target="_blank"
							href="https://twitter.com/immortals_NFT_"
						>
							<img
								className="h-full"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
								alt=""
							/>
						</a>
						<a
							className="flex items-center text-light ml-auto"
							target="_blank"
							href="https://solanashuffle.com"
						>
							<svg
								width={24}
								height={24}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M23.61,11.28l-8.8-8.77a1,1,0,0,0-1.71.71v5a.25.25,0,0,1-.25.25H1.1a1,1,0,0,0-1,1v5a1,1,0,0,0,1,1H12.85a.25.25,0,0,1,.25.25v5a1,1,0,0,0,1.71.71l8.8-8.8a1,1,0,0,0,0-1.41Z"
									fill="currentColor"
								></path>
							</svg>
							<span className="text-light font-bold text-2xl mx-2">
								Shuffle
							</span>
						</a>
					</div>
				</div>

				<div className="m-auto w-full max-w-7xl py-24 px-4 z-10">
					<h1 className="text-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold underline">
						Immortals
					</h1>
					<p className="text-light text-sm md:text-base xl:text-lg font-medium mt-4">
						The Immortals are a collection of{" "}
						<span className="font-semibold text-green">
							3333 pixel monstrosities
						</span>{" "}
						wandering the{" "}
						<span className="font-semibold text-green">
							Solana Blockchain
						</span>{" "}
						looking to exact revenge on SBF, FTX, Alameda and the
						rest of the criminals who stole from so many of us.
						After so much destruction, our team wanted to contribute
						to bettering the Solana ecosystem. Introducing{" "}
						<span className="font-semibold text-green">
							Solana Shuffle
						</span>
						, an{" "}
						<span className="font-semibold text-green">
							{" "}
							NFT Jackpot game
						</span>
						. Our game is a{" "}
						<span className="font-semibold text-green">
							provably fair
						</span>
						, player v player jackpot game with{" "}
						<span className="font-semibold text-green">
							Hadeswap integration
						</span>{" "}
						. All Immortals holders will receive{" "}
						<span className="font-semibold text-green">90%</span> of
						the profits generated from our game in{" "}
						<span className="font-semibold text-green">
							rev share
						</span>
						. The team is made up of a founding member of HRHC (High
						Roller Hippo Clique) A OG Solana project that minted
						back in{" "}
						<span className="font-semibold text-green">
							Dec 2021
						</span>{" "}
						that is still around today delivering. That project has
						amassed over{" "}
						<span className="font-semibold text-green">
							40k SOL
						</span>{" "}
						secondary volume because of the teams conviction and
						dedication to it's holders. We are looking to bring the
						same commitment to the Immortals. Not only are we
						building an amazing game to benefit our holders, we
						wanted to give them{" "}
						<span className="font-semibold text-green">
							best art
						</span>{" "}
						possible. We have plans to recognize some of the best
						artists in the space, and have already begun to secure
						collabs with artists for planned{" "}
						<span className="font-semibold text-green">
							edition airdrops
						</span>{" "}
						for holders. This community will have a huge focus on
						art while delivering{" "}
						<span className="font-semibold text-green">
							innovative utility
						</span>{" "}
						that will provide a{" "}
						<span className="font-semibold text-green">
							sustainable revenue stream
						</span>{" "}
						for the project and it's holders.
					</p>
				</div>
			</div>

			<div className="flex relative w-screen h-screen snap-start overflow-hidden">
				<img
					className="absolute w-full h-full object-center object-cover blur-sm z-10"
					src={shuffle}
					alt=""
				/>
				<div className="absolute w-full h-full bg-vgray-900 opacity-75 z-20 backdrop-blur-lg"></div>

				<div className="m-auto w-full max-w-7xl py-24 px-4 z-20">
					<h1 className="text-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold underline">
						Solanashuffle
					</h1>
					<p className="text-light text-sm md:text-base xl:text-lg font-medium mt-4">
						Solanashuffle is a{" "}
						<span className="font-semibold text-green">
							provably fair PvP game
						</span>{" "}
						powered and backed by{" "}
						<span className="font-semibold text-green">
							Hadeswap
						</span>
						. It is our first live game running{" "}
						<span className="font-semibold text-green">24/7</span>.
						It allows anyone to bet their{" "}
						<span className="font-semibold text-green">
							NFTs or cash
						</span>{" "}
						in a jackpot against other players. The higher your
						stake in the current jackpot, the higher your chances of
						winning. It is the first of the{" "}
						<span className="font-semibold text-green">
							many PvP games
						</span>{" "}
						we are looking to develop with the help of our amazing
						team.
					</p>
					<p className="text-light lg:text-xl font-semibold mt-8">
						Play a game by clicking{" "}
						<a target="_blank" href="https://solanashuffle.com">
							<span className="underline text-primary font-bold">
								Here
							</span>
						</a>
					</p>
				</div>
			</div>

			<div className="flex relative w-screen h-screen snap-start overflow-hidden">
				<img
					className="absolute w-full h-full object-center object-cover"
					src={dyst33}
					alt=""
				/>
				<div className="absolute w-full h-full bg-vgray-900 opacity-75"></div>
				<div className="m-auto w-full max-w-7xl py-24 px-4 z-10">
					<h1 className="text-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold underline">
						FAQ
					</h1>
					<div className="mt-4"></div>
					<Faq
						data={{
							rows: [
								{
									title: "What are the benefits of holding an Immortal NFT?",
									content:
										"As a holder of an Immortal NFT, you will have access to 90% Profit Share from all present and future developed arcade games. We will look to establish a highly packed group of alpha callers, NFT trading and insights, WL opportunities, Immortals Lootboxes, access to art collabs, airdrops & more!",
								},
								{
									title: "How much revenue goes to holders?",
									content:
										"90% of profit generated from the games will go to holders.",
								},
								{
									title: "When is the mint date for Immortals?",
									content:
										"Our mint date is the 29th of December 2022.",
								},
								{
									title: "What is the collection size and mint price?",
									content:
										"The collection size is 3333 and mint price is 4 SOL for WL.",
								},
								{
									title: "Will staking be available or on the future roadmap for Immortals?",
									content:
										"Staking is planned, we will create a token that is purely a utility token.",
								},
								{
									title: "What wallets can I use to buy Immortals NFT?",
									content:
										"You can use Phantom, Solflare, Slope and other SOL wallets.",
								},
								{
									title: "What wallets can I use to play Solana Shuffle?",
									content:
										"You can use Phantom, Slope, Solflare, Ledger, Sollet, Trust, Exodus, Coinbase Wallet & more!",
								},
							],
							styles: {
								titleTextColor: "blue",
							},
						}}
						styles={{
							rowTitleColor: "#fdfdfd",
							rowTitleTextSize: "bold",
							arrowColor: "#fdfdfd",
							rowContentColor: "#fdfdfd",
						}}
					/>
				</div>
			</div>

			<div className="flex relative w-screen h-screen snap-start">
				<img
					className="absolute w-full h-full object-center object-cover"
					src={dyst32}
					alt=""
				/>
				<div className="absolute w-full h-full bg-vgray-900 opacity-70"></div>
				<div className="md:m-auto flex gap-2 md:gap-0 md:flex-col w-full h-full md:h-auto max-w-7xl md:py-24 px-4 z-10">
					<div className="flex flex-col md:flex-row my-auto md:my-0 gap-6 items-center w-full text-light text-center h-full md:h-auto">
						<div className="md:w-1/4 h-1/4 md:h-auto flex">
							<img
								className="rounded-full w-full max-w-[180px] md:max-w-none m-auto"
								src={zach}
								alt=""
							/>
						</div>
						<div className="md:w-1/4 h-1/4 md:h-auto flex">
							<img
								className="rounded-full w-full max-w-[180px] md:max-w-none m-auto"
								src={cryptid}
								alt=""
							/>
						</div>
						<div className="md:w-1/4 h-1/4 md:h-auto flex">
							<img
								className="rounded-full w-full max-w-[180px] md:max-w-none m-auto"
								src={chris}
								alt=""
							/>
						</div>
						<div className="md:w-1/4 h-1/4 md:h-auto flex">
							<img
								className="rounded-full w-full max-w-[180px] md:max-w-none m-auto"
								src={drac}
								alt=""
							/>
						</div>
					</div>
					<div className="flex flex-col md:flex-row my-auto md:my-0 gap-6 items-center w-full text-light text-center h-full md:h-auto">
						<div className="md:w-1/4 h-1/4 md:h-auto md:mb-auto flex items-center md:block">
							<span className="hidden md:block text-xl font-semibold underline lg:mt-3">
								Zodiach
							</span>
							<p className="md:hidden text-xs font-medium md:text-sm">
								A fullstack Web and Blockchain developer with
								over 2 years of experience in blockchain
								technologies and 6 years in general development.
								Proficient in Golang and Javascript to make any
								dream a reality for the Immortals community.
							</p>
							<p className="hidden md:block text-xs font-medium md:text-sm">
								A fullstack Web and Blockchain developer with
								over 2 years of experience in blockchain
								technologies and 6 years in general development.
								Proficient in Golang and Javascript to make any
								dream a reality for the Immortals community.
							</p>
						</div>
						<div className="md:w-1/4 h-1/4 md:h-auto md:mb-auto flex items-center md:block">
							<span className="hidden md:block text-xl font-semibold underline lg:mt-3">
								cryptid.sol
							</span>
							<p className="md:hidden text-xs font-medium md:text-sm">
								Full time Web3 degen, with a passion for the
								outdoors, gaming & everything web3. Active in
								Solana the last 18 months and co founder of
								another OG Solana project. Experienced in
								Operations and Marketing with some limited dev
								skills.
							</p>
							<p className="hidden md:block text-xs font-medium md:text-sm">
								Full time Web3 degen, with a passion for the
								outdoors, gaming & everything web3. Active in
								Solana the last 18 months and co founder of
								another OG Solana project. Experienced in
								Operations and Marketing with some limited dev
								skills.
							</p>
						</div>
						<div className="md:w-1/4 h-1/4 md:h-auto md:mb-auto flex items-center md:block">
							<span className="hidden md:block text-xl font-semibold underline lg:mt-3">
								Chris Saturn
							</span>
							<p className="md:hidden text-xs md:text-sm font-medium">
								Fulltime Multi-disciplinary Artist with lots of
								experience. Making the beautiful pixel art for
								the immortals project with a passion. Very
								familiar with the NFT space and an NFT collector
								himself!
							</p>
							<p className="hidden md:block text-xs md:text-sm font-medium">
								Fulltime Multi-disciplinary Artist with lots of
								experience. Making the beautiful pixel art for
								the immortals project with a passion. Very
								familiar with the NFT space and an NFT collector
								himself!
							</p>
						</div>
						<div className="md:w-1/4 h-1/4 md:h-auto md:mb-auto flex items-center md:block">
							<span className="hidden md:block text-xl font-semibold underline lg:mt-3">
								Lord Dracula
							</span>
							<p className="md:hidden text-xs md:text-sm font-medium">
								Local to the Tri-State Area with experience and
								a degree in game development majoring in
								Computer Science. Passionate about games, NFT's
								and discord management.
							</p>
							<p className="hidden md:block text-xs md:text-sm font-medium">
								Local to the Tri-State Area with experience and
								a degree in game development majoring in
								Computer Science. Passionate about games, NFT's
								and discord management. Most know me as Lord but
								also known as quick hands for how fast and
								efficient I am with my work.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
