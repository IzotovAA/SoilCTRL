export default function SectionTitle({ children, styles, className }) {
  return (
    <>
      <div className={styles[className]}>
        <hr />
        <h4>{children}</h4>
      </div>
    </>
  );
}
