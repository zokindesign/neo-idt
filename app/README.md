# NEO-IDT Web App

The web application of the **NEO Inclusive Design Toolkit** — Vue 3 + TypeScript + Pinia + Vite.

It implements the toolkit's four-phase workflow:

| View | Phase | What it does |
|------|-------|--------------|
| `ExploreView` | Explore | Structured design-task profile → factor recommendation via activation rules |
| `DefineView` | Define | Confirm factors, bind metrics & target tiers → generate the **Inclusivity Boundary** (a commitment list: `factor × metric × tier`, no weighted scores) |
| `AuditView` | Audit | Item-by-item checklist generated from the boundary (automated / audit / user-test layers) |

The **Build** phase is supported by the knowledge base (`../knowledge/`) and its published wiki.

## Architecture notes

- **Local-first**: all project data is stored in the browser (IndexedDB via [Dexie](https://dexie.org)). No account required.
- **Optional cloud sync**: set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env.local` to enable a Supabase backend (auth + organizations + boundary-doc versioning). Without configuration the app is fully usable offline-first. (ADR-006: cloud-sync-first strategy, local as offline fallback.)
- **Rule engine**: activation (ACT) rules run in the frontend for instant feedback; inference chains (DEP/MOD/CNF/CMP) and audit logging run server-side in the SaaS tier. Both are built from the same rule schema (`../registry/rules.yaml`). (ADR-001)
- **Data pack**: `npm run build` / `node scripts/build-data.mjs` compiles `../registry/*.yaml` into `public/data/data-pack-<hash>.json` (content-hashed, cache-friendly; ADR-005). The app loads this pack at runtime, so the UI always reflects the registries.

## Develop

```bash
npm install
npm run dev        # start dev server
npm run build      # type-check + production build
npm run preview    # preview the production build

node scripts/build-data.mjs   # regenerate the data pack from ../registry
```

> The app reads its knowledge data exclusively from the generated data pack —
> to update factor/metric/rule content, edit `../registry/*.yaml`, regenerate,
> and rebuild. Guide and case data is compiled into the pack too; the UI
> currently surfaces factors, metrics, and standards, with guide/case views
> on the roadmap.

## i18n

Five locales ship out of the box: `zh-CN`, `zh-TW`, `en`, `ja`, `ko`.

- **UI chrome**: `src/i18n/` (`zh-CN.ts` is the authoritative source; `locales/{zh-TW,en,ja,ko}.ts` are overlay packs), loaded dynamically with zh-CN fallback.
- **Data layer**: translations live in registry overlays (`../registry/i18n/<lang>.yaml`) and are compiled into the data pack at build time — an entry whose id does not exist in the registries fails the build. The lookup chain is overlay → `*_en` inline fields → zh-CN authoritative source (`src/lib/kbtext.ts`), so the zh-CN content is never polluted.
- **Knowledge cards**: translated factor cards live in `../knowledge/i18n/<lang>/factors/`.
- **Exports**: the generated boundary document and acceptance report follow the UI language as well.

Translations are a low-friction contribution area — see the root [CONTRIBUTING.md](../CONTRIBUTING.md).
