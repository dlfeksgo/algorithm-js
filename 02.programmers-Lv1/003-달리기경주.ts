//https://school.programmers.co.kr/learn/courses/30/lessons/178871

export function solution(players: string[], callings: string[]) {
    const map = new Map();

    for (const [rank, player] of players.entries()) {
        map.set(player, rank);
    }

    for (const callName of callings) {
        const rank = map.get(callName);
        let temp = players[rank - 1];
        players[rank - 1] = players[rank];
        players[rank] = temp;

        map.set(callName, map.get(callName) - 1);
        map.set(players[rank], map.get(players[rank]) + 1);
    }
    return players;
}
