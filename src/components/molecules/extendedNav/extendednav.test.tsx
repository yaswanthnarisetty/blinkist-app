import { render, screen } from "@testing-library/react"
import ExtendedNav from "./extendednav";

describe("render the icon", ()=>{
    test("header text", () =>{
        render(<ExtendedNav />);
        const headingelement=screen.getByText(/Bread Text/i)
        expect(headingelement).toBeInTheDocument();
    })
    

})