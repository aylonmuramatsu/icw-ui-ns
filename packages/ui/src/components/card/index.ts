import { CardBase } from './card-base';
import { CardBody } from './card-body';
import { CardFooter } from './card-footer';
import { CardHeader } from './card-header';
import { CardImage } from './card-image';

type CardType = typeof CardBase & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
  Image: typeof CardImage;
};

const Card = CardBase as CardType;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Image = CardImage;

export { Card };
