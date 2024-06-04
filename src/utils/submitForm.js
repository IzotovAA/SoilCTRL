export default async function submitForm(event, onClose) {
  event.preventDefault();

  const data = {
    name: document.querySelector("#name").value,
    surname: document.querySelector("#surname").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  onClose();

  try {
    const response = await fetch(event.target.action, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.text();
    alert(result);
  } catch (error) {
    alert(error);
  }
}
