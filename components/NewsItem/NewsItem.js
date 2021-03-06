import { useState } from "react";
import styles from "./NewsItem.module.css";
import moment from "moment";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const NewsItem = (props) => {
	const { item, id } = props;
	const tempString = item?.url?.slice(8);
	const firstIindex = tempString?.indexOf("/");
	const url = tempString?.slice(0, firstIindex);

	const formattedTime = moment(item?.time).fromNow();

	const [isShown, setIsShown] = useState(false);

	return (
		<a
			href={item.url}
			target="_blank"
			className={styles.newsItem}
			rel="noreferrer"
			onMouseEnter={() => setIsShown(true)}
			onMouseLeave={() => setIsShown(false)}>
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
			{isShown && window && (
				<div className={styles.previewCard}>
					<LinkPreview url={item.url} width="400px" />;
				</div>
			)}
		</a>
	);
};

export default NewsItem;
