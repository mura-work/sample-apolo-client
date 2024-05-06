import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      content
      comments {
        content
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>GraphQL Clientの動作確認</h2>
      <ul>
        {data.books.map((book) => (
          <>
            <li key={book.id}>タイトル：{book.title}</li>
            <li key={book.id}>内容：{book.content}</li>
            {
              book.comments.map((comment) => (
                <li key={comment.id}>コメント{comment.content}</li>
              ))
            }
          </>
        ))}
      </ul>
    </div>
  );
}
