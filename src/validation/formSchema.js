import * as yup from 'yup';

const formSchema = yup.object().shape({
    size: yup
       .string()
       .trim()
       .required('name must be at least 2 characters'),
    sauce: yup
       .string()
       .trim()
       .required('sauce is required'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    spicy: yup.boolean(),
    chicken: yup.boolean(),
    onions: yup.boolean(),
    green: yup.boolean(),
    tomatos: yup.boolean(),
    olives: yup.boolean(),
    garlic: yup.boolean(),
    artichoke: yup.boolean(),
    cheese: yup.boolean(),
    pineapple: yup.boolean(),
    Extra: yup.boolean(),
    yes: yup.boolean(),
    instructions: yup
    .string()
    .required("Anything else you'd like (if not say no)")
    .max(1000, "Hold on there partner! you can propbably just get two EXTRA THICCs")
})

export default formSchema