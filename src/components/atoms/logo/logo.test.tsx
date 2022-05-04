import { render,screen } from "@testing-library/react";
import { Logo } from "./logo";


test("Blinklist image should be Blinklistlogo.png",()=>{

    render(
        <Logo />
    );
    const image=screen.getByRole("img");
    expect(image).toHaveAttribute("src","Blinkist.png");

});

test("Blinklist alt should be BlinkList",()=>{

    render(
        <Logo />
    );

    const image=screen.getByRole("img");
    expect(image).toHaveAttribute("alt","BlinkList");

    })