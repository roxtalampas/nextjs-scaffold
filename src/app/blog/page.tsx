import Image from "next/image";

const baseImagePath = "/assets/images/";

const featuredPosts = [
    {
        id: 1,
        title: "How to create a website",
        category: "Web Design",
        description: "Lorem ipsum dolor sit amet elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        author: "John Doe",
        readTime: "5",
    },
    {
        id: 2,
        title: "How to create a website",
        category: "Web Design",
        description: "Lorem ipsum dolor sit amet elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        author: "John Doe",
        readTime: "5",
    },
    
    {
        id: 3,
        title: "How to create a website",
        category: "Web Design",
        description: "Lorem ipsum dolor sit amet elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        author: "John Doe",
        readTime: "5",
    },
    {
        id: 4,
        title: "How to create a website",
        category: "Web Design",
        description: "Lorem ipsum dolor sit amet elit ut aliquam",
        image: `${baseImagePath}placeholder-img.png`,
        author: "John Doe",
        readTime: "5",
    },

]

// Split the featured posts into hero post and side posts
const heroPost = featuredPosts[0];
const sidePosts = featuredPosts.slice(1, 4); // takes items at index 1, 2, 3


const BlogPage = () => {
  return (
    <main className="blog-page">

        {/* Featured Blog Posts Section */}
        <section className="full-bleed featured-section">
            <div className="container">
                <h2>Featured Blog Posts</h2>
                <p className="mb-10">Lorem ipsum dolor sit amet elit ut aliquam</p>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                    <div className="hero-post-card col-span-3">
                        <Image src={heroPost.image} alt={heroPost.title} width={800} height={500} />
                        <div className="text-div py-4">
                        <div className="category-div py-1 px-2 mb-2">
                            <span className="tag-small">{heroPost.category}</span>
                        </div>
                        <h4 className="mb-2">{heroPost.title}</h4>
                        <div className="author-div flex items-center gap-2">
                            <span>By {heroPost.author}</span>
                            <span className="dot">•</span>
                            <span>{heroPost.readTime} mins read</span>
                        </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 col-span-2">
                        {sidePosts.map((post) => (
                        <div key={post.id} className="side-post-card flex gap-4">
                            <Image src={post.image} alt={post.title} width={150} height={150} />
                            <div className="text-div py-2">
                            <div className="category-div py-1 px-2 mb-2">
                                <span className="tag-small">{post.category}</span>
                            </div>
                            <h5 className="mb-2">{post.title}</h5>
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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {
                    featuredPosts.map((post) => (
                        <div key={post.id} className="blog-card blog-post-item">
                            <Image src={post.image} alt={post.title} width={500} height={500} />
                            <div className="text-div py-4">
                                <div className="category-div py-1 px-2 mb-2">
                                    <span className="tag-small">{post.category}</span>
                                </div>
                            </div>
                            <h4 className="mb-2">{post.title}</h4>
                            <p className="mb-6">{post.description}</p>
                            <div className="author-div flex items-center gap-2">
                                <span>By {post.author}</span>
                                <span className="dot">•</span>
                                <span>{post.readTime} mins read</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </section>
    </main>
  )
}

export default BlogPage