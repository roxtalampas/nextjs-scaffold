import Image from "next/image";
import BlogCard from "./BlogCard";

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
]

const BlogSection = () => {
  return (
    <section className="full-bleed blog-section">
        <div className="container">
            <div className="text-div flex flex-col items-center justify-center mb-10">
                <h2 className="text-center mb-6">Our Blog</h2>
                <p>Lorem ipsum dolor sit amet elit ut aliquam</p>
            </div>
            
            <div className="blog-posts-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blogPosts.slice(0, 3).map((blogPost) => (
                        <BlogCard key={blogPost.id} blogPost={blogPost} />
                    ))
                }

            </div>
        </div>
    </section>
  );
};

export default BlogSection;