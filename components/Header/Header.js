import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
	const menu = ["new", "past", "comments", "ask", "show", "jobs", "submit"];
	return (
		<div className={styles.header}>
			<div className={styles.menulist}>
				<div className={styles.logo}>
					<Image
						src="/hacker-news-logo.gif"
						alt="Hacker News Logo"
						width={16}
						height={16}
					/>
				</div>

				<Link href="/" className={styles.title}>
					Hacker News
				</Link>
				{menu.map((menuItem, index) => (
					<span key={index} className={styles.menu}>
						{menuItem} {index !== menu.length - 1 && "|"}
					</span>
				))}
			</div>
			<span className={styles.menu}>login</span>
		</div>
	);
};

export default Header;
