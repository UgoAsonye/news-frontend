export function ArticlesIndex(props) {
  console.log(props);
  return (
    <div>
      <h1>All Articles</h1>
      {props.articles.map((article) => (
        <div key={article.title}>
          <h3>{article.title}</h3>
          <p>Author: {article.author}</p>
          {/* <p>Description: {article.description}</p> */}
          <div dangerouslySetInnerHTML={{ __html: article.description }}></div>
          <p>Content: {article.content}</p>
        </div>
      ))}
    </div>
  );
}
