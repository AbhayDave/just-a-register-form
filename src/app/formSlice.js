import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: {
      name: "",
      email: "",
      password: "",
      country: "",
      level: "",
      skills: [],
    },
  },
  reducers: {
    save: (state, action) => {
      // Destructure payload properties for clarity
      const { name, email, password, country, level, skills } = action.payload;

      // Update individual properties for fine-grained control and immutability
      return {
        ...state,
        formData: {
          ...state.formData,
          name,
          email,
          password,
          country,
          level,
          skills,
        },
      };
    },
  },
});

export const { save } = formSlice.actions;

export default formSlice.reducer;
