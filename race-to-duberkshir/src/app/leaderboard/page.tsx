import { get } from 'http'
import { getScoreCardsData } from '../../../api/scoreCardsData'



const Leaderboard = async () => {
    const scoreCardsData = await getScoreCardsData()


    const playersInfo = scoreCardsData?.map((scoreCard) => {
        const playerName = scoreCard[0]
        // check to see if player has any scores
        if (scoreCard[1] === "#N/A") {
            return {
                playerName,
                topThreePlayerScores: [],
                playerTotalScore: 0
            }
        }

        // remove player name from scoreCard
        scoreCard.shift()
        // convert scoreCard to numbers
        const scoreCardNumbers = scoreCard.map((score) => parseInt(score))
        const playerScores: number[] =  scoreCardNumbers.sort((a, b) => b - a)
        const topThreePlayerScores = playerScores.slice(0, 3)
        const playerTotalScore = topThreePlayerScores.reduce((a, b) => a + b, 0)

        return {
            playerName,
            topThreePlayerScores,
            playerTotalScore
        }
    })

    const playersSortedByTotalScore = playersInfo?.sort((a, b) => b.playerTotalScore - a.playerTotalScore)

  return (
    <div>
    <div>Leaderboard</div>
    <div>
        {playersSortedByTotalScore?.map((player, index) => {
            return (
                <div className='flex flex-row items-center justify-between p-4'>
                    <div>{index + 1}</div>
                    <div>{player.playerName}</div>
                    <div>{player.playerTotalScore}</div>
                </div>
            )
        }
        )}
    </div>
    </div>
  )
}

export default Leaderboard