import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Icon from "./icon.component";

let documentBody: RenderResult;

test("arrow-left icon.", () => {
  documentBody = render(<Icon type="arrow-left" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("arrow-right icon.", () => {
  documentBody = render(<Icon type="arrow-right" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("cart icon.", () => {
  documentBody = render(<Icon type="cart" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("categories icon.", () => {
  documentBody = render(<Icon type="categories" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("contacts icon.", () => {
  documentBody = render(<Icon type="contacts" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("cross icon.", () => {
  documentBody = render(<Icon type="cross" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("mail icon.", () => {
  documentBody = render(<Icon type="mail" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("phone icon.", () => {
  documentBody = render(<Icon type="phone" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("preloader-dark icon.", () => {
  documentBody = render(<Icon type="preloader-dark" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("preloader-light icon.", () => {
  documentBody = render(<Icon type="preloader-light" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("question icon.", () => {
  documentBody = render(<Icon type="question" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("search icon.", () => {
  documentBody = render(<Icon type="search" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("search2 icon.", () => {
  documentBody = render(<Icon type="search2" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("secret icon.", () => {
  documentBody = render(<Icon type="secret" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("sort icon.", () => {
  documentBody = render(<Icon type="sort" />);
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});
