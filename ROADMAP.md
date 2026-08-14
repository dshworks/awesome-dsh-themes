# Roadmap: easier theme install

This is a plan, not a shipped CLI.

Today the real command is already:

```sh
dsh plugin --profile web add github:owner/repo
```

The gallery and each README entry show that one-liner (derived from repo, or from an optional install field).

## Proposal

1. Alias in dsh: theme add owner/repo expands to the real plugin add command. It would live in the harness, not this repo.
2. Optional npx wrapper that reads this registry and runs the real plugin command. Do not invent a second installer.
3. Copy button on each gallery card and the full-page live preview (this change).
4. Registry install field: optional override when the derived one-liner is wrong. The schema has the field; most entries derive github:owner/repo.

Until dsh grows the alias, copy the one-liner. Keep this a plan, not a fake CLI.

