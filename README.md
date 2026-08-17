# Chat Relay — Phase 0

Single-instance WebSocket chat server. No Redis yet, no second server yet.
The whole point of this phase is to have something *working* before we
deliberately break it in Phase 1.

## Run it

```bash
bun install
bun run dev
```

You should see:
```
Chat Relay listening on ws://localhost:3000
```

## Test it

Open `test-client.html` in **two separate browser tabs** (just double-click
the file, or serve it with any static server).

- Tab 1: user = `user1`, room = `lobby`, click Connect
- Tab 2: user = `user2`, room = `lobby`, click Connect
- Type a message in Tab 1 → it should appear in both tabs.

## Phase 0 milestone (what "done" looks like)

- [ ] Two browser tabs, same room, messages from either tab appear in both.
- [ ] A "user joined" / "user left" system message appears when tabs connect/disconnect.
- [ ] You can explain, in your own words, exactly which line of `server.ts`
      would have no way of knowing about a message if this same code were
      running as a *second, separate* process (Phase 1 preview — don't fix
      it yet, just point at it).

Once that's solid, tell Claude and we move to Phase 1: running two instances
and watching it break on purpose.