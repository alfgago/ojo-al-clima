import { useState } from "react";
import { FormStyle } from "./FormStyle"
import { useRouter } from "next/router";
import { contactFormAPI } from "@/pages/api/base";

const pathClassMapping: PathClassMapping = {
  "/": "on-home-page",
  "/quienes-somos": "on-about-page",
  "/contactenos": "on-contact-page"
};

export const Form = ({ form }: any) => {

  const { pathname } = useRouter();

  const getClassFromPath = (pathname: string): string => {
    return pathClassMapping[pathname] || "";  
  };

  const { id, fields } = form.data[0];

  const [formSubmission, setFormSubmissionError] = useState({
    show: false,
    status: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    nombre: false,
    mail: false,
    mensaje: false,
  }) as any

  const clearError = (name: any) => {
    setErrors({ ...errors, [name]: false })
  }

  const formSubmissionHandler = async (e: any) => {
    e.preventDefault()

    const formElement = e.target
    const { action, method } = formElement

    const formData = new FormData(formElement)

    const newErrors = {
      nombre: !formData.get("nombre"),
      mail: !formData.get("mail"),
      mensaje: !formData.get("mensaje"),
    }
    setErrors(newErrors)

    if (Object.values(newErrors).every((error) => !error)) {
      try {
        const response = await fetch(action, {
          method,
          body: formData,
        })

        if (response.ok) {
          await response.json()
          setFormSubmissionError({
            show: true,
            status: "success",
            message: "Tu mensaje ha sido enviado exitosamente",
          })
          formElement.reset()
        } else {
          setFormSubmissionError({
            show: true,
            status: "error",
            message: "Formato de correo inválido",
          })
        }
      } catch (error) {
        setFormSubmissionError({
          show: true,
          status: "error",
          message: "Formato de correo inválido",
        })
      }
    } else {
      setFormSubmissionError({
        show: true,
        status: "error",
        message: "Debes completar todos los campos requeridos",
      })
    }
  }

  return (
    <FormStyle className={getClassFromPath(pathname)}>
      <div className="form-wrapper">
        <div className="title" data-aos="fade-right">
          {
            pathname === "/contactenos" ? (
              <h1>Contáctenos</h1>
            ) : (
              <h5>Contáctenos</h5>
            )
          }
        </div>
        <form
          action={contactFormAPI(id)}
          method={"POST"}
          onSubmit={formSubmissionHandler}
          data-aos="fade-up"
        >
          {fields?.map(
            (field: any, index: number) =>
              field.basetype != "submit" && (
                <div
                  key={`contact-form-${index}`}
                  className={`inputs ${field.name}`}
                >
                  {field.basetype === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.values[0]}
                      onChange={() => clearError(field.name)}
                    />
                  )
                    : (
                      <input
                        id={field.name}
                        type={field.basetype}
                        name={field.name}
                        placeholder={field.values[0]}
                        onChange={() => clearError(field.name)}
                      />
                    )}
                  {errors[field.name] && (
                    <span className="error-message">
                      Este campo es requerido
                    </span>
                  )}
                </div>
              )
          )}
          <button className="btn-send" type="submit" data-aos="fade-up">
            Enviar
          </button>
          {formSubmission.show && (
            <span
              className={`form-request-message ${formSubmission.status}`}
            >
              {formSubmission.message}
            </span>
          )}
        </form>
        <div className="meta-data" data-aos="custom-fade-in" data-aos-delay="300">
          <div className="phone">
            <span>Teléfono: <a href="tel:+50625116735 ">2511-6735 </a> </span>
          </div>
          <div className="email">
            <span>Correo: <a href="mailto:info@ojoalclima.com">info@ojoalclima.com </a> </span>
          </div>
          <div className="address">
            <span>
              Dirección: Semanario Universidad, detrás de Radio Universidad en el
              Campus Rodrigo Facio Brenes, Universidad de Costa Rica
            </span>
          </div>
        </div>
      </div>
      <div className="learn-colors">
        <div className="red"></div>
        <div className="purple"></div>
        <div className="blue"></div>
        <div className="yellow"></div>
      </div>
    </FormStyle>
  )
}

type PathClassMapping = {
  [key: string]: string;
};
