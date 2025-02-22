import type { HTMLAttributes } from "react";
import { useRouter } from "next/router";

import { author } from "@core/author";
import { classes } from "@utils/classes";
import { onMainPage } from "@utils/onMainPage";
import { translated } from "@translation";

import styles from "./Author.module.css";

export const Author = ({ className }: HTMLAttributes<HTMLSpanElement>) => {
  const { pathname } = useRouter();
  const Header = onMainPage(pathname) ? "h1" : "span";

  return (
    <span className={classes(styles.author, className)}>
      <Header className={styles.label}>{author.name}</Header>

      <span className={styles.photo}>
        <picture>
          <source
            type="image/avif"
            draggable="false"
            srcSet="
              /images/static/photo-2022-02-22.avif    1x,
              /images/static/photo-2022-02-22@2x.avif 2x,
              /images/static/photo-2022-02-22@3x.avif 3x
            "
          />

          <source
            type="image/webp"
            draggable="false"
            srcSet="
              /images/static/photo-2022-02-22.webp    1x,
              /images/static/photo-2022-02-22@2x.webp 2x,
              /images/static/photo-2022-02-22@3x.webp 3x
            "
          />

          <img
            alt={translated.authorPhoto.altText}
            draggable="false"
            srcSet="
              /images/static/photo-2022-02-22.png    1x,
              /images/static/photo-2022-02-22@2x.png 2x,
              /images/static/photo-2022-02-22@3x.png 3x
            "
            src="/images/static/photo-2022-02-22.png"
          />
        </picture>
      </span>
    </span>
  );
};
