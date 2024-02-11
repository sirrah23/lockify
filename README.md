# Lockify

Lockify is a simple web application that generates, and lets you keep track, of
locker codes.

Check it out [here](https://lockify.vercel.app/) (while supplies last).

## Background

I go to the gym often  🏋️️ and mine in particular has lockers that anyone can
use. You just have to punch in a code to lock your stuff. I like to use random
codes instead of using the same one all the time, but it's annoying to have to
divine a 4 digit code each time, and to then write it down somewhere so I don't
forget it. This app exists to facilitate this process.


## Technical stuff

### Implementation details

All codes are generated in the browser and all data is stored client-side. There
is no backend 🙀

### Technologies used
| Tech                          | Purpose             |
| ----------------------------- | ------------------- |
| [Svelte](https://svelte.dev/) | Frontend framework  |
| [Bulma](https://bulma.io/)    | CSS                 |
| [Dexie](https://dexie.org)    | Client-side storage |
| [Vercel](https://vercel.com/) | Deployment          |
| [Bun](https://bun.sh/)        | JavaScript runtime  |

### Developing

Install dependencies with `bun install`, start a development server:

```bash
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

### Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

## Adam's Code Jam

This code was created in early 2024 for [Adam's Code Jam](https://jam.adamlearns.com/).
