# GirlsBra Top Website

একটি সম্পূর্ণ ব্রা সাইজ ক্যালকুলেটর এবং গাইড ওয়েবসাইট যা GitHub এবং Vercel এর সাথে অটো ডিপ্লয়মেন্ট সাপোর্ট করে।

## ✨ ফিচারসমূহ

- 🧮 **ব্রা সাইজ ক্যালকুলেটর** - ইঞ্চি এবং সেন্টিমিটার সাপোর্ট
- 📱 **রেসপন্সিভ ডিজাইন** - সব ডিভাইসে কাজ করে
- 📝 **অটো ব্লগ সিস্টেম** - Markdown থেকে HTML জেনারেট
- 🚀 **Vercel ডিপ্লয়মেন্ট** - ফ্রি হোস্টিং
- 🔄 **GitHub Actions** - অটো আপডেট
- 🎨 **প্রফেশনাল ডিজাইন** - SEO অপটিমাইজড

## 📁 প্রজেক্ট স্ট্রাকচার

```
girlsbra-website/
├── assets/
│   └── images/          # সব ইমেজ ফাইল
├── blog-posts/          # Markdown ব্লগ পোস্ট
├── blog/               # জেনারেটেড HTML ব্লগ পোস্ট
├── css/                # CSS স্টাইল ফাইল
├── js/                 # JavaScript ফাইল
├── scripts/            # বিল্ড স্ক্রিপ্ট
├── .github/
│   └── workflows/      # GitHub Actions
├── index.html          # হোম পেজ
├── calculator.html     # ক্যালকুলেটর পেজ
├── blog.html          # ব্লগ ইনডেক্স
├── package.json       # Node.js dependencies
├── vercel.json        # Vercel কনফিগারেশন
└── README.md          # এই ফাইল
```

## 🚀 সেটআপ গাইড

### ১. GitHub রিপোজিটরি তৈরি

1. GitHub এ নতুন রিপোজিটরি তৈরি করুন
2. রিপোজিটরি নাম: `girlsbra-top-website`
3. Public রাখুন (ফ্রি Vercel এর জন্য)

### ২. কোড আপলোড

```bash
# লোকাল ডিরেক্টরিতে Git init
git init
git add .
git commit -m "Initial commit"

# GitHub রিপোজিটরি যুক্ত করুন
git remote add origin https://github.com/yourusername/girlsbra-top-website.git
git branch -M main
git push -u origin main
```

### ৩. Vercel ডিপ্লয়মেন্ট

1. [Vercel.com](https://vercel.com) এ সাইন আপ করুন
2. GitHub একাউন্ট দিয়ে লগইন করুন
3. "New Project" ক্লিক করুন
4. আপনার রিপোজিটরি সিলেক্ট করুন
5. Deploy ক্লিক করুন

### ৪. অটো ডিপ্লয়মেন্ট সেটআপ

Vercel স্বয়ংক্রিয়ভাবে GitHub এর সাথে কানেক্ট হবে। প্রতিবার কোড পুশ করলে অটো ডিপ্লয় হবে।

## 📝 নতুন ব্লগ পোস্ট যোগ করা

### ১. Markdown ফাইল তৈরি

`blog-posts/` ফোল্ডারে নতুন `.md` ফাইল তৈরি করুন:

```markdown
---
title: "আপনার ব্লগ পোস্টের টাইটেল"
description: "ব্লগ পোস্টের সংক্ষিপ্ত বিবরণ"
date: "2025-08-02"
category: "bra-guide"
image: "assets/images/your-image.jpg"
---

# আপনার ব্লগ পোস্টের টাইটেল

এখানে আপনার ব্লগ পোস্টের কন্টেন্ট লিখুন...

## সাবহেডিং

আরো কন্টেন্ট...
```

### ২. GitHub এ আপলোড

```bash
git add blog-posts/your-new-post.md
git commit -m "Add new blog post: your-new-post"
git push
```

### ৩. অটো জেনারেশন

GitHub Actions স্বয়ংক্রিয়ভাবে:
- Markdown ফাইল HTML এ কনভার্ট করবে
- `blog/` ফোল্ডারে রাখবে
- Vercel এ অটো ডিপ্লয় করবে

## 🖼️ ইমেজ ম্যানেজমেন্ট

### ইমেজ যোগ করা

1. `assets/images/` ফোল্ডারে ইমেজ রাখুন
2. ব্লগ পোস্টে ব্যবহার করুন:

```markdown
![Alt text](assets/images/your-image.jpg)
```

### ইমেজ অপটিমাইজেশন

- JPG ব্যবহার করুন ফটোর জন্য
- PNG ব্যবহার করুন গ্রাফিক্সের জন্য
- ফাইল সাইজ ১MB এর নিচে রাখুন
- রেটিনা ডিসপ্লের জন্য 2x সাইজ ব্যবহার করুন

## 🛠️ লোকাল ডেভেলপমেন্ট

### প্রয়োজনীয় সফটওয়্যার

- Node.js (v18+)
- Python 3
- Git

### লোকাল সার্ভার চালানো

```bash
# HTTP সার্ভার
npm run dev

# অথবা Python দিয়ে
python3 -m http.server 8000
```

### ব্লগ জেনারেট করা

```bash
npm run generate-blog
```

## 🔧 কাস্টমাইজেশন

### CSS স্টাইল পরিবর্তন

`css/style.css` ফাইলে CSS ভেরিয়েবল পরিবর্তন করুন:

```css
:root {
  --primary-color: #e91e63;
  --primary-light: #f8bbd9;
  /* আরো ভেরিয়েবল... */
}
```

### JavaScript ফাংশনালিটি

`js/script.js` ফাইলে নতুন ফিচার যোগ করুন।

## 📊 SEO অপটিমাইজেশন

ওয়েবসাইটে ইতিমধ্যে SEO অপটিমাইজেশন আছে:

- ✅ Meta tags
- ✅ Open Graph
- ✅ Schema.org structured data
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs

## 🔒 সিকিউরিটি

- HTTPS স্বয়ংক্রিয়ভাবে Vercel দিয়ে এনাবল
- কোন সেনসিটিভ ডেটা কোডে রাখবেন না
- Environment variables ব্যবহার করুন secrets এর জন্য

## 📈 অ্যানালিটিক্স

Google Analytics যোগ করতে চাইলে:

1. Google Analytics একাউন্ট তৈরি করুন
2. Tracking ID পান
3. HTML ফাইলগুলোতে tracking code যোগ করুন

## 🆘 সাপোর্ট

সমস্যা হলে:

1. GitHub Issues ব্যবহার করুন
2. Vercel ডকুমেন্টেশন দেখুন
3. কমিউনিটি ফোরাম ব্যবহার করুন

## 📄 লাইসেন্স

MIT License - ফ্রি ব্যবহার এবং মডিফিকেশনের জন্য।

---

**তৈরি করেছেন:** GirlsBra Top Team  
**আপডেট:** ২ আগস্ট, ২০২৫

