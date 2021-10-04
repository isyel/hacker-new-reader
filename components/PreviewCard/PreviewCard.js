import Image from "next/image";

import styles from "./PreviewCard.module.css";

const PreviewCard = (props) => {
	const { image, title, text } = props;
	return (
		<div className={styles.previewCard}>
			<div className="card">
				<Image
					src={image || "/vercel.svg"}
					className={styles.cardImage}
					alt="Preview Image"
					width={16}
					height={16}
				/>
				<div className={styles.cardBody}>
					<h5 className={styles.cardTitle}>{title}</h5>
					<p className={styles.cardText}>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default PreviewCard;
