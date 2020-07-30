export function IsElement(e: any): e is Element {
  return "nodeType" in e && e.nodeType === e.ELEMENT_NODE;
}

export function WithinSelector(e: Element, selector: string): boolean {
  return e.matches(selector) || (e.parentElement != null && WithinSelector(e.parentElement, selector));
}

export function GetNearestAttribute(e: Element, attribute: string): string | undefined {
  if (e.hasAttribute(attribute)) {
    return e.getAttribute(attribute) ?? "";
  }

  if (!e.parentElement) {
    return undefined;
  }

  return GetNearestAttribute(e.parentElement, attribute);
}