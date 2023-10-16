import Link from 'next/link'
import { LabelStyle } from './LabelStyle'

export const CategoryLabel = ({
  name,
  slug,
  color,
  type="normal"
}: LabelProps) => {
  
  return (
    <LabelStyle gradient={color}>
      <span className={`article-category ${type}`}>
        <Link href={slug}>
          {name}
        </Link>
      </span>
    </LabelStyle>
  )
}

type LabelProps = {
  name: string;
  slug: string;
  color: string;
  type?: "normal" | "circle";
};