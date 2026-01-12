// articles-data.js
const articlesData = [
    {
        title: "Your Thoughts Are Physically Building Your Brain. Here's the Manual.",
        icon: "🧠",
        date: "2026-01-12",
        dateDisplay: "January 12, 2026",
        excerpt: "Discover how your thoughts literally reshape your brain's neural pathways...",
        url: "your-thoughts-are-building-your-brain.html",
        isNew: true
    },
    {
        title: "The Hammer: Are You Your Own Worst Enemy?",
        icon: "🔨",
        date: "2026-01-03",
        dateDisplay: "January 3, 2026",
        excerpt: "Ever feel like you're your own worst enemy?...",
        url: "the-hammer.html",
        isNew: false
    }
];

function getAllArticles() {
    return [...articlesData].sort((a, b) => new Date(b.date) - new Date(a.date));
}
```

### 2️⃣ 更新 `index.html`
用我上面生成的新代码替换你的 index.html

### 3️⃣ 以后添加新文章
**只需要改 `articles-data.js`**，在数组最上面加一条新记录就行了！

## 📁 最终文件结构
```
Buddhist-teachings/
├── index.html                              ← 首页（显示所有文章）
├── articles-data.js                        ← 文章数据（只改这个！）
├── your-thoughts-are-building-your-brain.html
├── the-hammer.html
├── sutras.html
├── reflections.html
├── videos.html
└── journal.html
