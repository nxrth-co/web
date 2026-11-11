# Devlog: Cloudflare Pages Node 22 Upgrade & Wrangler Fix
**Date:** 2026-11-11  
**Author:** Antigravity Engineering  
**Mood:** 🛠️ Fixed the engine mismatch and ready to soar!

---

### What Happened & The Fix 🔍
When Cloudflare Pages started building our site with `pnpm@11.20.0`, it triggered an engine mismatch:
- `pnpm` version 11 requires Node.js `>=22.13.0` because it uses modern built-in Node modules like `node:sqlite`.
- Our `.nvmrc` was previously locking Node to `20.18.0`, which caused Corepack / pnpm to fail with `ERR_UNKNOWN_BUILTIN_MODULE: No such built-in module: node:sqlite`.
- In addition, `wrangler.toml` had `pages_build_output_dir = ".vercel/output/static"` instead of `.next`.

### Solution Applied:
1. Updated `.nvmrc` to `22.13.0`.
2. Updated `package.json` engines to `"node": ">=22.13.0"`.
3. Updated `wrangler.toml` to set `pages_build_output_dir = ".next"`.
4. Verified local build compiles cleanly.
5. Pushed immediately to GitHub `master` and `main` branches.

Now Cloudflare Pages will spin up Node.js 22.13.0 with full `node:sqlite` support, allowing `pnpm 11` to install and build with zero friction! 🚀

