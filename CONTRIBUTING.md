# Contributing to Xtra Computing Group Blog

Everyone is welcome to contribute! You don't need to be a member of Xtra Computing Group.

## Ways to Contribute

- Write a blog post about your research, a tutorial, or a technical note
- Fix typos or improve existing content
- Improve documentation

## How to Submit a Blog Post

1. **Fork** this repository and create a new branch.

2. **Create your post** in the `blog/` directory following the naming convention:

   ```
   blog/YYYY-MM-DD-your-post-title/index.md
   ```

3. **Add frontmatter** at the top of your post:

   ```md
   ---
   title: Your Post Title
   authors:
     - name: Your Name
       title: Your Role / Affiliation
       url: https://github.com/your-handle
       image_url: https://github.com/your-handle.png
   tags: [research, ml, systems]
   ---

   Brief summary of your post (shown in the post list).

   <!-- truncate -->

   Full content goes here...
   ```

4. **Add images** to the same directory as your `index.md` (e.g., `blog/2024-01-01-my-post/image.png`).

5. **Open a Pull Request** — the CI will automatically test that the site builds correctly.

6. Once approved and merged into `main`, GitHub Actions will deploy the site automatically.

## Local Development

```bash
npm install
npm start        # live preview at http://localhost:3000/blog/
npm run build    # production build
```

## Guidelines

- Keep posts focused and well-structured
- Include code examples where relevant
- Credit collaborators and cite related work
- Avoid sharing unpublished results without co-author approval

## Questions?

Open an issue or start a discussion on GitHub.
