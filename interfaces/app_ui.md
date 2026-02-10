# 🏏 Bid-Zone Auction CLI — UI Specification (Improved UX Version)

## ▶️ Start Command

```bash
deno -A client.js
```

# 🔌 Screen 0 — Server Connect

```
Connecting to Auction Server :8000 …
```

Result:

- ✅ Connected → Screen 1
- ❌ Failed →

```
Connection Failed

→ Retry
→ Exit
```

---

# 🚪 Screen 1 — Entry

```
Bid-Zone Auction

→ Join Auction
→ Rules
→ Exit
```

---

# 📜 Screen 1.1 — Rules (Compact)

```
Rules
-----
• Purse: 100
• Max players: 5
• Timed bidding
• Server controls increments
• No bid cancel

→ Back
```

---

# 🔐 Screen 2 — Team Login

```
Team Login

Team Name: ______
Password: ******
```

Result:

- ✅ Success → Screen 3
- ❌ Fail →

```
Invalid credentials

→ Retry
→ Back
```

---

# ⏳ Screen 3 — Waiting Lobby

```
Welcome Team <team-name>

Waiting for teams…

Joined: 3 / 4

• Alpha
• Beta
• <team-name>
```

---

# 🟢 Screen 4 — LIVE AUCTION (Primary Screen)

⚠️ This screen never changes layout — only values update.

## Header Bar (Always Visible)

```
TEAM: Phoenix | Purse: 64 | Players: 3/5 | Status: ELIGIBLE
```

---

## Player Card

```
────────────────────────
PLAYER ON AUCTION
────────────────────────
Name:   R Sharma
Role:   Batsman
Base:   12

Current Bid: 18
Leader: Team Alpha
Next Bid: 20

Time Left: 17s
────────────────────────
```

---

## Actions

```
→ PLACE BID (<bid-amount>)

──────── VIEW ────────
→ My Purchases
→ Purse Details
→ Auction History
```

---

## 🚫 Bid Disabled States

Button label changes:

```
PLACE BID — NOT ELIGIBLE
```

Reasons shown in banner:

- Purse too low
- Already highest bidder
- Player limit reached
- Timer expired
- Server locked

---

# ✅ Screen 4.1 — Bid Confirm (Modal Style)

Appears as interrupt screen — then returns to Live screen.

```
Confirm Bid
-----------
Player: R Sharma
Bid: 20
Purse After: 44

→ Confirm Bid
→ Cancel
```

Confirm → send → return to Live screen

---

# 👁 Screen 5 — My Purchases (Overlay View)

Overlay — not deep navigation.

```
My Purchases
------------

R Sharma   Bat   18
K Yadav    Bowl  14

Players: 2 / 5
Spent: 32

→ Back to Auction
```

---

# 💰 Screen 6 — Purse Overlay

```
Purse Status
------------

Start: 100
Spent: 36
Left: 64

Max Possible Bid: 64

→ Back to Auction
```

---

# 📜 Screen 7 — Auction History Overlay

Paginated overlay.

```
History
-------

#1 R Sharma SOLD Team A 18
#2 Root     UNSOLD
#3 Yadav    SOLD Team B 14

→ Back
```

---

# 🟡 Screen 8 — Player Result Modal

Auto popup between players.

## Sold

```
SOLD ✅
R Sharma → Team Alpha
Price: 22
```

## Unsold

```
UNSOLD ⚠️
No bids received
```

---

# 🏁 Screen 9 — Auction Complete

```
Auction Finished

Players: 5
Spent: 96
Left: 4

→ View Purchases
→ Exit
```

---
