export default function Header() {
	return (
		<header className="flex bg-blue text-white p-3 h-14">
			<div className="font-mono text-xl font-bold tracking-wide grid items-center">NariLab</div>
			<div className="flex flex-auto justify-end items-center gap-5">
				<img src="./img/github-mark-white.svg" alt="Github" className="h-4/5"/>
				<img src="./img/logo.svg" alt="X" className="h-4/5"/>
				<img src="./img/logo-only-white.svg" alt="Zenn" className="h-4/5"/>
			</div>
		</header>
	);
}
