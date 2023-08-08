import { useRouter } from "next/router";

export default function NewsDetail() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a request to the backend API
  // to fetch the news item with newsId

  return (
    <>
      <h1>News Detail</h1>
      <h2>{newsId}</h2>
    </>
  );
}
