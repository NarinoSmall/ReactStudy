import Header from "../components/header";
import Footer from "@/components/footer";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja">
			<body>
				<Header />
				{children}
				{children}
				<Footer />
			</body>
		</html>
	);
}
