# Overview Plan:

**Things To Do** :

```
[] : Environmental Setup.

Series:
1. Create agent side.
2. Create server side.
3. Create UI.
4. Create storage class
```

**Storage Structure**

```
Storage = {
  players: [
    {
      id,
      name,
      role,
      batting_hand,
      bowling_hand,
      base_price
    }
  ],

  teams: [
    {
      id,
      name,
      purse
    }
  ],

  auction_results: [
    {
      player_id,
      team_id [null if UNSOLD],
      status [SOLD | UNSOLD],
      final_price
    }
  ]
}
```

# WorkFlow

**ActionStore**

```
1. Storage Init(Constructor of class 'AuctionStore')

2. getNextPlayerForAuction();
// returns player or null.

3. finalizePlayerAuction({player_id, team_id, status, final_prise})
// Pushes the input arguments into the history.
// returns true or false.
```

**server**

```
1. entryHandler(conn);
// Gate function for validating the entry and authentications.

2. auctionHandler()
// Starts auction as soon as all teams come.
```

**Validation**

```
1. authenticateTeam({teamName, pass});
// authenticates the team credentials.
// returns {status: 404 or 200}
```

**Agent**

```
1. readTeamCredentials();
// Calls the function of the UI, and sends the request to the server.
```
