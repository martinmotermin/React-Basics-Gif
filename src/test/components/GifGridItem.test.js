import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Prueba sobre GifGridItem.js", () => {
  test("Debe mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
