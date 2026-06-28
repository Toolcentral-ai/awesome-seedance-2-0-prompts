---
name: seedance-2-0-prompts
description: Find and adapt real Seedance 2.0 video prompts from the Image Prompt Gallery open bundle.
---

# Seedance 2.0 Prompts

Use this skill when a user asks for Seedance 2.0 video prompts, shot structure,
camera movement, duration/aspect-ratio suggestions, or source-attributed video
prompt examples.

## Workflow

1. Read `data/seedance-2-0-prompts.json`.
2. Match 1-3 prompts by scene, subject, action, camera movement, lighting,
   aspect ratio, duration, and `generationMode`.
3. Adapt the selected prompt to the user's subject without removing shot timing,
   motion, audio, or attribution context.
4. Return the final video prompt, shot notes, recommended `generationMode`,
   aspect ratio, duration, and source attribution.
5. Remind the user to check source rights before commercial use.

## 中文

当用户需要 Seedance 2.0 视频提示词、镜头结构、运镜、画幅、时长或带来源归因的视频案例时使用本 skill。

1. 读取 `data/seedance-2-0-prompts.json`。
2. 按场景、主体、动作、运镜、光线、画幅、时长和 `generationMode` 匹配 1-3 条真实 prompt。
3. 根据用户主题改写，但保留镜头节奏、动作、音效/配乐和归因语境。
4. 输出最终视频 prompt、镜头说明、推荐 `generationMode`、画幅、时长和来源归因。
5. 提醒商业使用前检查原始来源授权。
