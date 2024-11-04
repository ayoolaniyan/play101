import { useEffect, useState } from "react";
import { Score, Player } from "../userScores.interface";


const useGetUsers = (names: Player[], scores: Score[]) => { 

    const [player, setPlayer] = useState<Player[]>([]);
    const [playerScore, setPlayerScore] = useState<Score[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const getPlayers = async () => {
            setLoading(true)
            try {
                setPlayer(names);
                setPlayerScore(scores);
            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }        
        }
        getPlayers();
    }, [])

    return { player, playerScore, loading, error }
}

export default useGetUsers;
