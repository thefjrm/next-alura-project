import NextLink from "next/link";
import LinkEstilizado from "../../components/LinkEstilizado/index";

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <LinkEstilizado {...props}>{children}</LinkEstilizado>
    </NextLink>
  );
}
