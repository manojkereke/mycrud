import React from "react"
import App from "./App";
import Enzyme from "enzyme";
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';


Enzyme.configure({adapter:new EnzymeAdapter(),disableLifecycleMethods:true});

const setUp = (props={}) =>{
    const component =shallow(<App {...props}/>);
    return component;

}

const findByTestAttr = (component,attr) =>{
 const wrapper = component.find(`[data-test='${attr}']`);
 return wrapper;
};

describe('App Component',() => {

    let component; 
    beforeEach(()=>{
        component=setUp();
    });

    it("it should render without fail",()=>{
        const wrapper = findByTestAttr(component,'container');
        expect(wrapper.length).toBe(1);
    });
    
    it("it should render table",()=>{ 
        const wrapper =  findByTestAttr(component,'tablecontent')
        expect(wrapper.length).toBe(1);
    });   

})

