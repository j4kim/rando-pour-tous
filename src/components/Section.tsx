export default function ({ fields }) {
  return (
    <article
      style={{
        "background-color": fields.backgroundColor ?? "beige",
      }}
    >
      <h1>{fields.title}</h1>
    </article>
  );
}
