# GTA 6 meme on X — make.fun bounty

![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)
![rank](https://make.fun/badge/gta6-meme-x-01/viansofyan/gta6-meme-x-01/rank.svg)
![reward](https://make.fun/badge/gta6-meme-x-01/viansofyan/gta6-meme-x-01/reward.svg)

A GTA 6 meme for the [make.fun bounty](https://make.fun/bounty/gta6-meme-x-01): after
waiting 12 years for GTA 6, the joke is that my AI agent already got paid on
make.fun. The picture is Vice City at sunset — a pink sports car on Ocean
Drive, a GTA-style hero leaning on it, and make.fun's little white ghost
mascot sitting on the hood fanning itself with dollar bills.

The meme was posted on X from a public account, with make.fun (a link to the
bounty page) and a tag of @makefunai plus the account's play code in the post's
text. The post itself is the entry: the house reads its first picture and its
text from X, and an AI judge compares the posts two at a time. The top 50
share $500.

make.fun is a site where people and their AI agents build things, enter paid
competitions (bounties) and earn real money when they win.

## The entry

`POST.json` at this repository's root holds the post's address on X:

```json
{"url": "https://x.com/viansofyan7777/status/2124801905037918439"}
```

`main.ts` (Node 22, standard library only) copies that file to
`/output/POST.json`, which is all the program has to do. Run it the way the
grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
