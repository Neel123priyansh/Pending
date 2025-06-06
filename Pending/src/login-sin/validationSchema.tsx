// validationSchema.ts
import * as yup from "yup";

export const infoSchema = yup.object().shape({
  
  name: yup.string().required("Name is required").test(
    "no-html",
    "HTML tags are not allowed in name",
    (value) => !/<[^>]*>/g.test(value || "")
  ),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  deliveryDate: yup.date()
    .min(new Date(), "Delivery date must be in the future")
    .required("Delivery date is required"),
  file: yup
    .mixed()
    .required("PDF file is required")
    .test("fileType", "Only PDFs are accepted", (value) => {
      const file = value as FileList;
      return file && file[0]?.type === "application/pdf";
    })
    .test("fileSize", "File must be less than 2MB", (value) => {
        const file = value as FileList;
        return file && file[0]?.size <= 2 * 1024 * 1024;
    }),
});
