import { useParams } from "react-router-dom";
import { useCategoriesStore } from "../store/useCategoriesStore";
import { useEffect, useState } from "react";
import { Loading } from "../../../shared/components/Loading";
import { useFormik } from "formik";
import { categoryInitValues, categoryValidationSchema } from "../forms/category.form";

export const EditCategoryPage = () => {
  const {id} = useParams();
  const selectedCategory = useCategoriesStore((state) => state.selectedCategory);
  const getCategory = useCategoriesStore((state) => state.getCategory);
  const [isLoading, setIsLoading] = useState(true)

  const formik = useFormik({
    initialValues: categoryInitValues,
    validationSchema: categoryValidationSchema,
    validateOnChange: false,
    onSubmit: (formValues) => {
      console.log(formValues);
      
    }
  });

  useEffect(() => { 
    const load = async () => {
      try {
        if (isLoading) {
          getCategory(id);
          
          formik.setFieldValue("name", selectedCategory.name);
          formik.setFieldValue("description", selectedCategory.description);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);        
      }
    }

    load();

  }, [id, isLoading, formik])

  if(isLoading) return <Loading />

  return (
    <>
      <div className="flex flex-col mt-2 w-full">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Full Name"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Descripción
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  ></textarea>
                </div>
                <div>
                  <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
