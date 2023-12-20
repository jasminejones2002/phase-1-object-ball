let games = null;
function gameObject() {
    games = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: [
                {
                    playerName: "Alan Anderson",
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1",
                },
                {
                    playerName :"Reggie Evans",
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7",
                },
                {
                    playerName:"Brook Lopez",
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15",
                },
                {
                    playerName: "Mason Plumlee",
                    number: "1",
                    shoe: "19", 
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5",
                },
                {
                    playerName: "Jason Terry",
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1",
                },
            ]
            },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: [
                {
                    playerName: "Jeff Adrien",
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2",
                },
                {
                    playerName: "Bismak Biyombo",
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10",
                },
                {
                    playerName: "DeSagna Diop",
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5",
                },
                {
                    playerName: "Ben Gordon", 
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0",
                },
                {
                    playerName: "Brendan Haywood",
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12",
                },
                ]
            },
        }
        console.log(games);
    }
gameObject();

function numPointsScored(playerName) {
    for (const team in games) { 
        for (const player of games[team].players) {
            if (player.playerName === playerName) {
                return parseInt(player.points);
            }
        }
    }
    return "Player's points not found";
}
console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
    for (const team in games) {
        for (const player of games[team].players) {
            if (player.playerName === playerName) {
                return parseInt(player.shoe);
            }
        }
    }
}
console.log(shoeSize("Alan Anderson"))

function teamColors(teamName) {
    for (let location in games) {
        if (games[location].teamName === teamName) {
            return games[location].colors;
        }
    }
}
console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    return [games.home.teamName, games.away.teamName];
}
console.log(teamNames());

function playerNumbers(playerName) {
    for (const team in games) {
        for (const player of games[team].players) {
            if (player.playerName === playerName) {
                return parseInt(player.number);
            }
        }
    }
}
console.log(playerNumbers("DeSagna Diop"));

function playerStats(playerName) {
    for (let team in games) {
        for (let player of games[team].players) {
            if (player.playerName === playerName) {
                return {
                    playerName: player.playerName,
                    number: player.number,
                    shoe: player.shoe,
                    points: player.points,
                    rebounds: player.rebounds,
                    assists: player.assists,
                    steals: player.steals,
                    blocks: player.blocks,
                    slamDunks: player.slamDunks,
                };
            }
        }
    }
}
console.log(playerStats("Bismak Biyombo"));

function bigShoeRebounds(games) {
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = null;
    for (const team in games) {
        for (const player of games[team].players) {
            if (player.shoe > largestShoeSize) {
                largestShoeSize = player.shoe;
                playerWithLargestShoeSize = player;
            }
        }
        if (playerWithLargestShoeSize === null) {
            return "No player found with a shoe size greater than 0";
        }
        return parseInt(playerWithLargestShoeSize.rebounds);
    }
}
console.log(bigShoeRebounds(games));