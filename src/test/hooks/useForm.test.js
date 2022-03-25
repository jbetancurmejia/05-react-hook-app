import { renderHook ,act} from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "camilo",
    email: "jcbmdeveloper@gmail.com",
  };

  test("debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
     const[ formValues,handleInputChange,reset]= result.current
 
    console.log(result.current[1])

     expect( formValues).toEqual(initialForm);
     expect( typeof  handleInputChange).toBe('function');
     expect( typeof  reset).toBe('function');
    // console.log(result.current)

  });

  test("debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const[ ,handleInputChange]= result.current
  
    const datos = {
        name: "Melissa",
        email: "jcbmdeveloper@gmail.com",
      };     

     act( ()=>{
        handleInputChange({
            target:{
                name:'name',
                value:'Melissa'
            }
        });
    } )

    const[formValues]= result.current

    expect( formValues).toEqual({...initialForm,name:'Melissa'});

  });

  test("debe de re-establecer el formulario con RESET", () => {

    const { result } = renderHook(() => useForm(initialForm));
    const[ ,handleInputChange,reset]= result.current
  
    const datos = {
        name: "Melissa",
        email: "jcbmdeveloper@gmail.com",
      };     

     act( ()=>{
        handleInputChange({
            target:{
                name:'name',
                value:'Melissa'
            }
        });

        reset();
    } )

    const[formValues]= result.current

    expect( formValues).toEqual(initialForm);
  });
});
