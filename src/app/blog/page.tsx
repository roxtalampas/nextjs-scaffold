import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/shared/components/BlogCard";

const baseImagePath = "/assets/images/";

const featuredPosts = [
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

// Split the featured posts into hero post and side posts
const heroPost = featuredPosts[0];
const sidePosts = featuredPosts.slice(1, 5); // takes items at index 1, 2, 3, 4


const BlogPage = () => {
  return (
    <main className="blog-page">

        {/* Featured Blog Posts Section */}
        <section className="full-bleed featured-section">
            <div className="container">
                <h2>Featured Blog Posts</h2>
                <p className="mb-10">Lorem ipsum dolor sit amet elit ut aliquam</p>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-8 lg:gap-16">
                    <div className="hero-post-card col-span-3">
                        <Link href={`/blog/${heroPost.slug}`}>
                            <Image src={heroPost.image} alt={heroPost.title} width={800} height={500} />
                        </Link>
                        <div className="text-div py-4">
                        <div className="category-pill py-1 px-2 mb-2">
                            <span className="tag-small">{heroPost.category}</span>
                        </div>
                        <Link href={`/blog/${heroPost.slug}`}>
                            <h4 className="mb-2">{heroPost.title}</h4>
                        </Link>
                        <div className="author-div flex items-center gap-2">
                            <span>By {heroPost.author}</span>
                            <span className="dot">•</span>
                            <span>{heroPost.readTime} mins read</span>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 col-span-2">
                        {sidePosts.map((post) => (
                        <div key={post.id} className="side-post-card flex flex-col md:flex-row gap-4 md:items-start">
                            <div className="image-div">
                                <Link href={`/blog/${post.slug}`}>
                                    <Image src={post.image} alt={post.title} width={150} height={150} />
                                </Link>
                            </div>
                            <div className="text-div py-2">
                            <div className="category-pill py-1 px-2 mb-2">
                                <span className="tag-small">{post.category}</span>
                            </div>
                            <Link href={`/blog/${post.slug}`}>
                                <h5 className="mb-2">{post.title}</h5>
                            </Link>
                            <div className="author-div flex items-center gap-2">
                                <span>By {post.author}</span>
                                <span className="dot">•</span>
                                <span>{post.readTime} mins read</span>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>

                </div>     
            </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="full-bleed blog-section">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    featuredPosts.map((post) => (
                        <BlogCard key={post.id} blogPost={post} />
                    ))
                }
            </div>
            </div>
        </section>
    </main>
  )
}

export default BlogPage