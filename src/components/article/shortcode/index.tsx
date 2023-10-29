import { ShortcodeStyle } from "./ShortcodeStyle";


const Shortcode = ({ data: { innerHTML } }: ShortcodeProps) => {
  const { customClass, processedHTML } = processContent(innerHTML);

  if (!customClass) return null;

  return (
    <ShortcodeStyle>
      <div
        className={`wp-content ${customClass}`}
        dangerouslySetInnerHTML={{
          __html: processedHTML,
        }}
      />
    </ShortcodeStyle>
  );
}
 
export default Shortcode;

interface ShortcodeProps {
  data: {
    innerHTML: string;
  };
}

const handlers = [
  {
    detect: (html: string) => html.includes("[box]"),
    transform: (html: string) => html.replace(/\[box\]|\[\/box\]/g, ''),
    className: 'old-box'
  }
  // Puedes agregar más handlers aquí en el futuro
];

const processContent = (html: string) => {
  for (const handler of handlers) {
    if (handler.detect(html)) {
      return {
        customClass: handler.className,
        processedHTML: handler.transform(html)
      };
    }
  }

  return { customClass: '', processedHTML: html };
}