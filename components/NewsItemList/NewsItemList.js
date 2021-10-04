import NewsItem from "../NewsItem/NewsItem";

import styles from "./NewsItemList.module.css";

const NewsItemList = (props) => {
	const { items, currentPage, startingId } = props;
	const footerMenu = [
		{
			name: "Guidelines",
			link: "https://news.ycombinator.com/newsguidelines.html",
		},
		{
			name: "FAQ",
			link: "https://news.ycombinator.com/newsfaq.html",
		},
		{
			name: "Lists",
			link: "https://news.ycombinator.com/lists",
		},
		{
			name: "API",
			link: "http://www.ycombinator.com/legal/",
		},
		{
			name: "Security",
			link: "http://www.ycombinator.com/legal/",
		},
		{
			name: "Legal",
			link: "http://www.ycombinator.com/legal/",
		},
		{
			name: "Apply to YC",
			link: "http://www.ycombinator.com/apply/",
		},
		{
			name: "Contact",
			link: "mailto:hn@ycombinator.com",
		},
	];

	return (
		<div className={styles.newsList}>
			{items.map((item, index) => (
				<NewsItem key={index} item={item} id={startingId + index + 1} />
			))}
			<a href={`/news/${currentPage + 1}`} className={styles.more}>
				More
			</a>
			<div className={styles.strip}></div>
			<div className={styles.menuList}>
				{footerMenu.map((menuItem, index) => (
					<a href={menuItem.link} key={index} className={styles.menu}>
						{menuItem.name} {index !== footerMenu.length - 1 && "|"}
					</a>
				))}
			</div>
		</div>
	);
};

export default NewsItemList;
