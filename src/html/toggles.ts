import { IsElement, WithinSelector, GetNearestAttribute } from "./utils";

document.onclick = (e) => {
  const target = e.target;
  if (!target || !IsElement(target) || !WithinSelector(target, "[data-target]")) {
    return;
  }

  const query = GetNearestAttribute(target, "data-target") ?? "";
  const toggle = GetNearestAttribute(target, "data-toggle-class") ?? "";
  if (toggle) {
    document.querySelectorAll(query).forEach((e) => e.classList.toggle(toggle));
  }
};
