import { notFound } from "next/navigation";
import Image from "next/image";
import BlogCard from "@/shared/components/BlogCard";

const baseImagePath = "/assets/images/";

const blogPosts = [
    {
        id: 1,
        slug: "the-future-of-web-design-trends-to-watch",
        title: "The Future of Web Design: Trends to Watch",
        category: "Web Design",
        description: "Explore the latest trends shaping the future of web design, from AI-driven layouts to immersive 3D experiences.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "Sarah Chen",
        readTime: "5",
    },
    {
        id: 2,
        slug: "building-scalable-applications-with-nextjs",
        title: "Building Scalable Applications with Next.js",
        category: "Development",
        description: "Learn how to architect Next.js applications that scale gracefully as your user base grows.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "James Rivera",
        readTime: "8",
    },
    {
        id: 3,
        slug: "ux-principles-every-developer-should-know",
        title: "UX Principles Every Developer Should Know",
        category: "UX Design",
        description: "Bridge the gap between development and design by mastering these essential user experience principles.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "Emily Nakamura",
        readTime: "6",
    },
    {
        id: 4,
        slug: "optimizing-website-performance-a-complete-guide",
        title: "Optimizing Website Performance: A Complete Guide",
        category: "Performance",
        description: "From lazy loading to code splitting, discover proven strategies to make your website lightning fast.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "David Kim",
        readTime: "10",
    },
    {
        id: 5,
        slug: "responsive-design-beyond-breakpoints",
        title: "Responsive Design: Beyond Breakpoints",
        category: "Web Design",
        description: "Modern responsive design goes beyond media queries. Learn fluid typography, container queries, and more.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "Sarah Chen",
        readTime: "7",
    },
    {
        id: 6,
        slug: "accessibility-first-building-inclusive-websites",
        title: "Accessibility First: Building Inclusive Websites",
        category: "Accessibility",
        description: "Why accessibility should be a priority from day one, and practical steps to make your site usable by everyone.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "Maria Santos",
        readTime: "6",
    },
    {
        id: 7,
        slug: "the-power-of-design-systems",
        title: "The Power of Design Systems",
        category: "Design",
        description: "How a well-structured design system can improve consistency, speed up development, and scale your brand.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "James Rivera",
        readTime: "9",
    },
    {
        id: 8,
        slug: "seo-strategies-for-modern-web-apps",
        title: "SEO Strategies for Modern Web Apps",
        category: "SEO",
        description: "Single-page apps and SEO don't have to be enemies. Learn techniques to boost your web app's search rankings.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "Emily Nakamura",
        readTime: "7",
    },
    {
        id: 9,
        slug: "the-future-of-web-design-trends-to-watch",
        title: "The Future of Web Design: Trends to Watch",
        category: "Web Design",
        description: "Explore the latest trends shaping the future of web design, from AI-driven layouts to immersive 3D experiences.",
        image: `${baseImagePath}placeholder-img.png`,
        author: "Sarah Chen",
        readTime: "5",
    },
];




const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) {
        notFound();
    }

    const sameCategoryPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category);

    const otherPosts = blogPosts
    .filter((p) => p.slug !== slug && p.category !== post.category);

    const relatedPosts = [...sameCategoryPosts, ...otherPosts].slice(0, 3);

    return (
        <main className="blog-post-page">
            
            {/* Hero Banner */}
            <section className="full-bleed hero-banner-section">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col">
                        <div className="category-pill py-1 px-2 mb-4">
                            <span className="tag-small">{post.category}</span>
                        </div>
                        <h1 className="mb-4">{post.title}</h1>
                        <div className="author-div flex items-center gap-2 mb-10">
                            <span>By {post.author}</span>
                            <span className="dot">•</span>
                            <span>{post.readTime} mins read</span>
                        </div>
                    </div>
                    <div className="image-div">
                        <Image src={post.image} alt={post.title} width={1200} height={600} />
                    </div>
                </div>
            </section>

            {/* Post Content */}
            <section className="full-bleed post-content-section">
                <div className="container">
                    <article className="post-content">
                        <p className="mb-6">
                            {post.description}
                        </p>
                        
                        <h5>Getting Started</h5>
                        <p className="mb-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        
                        <h5>Key Considerations</h5>
                        <p className="mb-6">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        
                        <h5>Best Practices</h5>
                        <ul className="mb-6">
                            <li>Focus on user experience above all else</li>
                            <li>Test across multiple devices and browsers</li>
                            <li>Optimize for performance from the start</li>
                            <li>Write clean, maintainable code</li>
                        </ul>
                        
                        <h5>Conclusion</h5>
                        <p className="mb-6">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </article>
                </div>
            </section>

            {/* Related Posts */}
            <section className="full-bleed related-posts-section">
                <div className="container">
                    <h2>Related Posts</h2>
                </div>
                <div className="related-posts-div grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    relatedPosts.map((relatedPost) => (
                        <BlogCard key={relatedPost.id} blogPost={relatedPost} />
                    ))
                }
                </div>
            </section>
        </main>
    );
};
export default BlogPostPage;