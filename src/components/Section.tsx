export default function ({ fields }) {
  return (
    <article
      style={{
        "background-color": fields.backgroundColor,
      }}
    >
      <div>
        <h1>{fields.title}</h1>
      </div>
    </article>
  );
}
