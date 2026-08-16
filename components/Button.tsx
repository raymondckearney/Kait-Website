import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "onDark" | "ghost";

type CommonProps = {
  variant?: Variant;
  withDot?: boolean;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type ActionButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | ActionButtonProps;

export default function Button(props: ButtonProps) {
  const { variant = "primary", withDot = false, children, className } = props;
  const classes = `${styles.base} ${styles[variant]} ${className ?? ""}`;

  const content = (
    <>
      {children}
      {withDot && <span className={styles.dot} aria-hidden="true" />}
    </>
  );

  if ("href" in props && props.href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(props.href);
    if (isExternal) {
      return (
        <a href={props.href} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { href: _href, variant: _v, withDot: _wd, className: _c, ...rest } =
    props as ActionButtonProps;
  void _href;
  void _v;
  void _wd;
  void _c;

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
