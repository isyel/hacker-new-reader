import styles from "./NewsItem.module.css";
import moment from "moment";

const NewsItem = (props) => {
	const { item, id } = props;
	const tempString = item?.url?.slice(8);
	const firstIindex = tempString?.indexOf("/");
	const url = tempString?.slice(0, firstIindex);

	const formattedTime = moment(item?.time).fromNow();

	return (
		<a
			href={item.url}
			target="_blank"
			className={styles.newsItem}
			rel="noreferrer">
			{item && (
				<>
					<span className={styles.id}>{id}.</span>
					<div className={styles.newsDetails}>
						<div className={styles.newsTitle}>
							<span className={styles.bold}>{item.title} </span>
							<span className={styles.url}>
								{url?.length > 0 && `(${url})`}
							</span>
						</div>
						<div className={styles.newsFooter}>
							{item.score} points by {item.by} {formattedTime} | hide |{" "}
							{item.descendants} comments
						</div>
					</div>
				</>
			)}
		</a>
	);
};

export default NewsItem;
