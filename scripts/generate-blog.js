const fs = require('fs');
const path = require('path');

// Simple markdown to HTML converter
function markdownToHtml(markdown) {
    return markdown
        // Headers
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]*)\]\(([^\)]*)\)/gim, '<a href="$2">$1</a>')
        // Images
        .replace(/!\[([^\]]*)\]\(([^\)]*)\)/gim, '<img alt="$1" src="$2" class="blog-image">')
        // Paragraphs
        .replace(/\n\n/gim, '</p><p>')
        // Line breaks
        .replace(/\n/gim, '<br>');
}

// Extract metadata from markdown
function extractMetadata(content) {
    const metaRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(metaRegex);
    
    if (match) {
        const metaLines = match[1].split('\n');
        const metadata = {};
        
        metaLines.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length > 0) {
                metadata[key.trim()] = valueParts.join(':').trim().replace(/['"]/g, '');
            }
        });
        
        return {
            metadata,
            content: match[2]
        };
    }
    
    return {
        metadata: {},
        content
    };
}

// Generate HTML template
function generateBlogPost(metadata, content, filename) {
    const slug = filename.replace('.md', '');
    const title = metadata.title || 'Blog Post';
    const description = metadata.description || 'Blog post description';
    const date = metadata.date || new Date().toISOString().split('T')[0];
    const category = metadata.category || 'general';
    const image = metadata.image || 'assets/images/blog-default.jpg';
    
    const htmlContent = markdownToHtml(content);
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - GirlsBra Top</title>
    <meta name="description" content="${description}">
    <meta name="keywords" content="bra, ${category}, women's underwear, bra guide">
    <meta name="author" content="GirlsBra Top">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://girlsbra.top/blog/${slug}.html">
    <meta property="og:image" content="https://girlsbra.top/${image}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://girlsbra.top/blog/${slug}.html">
    
    <!-- Stylesheet -->
    <link rel="stylesheet" href="../css/style.css">
    
    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${title}",
        "description": "${description}",
        "image": "https://girlsbra.top/${image}",
        "author": {
            "@type": "Organization",
            "name": "GirlsBra Top"
        },
        "publisher": {
            "@type": "Organization",
            "name": "GirlsBra Top"
        },
        "datePublished": "${date}",
        "dateModified": "${date}"
    }
    </script>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="navbar container">
            <div class="logo">
                <a href="../index.html">GirlsBra Top</a>
            </div>
            <ul class="nav-menu">
                <li><a href="../index.html" class="nav-link">Home</a></li>
                <li><a href="../calculator.html" class="nav-link">Bra Size Calculator</a></li>
                <li><a href="../blog.html" class="nav-link">Blog</a></li>
                <li><a href="../about.html" class="nav-link">About</a></li>
                <li><a href="../contact.html" class="nav-link">Contact</a></li>
            </ul>
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">☰</button>
        </nav>
    </header>

    <!-- Article Content -->
    <article class="article">
        <div class="container">
            <header class="article-header">
                <h1 class="article-title">${title}</h1>
                <div class="article-meta">
                    <time datetime="${date}">${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    <span class="category">${category}</span>
                </div>
                <img src="../${image}" alt="${title}" class="article-image">
            </header>
            
            <div class="article-content">
                <p>${htmlContent}</p>
            </div>
            
            <footer class="article-footer">
                <div class="article-tags">
                    <span class="tag">${category}</span>
                </div>
                <div class="article-share">
                    <h4>Share this article:</h4>
                    <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=https://girlsbra.top/blog/${slug}.html" target="_blank" class="share-btn">Twitter</a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://girlsbra.top/blog/${slug}.html" target="_blank" class="share-btn">Facebook</a>
                </div>
            </footer>
        </div>
    </article>

    <!-- Related Articles -->
    <section class="section">
        <div class="container">
            <h2 class="section-title">Related Articles</h2>
            <div class="grid grid-3">
                <article class="card">
                    <img src="../assets/images/blog-1.jpg" alt="Best bras for small chest" class="card-image">
                    <div class="card-content">
                        <h3 class="card-title">Best Bras for Small Chest 2025</h3>
                        <p class="card-text">Discover the perfect bras that enhance and support smaller busts.</p>
                        <a href="best-bras-small-chest-2025.html" class="btn btn-outline">Read More</a>
                    </div>
                </article>
                
                <article class="card">
                    <img src="../assets/images/blog-2.jpg" alt="Wireless nursing bra" class="card-image">
                    <div class="card-content">
                        <h3 class="card-title">Wireless Nursing Bra Review</h3>
                        <p class="card-text">Find comfort and convenience with our top-rated wireless nursing bras.</p>
                        <a href="wireless-nursing-bra-review.html" class="btn btn-outline">Read More</a>
                    </div>
                </article>
                
                <article class="card">
                    <img src="../assets/images/blog-3.jpg" alt="How to measure bra size" class="card-image">
                    <div class="card-content">
                        <h3 class="card-title">How to Measure Your Bra Size</h3>
                        <p class="card-text">Step-by-step guide to measuring your bra size at home.</p>
                        <a href="how-to-measure-bra-size.html" class="btn btn-outline">Read More</a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>GirlsBra Top</h3>
                    <p>Empowering every woman to find her perfect fit. Your trusted source for bra guides, reviews, and expert advice.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="../calculator.html">Bra Size Calculator</a></li>
                        <li><a href="../blog.html">Blog</a></li>
                        <li><a href="../about.html">About Us</a></li>
                        <li><a href="../contact.html">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Legal</h3>
                    <ul class="footer-links">
                        <li><a href="../privacy.html">Privacy Policy</a></li>
                        <li><a href="../terms.html">Terms of Service</a></li>
                        <li><a href="../disclaimer.html">Disclaimer</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 GirlsBra Top. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="../js/script.js"></script>
</body>
</html>`;
}

// Main function
function generateBlogPosts() {
    const blogPostsDir = path.join(__dirname, '../blog-posts');
    const blogDir = path.join(__dirname, '../blog');
    
    // Create blog directory if it doesn't exist
    if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
    }
    
    // Read all markdown files
    if (!fs.existsSync(blogPostsDir)) {
        console.log('No blog-posts directory found. Creating example...');
        fs.mkdirSync(blogPostsDir, { recursive: true });
        
        // Create example markdown file
        const examplePost = `---
title: "How to Choose the Perfect Bra for Your Body Type"
description: "Complete guide to finding the right bra style for your unique body shape and size"
date: "2025-08-02"
category: "bra-guide"
image: "assets/images/blog-1.jpg"
---

# How to Choose the Perfect Bra for Your Body Type

Finding the perfect bra is more than just knowing your size. Your body type, lifestyle, and personal preferences all play important roles in selecting the right bra.

## Understanding Your Body Type

Every woman's body is unique, and understanding your body type can help you choose bras that provide the best fit and support.

### Full Bust

If you have a fuller bust, look for bras with:
- **Wide, padded straps** for comfort
- **Full coverage cups** for support
- **Underwire construction** for lift
- **Side support panels** to prevent spillage

### Small Bust

For smaller busts, consider:
- **Push-up bras** for enhanced cleavage
- **Padded or contour cups** for shape
- **Demi or balconette styles** for a flattering silhouette
- **T-shirt bras** for everyday wear

### Athletic Build

Athletic body types benefit from:
- **Sports bras** with high support
- **Wireless bras** for comfort
- **Seamless designs** under fitted clothing
- **Moisture-wicking fabrics** for active lifestyles

## Choosing the Right Style

Different occasions call for different bra styles:

### Everyday Wear
- T-shirt bras for smooth lines
- Wireless bras for comfort
- Convertible straps for versatility

### Special Occasions
- Push-up bras for enhanced cleavage
- Strapless bras for off-shoulder outfits
- Adhesive bras for backless dresses

### Active Lifestyle
- High-support sports bras
- Moisture-wicking materials
- Racerback designs for freedom of movement

## Final Tips

Remember these key points when shopping for bras:

1. **Get professionally fitted** at least once a year
2. **Try before you buy** - sizes vary between brands
3. **Invest in quality** - good bras last longer and provide better support
4. **Replace regularly** - bras lose elasticity over time
5. **Have variety** - different outfits need different bra styles

The perfect bra should feel comfortable, provide adequate support, and make you feel confident. Don't settle for anything less!`;
        
        fs.writeFileSync(path.join(blogPostsDir, 'perfect-bra-body-type.md'), examplePost);
        console.log('Created example blog post: perfect-bra-body-type.md');
    }
    
    const markdownFiles = fs.readdirSync(blogPostsDir).filter(file => file.endsWith('.md'));
    
    markdownFiles.forEach(file => {
        const filePath = path.join(blogPostsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        const { metadata, content: markdownContent } = extractMetadata(content);
        const htmlContent = generateBlogPost(metadata, markdownContent, file);
        
        const outputFile = path.join(blogDir, file.replace('.md', '.html'));
        fs.writeFileSync(outputFile, htmlContent);
        
        console.log(`Generated: ${file} -> ${path.basename(outputFile)}`);
    });
    
    console.log('Blog generation completed!');
}

// Run the script
generateBlogPosts();

