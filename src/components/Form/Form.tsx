import React from "react";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { FormProps, FormValues } from "./Form.types";

const Form: React.FC<FormProps> = ({ initial, onSubmit }) => {
  const {
    values,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    errors,
    touched,
  } = useFormik<FormValues>({
    initialValues: initial ?? {
      title: "",
      brand: "",
      oldPrice: 0,
      price: 0,
      discount: 0,
      shortDescription: "",
      description: "",
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("Required").max(10, "max length 10"),
      brand: yup.string().required("Required").max(10, "max length 10"),
      oldPrice: yup.number().required("Required"),
      price: yup.number().required("Required"),
      discount: yup.number().required("Required").max(80, "max discount 80"),
      shortDescription: yup.string().required("Required"),
      description: yup.string().required("Required").min(10, "min length 10"),
    }),
    onSubmit: (data) => {
      onSubmit(data);
    },
  });
  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <DialogTitle>Create product</DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={1.5} mt={2}>
          <TextField
            label="Title"
            id="title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && !!errors.title}
            helperText={touched.title && errors.title}
          />
          <TextField
            label="Brand"
            id="brand"
            name="brand"
            value={values.brand}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.brand && !!errors.brand}
            helperText={touched.brand && errors.brand}
          />
          <TextField
            label="Old Price"
            id="oldPrice"
            name="oldPrice"
            type="number"
            value={values.oldPrice}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.oldPrice && !!errors.oldPrice}
            helperText={touched.oldPrice && errors.oldPrice}
          />
          <TextField
            label="Price"
            id="price"
            name="price"
            type="number"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.price && !!errors.price}
            helperText={touched.price && errors.price}
          />
          <TextField
            label="Discount"
            id="discount"
            name="discount"
            type="number"
            value={values.discount}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.discount && !!errors.discount}
            helperText={touched.discount && errors.discount}
          />
          <TextField
            label="Short Description"
            id="shortDescription"
            name="shortDescription"
            value={values.shortDescription}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.shortDescription && !!errors.shortDescription}
            helperText={touched.shortDescription && errors.shortDescription}
          />
          <TextField
            label="Description"
            id="description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && !!errors.description}
            helperText={touched.description && errors.description}
            multiline
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
        <Button type="reset" variant="outlined">
          Reset
        </Button>
      </DialogActions>
    </form>
  );
};

export default Form;
