import React from "react";
import { Link } from 'react-router-dom'
import { Table, Tbody, Td, Th, Thead, Tr } from "@northlight/ui";
import { AddUserScore } from "../userScores.interface";

interface Props {
    useUserScores: AddUserScore[];
}

export default function Users({ useUserScores }: Props) {

    return (
        <div className="flex flex-row">
            <div className="grid w-full grid-cols-charactersCards place-items-center gap-8 md:p-20">
                <div>
                    <Table variant="rounded">
                        <Thead>
                            <Tr>
                                <Th fontWeight="bold"> Name</Th>
                                <Th fontWeight="bold"> Scores</Th>
                                <Th fontWeight="bold"> Details</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {useUserScores.map((user) => (
                                <Tr key={user._id}>
                                    <Td>{user.name}</Td>
                                    <Td>{user.score}</Td>
                                    <Td><Link to={`/user/${user._id}`} className='btn btn-primary btn-details'>view details</Link>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
