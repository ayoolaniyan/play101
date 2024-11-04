import React, { useEffect, useState } from "react"
import User from "../component/User"
import useGetUsers from "../util/useGetUsers";
import { Score, Player } from "../userScores.interface";
import { useParams } from 'react-router-dom';
import { Box, Container, HStack, VStack } from "@chakra-ui/react";
import { H1 } from "@northlight/ui";
import ScoresDefault from "../scores";
import UsersDefault from "../users";

type Params = {
  id: string;
}

export default function SingleUser() {
  const { id } = useParams<Params>();
  const userId = id ? +id : 0;

  const { player, playerScore, loading, error } = useGetUsers(UsersDefault, ScoresDefault);
  const [players, setPlayers] = useState<Player[]>([]);
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    if (Object.keys(player).length > 0) {
      console.log('users: ', player);
      console.log('scores: ', playerScore);
      setPlayers(player);
      setScores(playerScore);
    }
  }, [player]);

  const getUser = players.find((u) => u._id === userId);

  const score = scores.filter((score) => score.userId === userId).map((score) => score.score).join(',');

  return (
    <Container maxW="6xl" padding="4">
      <H1 marginBottom="4" >Mediatool exercise</H1>
      <HStack spacing={10} align="flex-start">
        <VStack align="left">
          <Box>
            {<User id={getUser?._id} name={getUser?.name} score={score}></User>}
          </Box>
        </VStack>
      </HStack>
    </Container>
  )
}
