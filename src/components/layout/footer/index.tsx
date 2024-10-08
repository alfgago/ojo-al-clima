import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";
import { FooterStyle } from "./FooterStyle";
import { Share } from "@/components";

export const Footer = ({ data }: any) => {

  const { menu, form } = data;

  return (
    <FooterStyle>
      <div className="form-container">
        <Form form={form} />
      </div>
      <div className="links-container">
        <div className="links-wrapper">
          <div className="logo">
            <Link href="/">
              <Image
                src="/logos/site-logo.svg"
                alt="Site Logo"
                width={200}
                height={200}
                data-aos="custom-fade-in" 
                data-aos-delay="300"
              />
            </Link>
            {/* <span>
              Publicado bajo una licencia libre. Usted
              es bienvenido a utilizar nuestro material
              para fines no comerciales, acreditando a
              "Ojo al Clima" con un link al artículo
              citado. Por favor consúltenos para
              utilizar el material para fines
              comerciales.
            </span> */}  
          </div>
          <div className="menu" data-aos="custom-fade-in" data-aos-delay="300">
            {menu?.items?.map((item: any, index: number) => (
              <div key={item.title} className="item">
                <span>{item.title}</span>
                <div className="childrens">
                  {item?.childrens?.map((child: any) => (
                    <Link key={child.title} href={child.url}>
                      <span>{child.title}</span>
                    </Link>
                  ))}
                </div>
                {/* Si es el último ítem, renderiza el componente SocialMedia */}
                {index === menu.items.length - 1 && <Share />}
              </div>
            ))}
          </div>
          <div className="logo-u" data-aos="custom-fade-in" data-aos-delay="300">
            <Image
              src="/logos/semanario-logo.png"
              alt="Logo Semanario"
              width={200}
              height={100}
            />
            <Image
              src="/logos/ucr-logo.png"
              alt="Logo UCR"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="credits-container">
        <div className="credits-wrapper">
          <span>
            Diseñado por:
          </span>
          <a target="_blank" href="https://5e.cr/">
            5e Creative Labs
          </a>
        </div>
      </div>
    </FooterStyle>
  );
};
