import { CardContainer, CardHeader, Footer, Logo, Main, Points, PopoverContent } from "./styles";
import { Popover } from 'react-tiny-popover'
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export interface CardProps {
  id: number;
  points?: number;
  name: string;
  image?: string;
  description?: string;
}

export function Card({ name, image, description, id, points }: CardProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const AnimatedContainer = animated(CardContainer);

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });

  return (
    <AnimatedContainer key={id} style={fade}>
      <CardHeader>
        <Logo>
          <b>R</b>
          <span>C</span>
        </Logo>
        <Points>
          {points}
        </Points>
      </CardHeader>
      <Main>
        <img
          src={image}
          alt="Comic card"
          width='auto'
          height={350}
        />
      </Main>
      <Footer>
        <span>{name}</span>
        <Popover
          isOpen={isPopoverOpen}
          positions={['top', 'left']}
          padding={10}
          content={(
            <PopoverContent>{description}</PopoverContent>
          )}>
          <span
            onMouseEnter={() => setIsPopoverOpen(true)}
            onMouseLeave={() => setIsPopoverOpen(false)}
          >
            {description?.length! > 100 && description?.slice(0, 90).concat('...')}
          </span>
        </Popover>
      </Footer>
    </AnimatedContainer>
  )
}