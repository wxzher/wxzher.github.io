# Personal Website

Minimal academic personal website for Xiaozhen Wu (巫小珍), built with plain HTML & CSS. Inspired by [Prof. Dr. Style](https://contemporary-home-computing.org/prof-dr-style/) and [Alexander Hoyle](https://alexanderhoyle.com/).

## Structure

```
personal-website/
├── index.html                  # Main page
├── blog/
│   └── index.html              # Blog listing page
└── assets/
    ├── css/
    │   └── simple.css          # Minimal stylesheet (~120 lines)
    └── img/
        └── prof_pic.jpg        # Profile photo (add yours)
```

## Setup

1. Add your profile photo as `assets/img/prof_pic.jpg`
2. Customize `index.html` with your latest publications and information
3. Add blog posts as individual HTML files under `blog/`

## Deployment (GitHub Pages)

```bash
# Create the GitHub Pages repo
git init
git add .
git commit -m "Personal academic website"
git remote add origin git@github.com:wxzher/wxzher.github.io.git
git push -u origin main
```

Then enable GitHub Pages in repo Settings → Pages → Source: main branch.

For a custom domain, add 4 A records pointing to:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
