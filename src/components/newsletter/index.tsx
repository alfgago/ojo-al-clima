import React, { useState } from "react"
import { NewsletterStyle } from "./NewsletterStyle"
import { contactFormAPI } from "@/pages/api/base"

export const Newsletter = ({ form }: any) => {
  const { id, fields } = form[0].data[0]

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
            message: "Tu suscripción ha sido recibida exitosamente",
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
    <NewsletterStyle>
      <div className="learn-colors">
        <div className="red"></div>
        <div className="purple"></div>
        <div className="blue"></div>
        <div className="yellow"></div>
      </div>
      <div className="form-wrapper">
        <div className="title">
          <h5>Suscríbase a nuestro boletín!</h5>
        </div>
        <div className="description">
          <span>
            Únase a nuestro boletín informativo para obtener las noticias y
            actualizaciones más recientes de Ojo al Clima.
          </span>
        </div>
        <form
          action={contactFormAPI(id)}
          method={"POST"}
          onSubmit={formSubmissionHandler}
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
                  ) : (
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
          <button className="btn-send" type="submit">
            Suscribirse
          </button>
          {formSubmission.show && (
            <span className={`form-request-message ${formSubmission.status}`}>
              {formSubmission.message}
            </span>
          )}
        </form>
      </div>
    </NewsletterStyle>
  )
}
