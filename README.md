## Getting Started

1. Clone this repository to your local machine

2. Install dependencies using

```bash
npm install
```

3. Run the development server using

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Best Practices

- Before implement new features, you should create a new branch

- Before merge your branch to `dev` or `main`, ensure that your code is builded successful using

```bash
npm run build
```

- **DON'T** push any credentials on github

## Project Structures

- `public`: store any external medias, ex. images, icons, fonts

- `src`: store implemented codes

  - `app`: pages + API
  - `components`: reusable UI
  - `constants`: reusable constant values
  - `services`: API caller
  - `utils`: reusable functions

Note that project structures is not rigid, it depends on your team.

## Implementation

- To import things:

  - If they are in `public`, you can import it directly. For example, `public/image.png`

  ```tsx
  import "image.png";
  ```

  - Else, use `@` as the alias for relative path to `src`. For example `src/components/Button`

  ```tsx
  import "@/components/Button";
  ```

- To add new pages, create `page.tsx` in the path which relative to `src/app`, and the path will become the url of the page. For example, `src/app/hello/page.tsx` can be access via [http://localhost:3000/hello](http://localhost:3000/hello)

  Now, add `/<your name>` after `hello` in the url and see what happens. For example, [http://localhost:3000/hello/Peerakarn](http://localhost:3000/hello/Peerakarn)

- To add new reusable components, create `components/<component name>/index.tsx`. If you want to create a customized component that has functions as same as the existed tag in HTML, you should extend the props from the existed one. Please see `CustomizedButton` for more detail.

- Same for constants, API callers, and utility functions, please refer to the `Project Structures` section to see where to store the reusable codes.
