import NewsItem from "../NewsItem/NewsItem";

import styles from "./NewsItemList.module.css";

const NewsItemList = (props) => {
	const { items, currentPage } = props;
	return (
		<div className={styles.newsList}>
			{items.map((item, index) => (
				<NewsItem key={index} item={item} id={index + 1} />
			))}
			<a href={`/news/${currentPage + 1}`} className={styles.more}>
				More
			</a>
		</div>
	);
};

export default NewsItemList;
