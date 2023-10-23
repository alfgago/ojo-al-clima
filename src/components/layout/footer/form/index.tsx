import { useState } from "react";
import { FormStyle } from "./FormStyle"
import { useRouter } from "next/router";

export const Form = ({ form }: any) => {

  const { pathname } = useRouter();
  const fields = form.data[0].fields;

  const [errors, setErrors] = useState({
    nombre: false,
    email: false,
    mensaje: false,
  }) as any

  const clearError = (name: any) => {
    setErrors({ ...errors, [name]: false })
  }

  return (
    <FormStyle className={(pathname === "/contactenos" ? 'on-contact-page' : '')}>
      <div className="form-wrapper">
        <div className="title">
          {
            pathname === "/contactenos" ? (
              <h1>Contáctenos</h1>
            ) : (
              <h5>Contáctenos</h5>
            )
          }
        </div>
        <form
          action={""}
          method={"POST"}
          onSubmit={() => { }}
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
                      This field is required
                    </span>
                  )}
                </div>
              )
          )}
          <button className="btn-send" type="submit">
            Enviar
          </button>
        </form>
        <div className="meta-data">
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
