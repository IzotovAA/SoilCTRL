import { useEffect } from "react";

export default function ContactsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>Контакты!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut aliquid
        maxime sed vel fuga, aperiam doloribus est nisi enim quae eveniet eaque
        repellat corrupti inventore unde, necessitatibus, soluta non possimus
        quibusdam magni omnis voluptatibus architecto consequatur? Repellat illo
        ullam neque corrupti nemo similique, aliquid error sequi architecto.
        Accusantium similique, officiis dolor molestiae unde tenetur laborum
        autem voluptas eaque, maiores alias quis. Minima, adipisci cum quos
        nobis a delectus id suscipit labore, qui magni eius magnam provident
        pariatur, iusto sequi natus vero praesentium. Quos autem blanditiis
        natus ab? Reiciendis, incidunt fuga, et nihil autem earum qui quasi
        officia optio explicabo est.
      </p>
    </>
  );
}
