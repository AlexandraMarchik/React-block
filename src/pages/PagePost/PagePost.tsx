import React, { FC } from "react";
import styles from "./PagePost.module.scss";
import { BookmarkIcon, DislikeIcon, LikeIcon } from "../../assets/icons";
import { PageProps } from "./types";

const PostPage: FC<PageProps> = ({ page }) => {
  const { image, text, title } = page;
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.dreadCrumbs}>
          <div className={styles.home}>Home</div>
          <div className={styles.symbolSl}>|</div>
          <div className={styles.post}>Post 14278</div>
        </div>
        <div className={styles.pageContent}>
          <div className={styles.title}>{title}</div>
          <img src={image} className={styles.image}></img>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconsLike}>
            <div className={styles.iconLike}>
              <LikeIcon />
            </div>
            <div className={styles.iconDisLike}>
              <DislikeIcon />
            </div>
          </div>
          <div>
            <div className={styles.iconBookMark}>
              <BookmarkIcon /> Add to favorites
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
