# Awesome Seedance 2.0 Prompts

An open, source-attributed collection of 113 reusable Seedance 2.0 video prompts exported from reviewed Image Prompt Gallery cases. Use the repository for structured data and agent workflows, and use the live gallery to inspect video results, adaptation guidance, and current source notes.

- Web gallery: https://imagepromptgallery.com/prompts
- Seedance 2.0 prompt library: https://imagepromptgallery.com/models/seedance-2-0/prompts
- Source and maintenance record: https://imagepromptgallery.com/sources/seedance-2-0-prompts
- Public API: https://imagepromptgallery.com/api/public/prompts?domain=video&model=seedance-2-0
- Upstream attribution: https://github.com/YouMind-OpenLab/awesome-seedance-2-prompts
- Open repository: https://github.com/Toolcentral-ai/awesome-seedance-2-0-prompts
- Prompt count: 113
- Generated at: `2026-06-28T17:47:13.446Z`
- Schema version: `2026-06-28`

Translations: [简体中文](README_zh.md) · [日本語](README_ja-JP.md) · [한국어](README_ko-KR.md) · [Deutsch](README_de-DE.md) · [Español](README_es-ES.md) · [Français](README_fr-FR.md) · [Português](README_pt-BR.md)

## Browse by Model and Topic Pack

- [Seedance 2.0 prompt library](https://imagepromptgallery.com/models/seedance-2-0/prompts)
- [Cinematic video prompts](https://imagepromptgallery.com/prompts/cinematic-video-prompts)
- [Product commercial video prompts](https://imagepromptgallery.com/prompts/product-commercial-video-prompts)
- [All curated prompt topics](https://imagepromptgallery.com/prompts)

## Browse by Category

- 定格动画: 63
- General video prompt: 17
- 2D 动画: 8
- UGC / 口播广告: 8
- 抽象 / VFX: 4
- 文字 / Logo: 4
- 游戏宣传片 / PV: 4
- Brand and product ads: 3
- Motion and action: 1
- Vlog / 生活记录: 1

Use `data/categories.json` for the complete machine-readable category index.

## Featured Prompts

No featured prompts are exported in `data/featured-prompts.json` yet. Browse the [cinematic](https://imagepromptgallery.com/prompts/cinematic-video-prompts) and [product commercial](https://imagepromptgallery.com/prompts/product-commercial-video-prompts) packs for reviewed selections with live case links. Featured repository entries will only be added when their public media and source records are stable.

## Data Files

- `data/seedance-2-0-prompts.json`: full open bundle.
- `data/categories.json`: category index.
- `data/featured-prompts.json`: reviewed featured shortlist.
- `data/source-prompts.json`: public source handoff metadata.
- `schema/seedance-2-0-video-prompt.schema.json`: JSON schema.
- `skills/seedance-2-0-prompts/SKILL.md`: agent usage guide.
- `examples/read-prompts.mjs`: minimal Node reader.
- `docs/source-gallery.md`: category and source overview.

## JSON Schema and Public Fields

Validate the bundle with `schema/seedance-2-0-video-prompt.schema.json`. Top-level fields are `schemaVersion`, `generatedAt`, `source`, `count`, and `prompts`. Each prompt includes a public ID and slug, title, category and tags, model, domain, generation mode, prompt text, source attribution, and risk notice; duration and aspect ratio are included when known. Private review fields, GSC metrics, internal source URLs, ranking weights, and API credentials are intentionally excluded.

## Attribution, Opt-out, and Commercial Reuse

The bundle keeps upstream community attribution and uses a CC-BY-4.0 attribution posture only where the upstream source allows it. Commercial use still requires checking the original source, model-provider terms, brand and character IP, music and voice rights, location rights, and identifiable-person consent. To correct attribution or request removal, [open an issue](https://github.com/Toolcentral-ai/awesome-seedance-2-0-prompts/issues) with the public case URL and evidence.

## Contributing

Open an issue or pull request with a public source URL, attribution notes, model settings, and a short explanation of why the prompt is reusable. IPG production remains PostgreSQL; open-source contributions return through review instead of becoming runtime data automatically.

## 中文说明

本仓库提供从 Image Prompt Gallery 已审核公开 case 导出的 113 条 Seedance 2.0 视频提示词，并保留上游来源归因。结构化数据适合公开用户和 agent 使用；浏览真实视频结果、改写建议和当前来源记录，请访问 [Seedance 2.0 提示词库](https://imagepromptgallery.com/zh/models/seedance-2-0/prompts)。商用前仍需逐条检查原始授权、模型条款、品牌/IP、音乐、声音和肖像权。
