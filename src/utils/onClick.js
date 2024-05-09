export function onClickOpenPage(navigate, path) {
  navigate(path);
}

export function onClickScrollToRef(ref) {
  ref.current?.scrollIntoView({ behavior: "smooth" });
}
