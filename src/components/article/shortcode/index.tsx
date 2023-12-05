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

const handlers = [
  {
    detect: (html: string) => html.includes("[box]"),
    transform: (html: string) => html.replace(/\[box\]|\[\/box\]/g, ''),
    className: 'old-box'
  },
  {
    detect: (html: string) => html.includes("iframe"),
    transform: (html: string) => { return html; },
    className: 'iframe-container'
  }
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

interface ShortcodeProps {
  data: {
    innerHTML: string;
  };
}
 