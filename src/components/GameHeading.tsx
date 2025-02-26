import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let headerText = '';
  if (gameQuery?.platform) headerText += gameQuery.platform.name + ' ';
  if (gameQuery?.genre) headerText += gameQuery.genre.name + ' ';
  headerText += 'Games';
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {headerText}
    </Heading>
  );
};

export default GameHeading;
