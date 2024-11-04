import { Box, Container, HStack, VStack } from "@chakra-ui/react"
import { ExcelDropzone, ExcelRow } from "../excel-dropzone"
import { H1, H2 } from "@northlight/ui"
import React, { useEffect, useState } from "react"
import Users from '../component/Users.js';
import AddUserAndScore from "../component/form";
import { SubmitHandler } from 'react-hook-form'
import useGetUsers from "../util/useGetUsers";
import { AddUserScore, Score, Player } from "../userScores.interface";
import ScoresDefault from "../scores";
import UsersDefault from "../users";

export default function Home() {

  const { player, playerScore, loading, error } = useGetUsers(UsersDefault, ScoresDefault);
  const [players, setPlayers] = useState<Player[]>([]);
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    if (Object.keys(player).length > 0) {
      console.log('users: ', player);
      console.log('scores: ', scores);
      setPlayers(player);
      setScores(playerScore);
    }
  }, [player, playerScore]);

  function handleSheetData(data: ExcelRow[]) {
    // replace this log with actual handling of the data
    console.log(data);
    setPlayers(data);
    setScores(data);
  }

  const onSubmit: SubmitHandler<AddUserScore> = (data) => {
    console.log('data', data);
    
    setPlayers((prevPlayers) => {
      const existingPlayer = prevPlayers.find((player) => player.name === data.name);

      if (existingPlayer) {
        setScores((prevScores) => [
          ...prevScores,
          { userId: existingPlayer._id, score: data.score }
        ]);
        return prevPlayers
      } else {
        const newPlayer: Player = {
          _id: prevPlayers.length + 1,
          name: data.name
        };
        setScores((prevScores) => [
          ...prevScores,
          { userId: newPlayer._id, score: data.score }
        ]);
        return [...prevPlayers, newPlayer];
      }
    });
    
  };

  const useUserScores = players.map((user) => {
    const score = scores.filter((score) => score.userId === user._id).map((score) => score.score);
    const latestScore = score.length > 0 ? Math.max(...score) : null;
    return {
      ...user,
      score: latestScore,
    };
  }).sort((a, b) => (b.score || 0) - (a.score || 0));

  return (
    <Container maxW="6xl" padding="4">
      <H1 marginBottom="4" >Mediatool exercise</H1>
      <HStack spacing={10} align="flex-start">
        <ExcelDropzone
          onSheetDrop={handleSheetData}
          label="Import excel file here"
        />
        <VStack align="left">
          <Box>
            <H2>Initial site</H2>
            <AddUserAndScore onSubmit={onSubmit}></AddUserAndScore>
          </Box>
          <Box>
          <Users useUserScores={useUserScores}></Users>
          </Box>
        </VStack>
      </HStack>
    </Container>
  )
}
