import { Card as CardUI, Box, Flex } from "@radix-ui/themes";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import cn from "classnames";

import Typography from "../Typography";
import CardProps from "./Card.type";
import Image from "../Image";
import Link from "../Link/Link";

const Card = (props: CardProps) => {
  const { img, links, className, description } = props;

  return (
    <Box className={cn("w-full", className)}>
      <CardUI>
        <Flex className="inline-flex flex-col gap-6 sm:flex-row">
          <Image
            src={img.src}
            mobile={img.mobile}
            alt={img.alt}
            height={img.height}
            width={img.width}
          />
          <Box className="flex w-full flex-col gap-2">
            <Flex className="w-full gap-2">
              {links.map((link) => (
                <Link
                  className="block justify-self-end"
                  href={link.href}
                  target={link.target}
                  ariaLabel={`link to ${link.href}`}
                >
                  <ArrowTopRightIcon className="h-5.5 w-5.5 rounded-4xl border-2 border-gray-500 dark:border-white dark:text-white" />
                </Link>
              ))}
            </Flex>
            <Typography as="p">{description}</Typography>
          </Box>
        </Flex>
      </CardUI>
    </Box>
  );
};

export default Card;
