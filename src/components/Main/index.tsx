import { Container, Title, Description, Logo, Illustration } from "./styles";

type MainProps = {
  title?: string;
  description?: string;
};

export function Main({
  title = "React avançado",
  description = "Typescript, ReactJs, NextJs e Styled-Components"
}: MainProps) {
  return (
    <Container>
      <Logo src="/img/logo.svg" alt="React Avançado" />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela"
      />
    </Container>
  );
}
