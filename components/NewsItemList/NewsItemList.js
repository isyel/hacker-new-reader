import NewsItem from "../NewsItem/NewsItem";

import styles from "./NewsItemList.module.css";

const NewsItemList = (props) => {
	const { items } = props;
	return (
		<div className={styles.newsList}>
			{items.map((item, index) => (
				<NewsItem key={index} item={item} id={index + 1} />
			))}
		</div>
	);
};

export default NewsItemList;
