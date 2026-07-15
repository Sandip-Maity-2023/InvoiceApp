import z from "zod";

export const onboardingSchema = z.object({

    firstName:z
    .string()
    .min(3,{message:"First Name is required"})
    .max(50,{message:"First Name should not exceed 50 characters"}),
    lastName:z
    .string()
    .min(3,{message:"Last Name is required"})
    .max(50,{message:"Last Name should not exceed 50 characters"}),
    currency:z.string({message:"Select currency"}).optional(),
});

export const InvoiceSchemaZod=z.object({
    invoice_no:z.string().min(1,{message:"Invoice Number is required"}),
    invoice_date:z.date({message:"Invoice Date is required"}),
    due_date:z.date({message:"Due Date is required"}),
    currency:z.string().min(1,{message:"Currency is required"}).optional(),
    from:z.object({
        name:z.string().min(3,{message:"Name is required"}).max(100,{message:"name is max 100 characters"}),
        email:z.string().email({message:"Email is required"}),
        address1:z.string().min(3,{message:"Address is required"}).max(200,{message:"Address is max 200 characters"}),
        address2:z.string().optional(),
        address3:z.string().optional()
    }),

    to:z.object({
        name:z.string().min(3,{message:"Name is required"}).max(100,{message:"name is max 100 characters"}),
        email:z.string().email({message:"Email is required"}),
        address1:z.string().min(5,{message:"Address is required"}).max(200,{message:"Address is max 200 characters"}),
        address2:z.string().optional(),
        address3:z.string().optional()
    }),

    items:z.array(z.object({
        item_name:z.string().min(3,{message:"Item Name is required"}).max(100,{message:"Item Name is max 100 characters"}),
        quantity:z.number().min(0,{message:"Quantity can't be negative"}),
        price:z.number().min(0,{message:"Price can't be negative"}),
        total:z.number().min(0,{message:"Total can't be negative"})
    })),

    sub_total:z.number(),
    discount:z.number(),

    tax_percentage:z.number(),

    total:z.number(),

    notes:z.string().optional(),
    terms:z.string().optional()
});