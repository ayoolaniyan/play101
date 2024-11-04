import { Table, Tbody, Td, Th, Thead, Tr } from "@northlight/ui";
import React from "react";

interface Props {
  id?: number;
  name?: string;
  score: number | string;
}

export default function User({ id, name, score }: Props) {
  return (<>
    <Table variant="rounded">
      <Thead>
        <Tr>
          <Th fontWeight="bold"> Name</Th>
          <Th fontWeight="bold"> Scores</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr key={id}>
          <Td>{name}</Td>
          <Td>{score}</Td>
        </Tr>
      </Tbody>
    </Table>;
  </>
  )
}

