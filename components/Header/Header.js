import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
	const menu = ["new", "past", "comments", "ask", "show", "jobs", "submit"];
	return (
		<div className={styles.header}>
			<div className={styles.menulist}>
				<Image
					src="/hacker-news-logo.gif"
					alt="Hacker News Logo"
					width={18}
					height={16}
				/>
				<span className={styles.title}>Hacker News</span>
				{menu.map((menuItem, index) => (
					<span key={index} className={styles.menu}>
						{menuItem} {index !== menu.length - 1 && "|"}
					</span>
				))}
			</div>
			<span>login</span>
		</div>
	);
};

export default Header;
