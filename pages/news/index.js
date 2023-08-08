import Link from "next/link";
import { Fragment } from "react";

export default function News() {
  return (
    <>
      <Fragment>
        <h1>News</h1>
        <ul>
          <li>
            <Link href="/news/blog-1">Blog 1</Link>
          </li>
          <li>
            <Link href="/news/blog-2">Blog 2</Link>
          </li>
          <li>
            <Link href="/news/blog-3">Blog 3</Link>
          </li>
        </ul>
      </Fragment>
      <p>lorem</p>
    </>
  );
}
