import Image from "next/image";

const baseImagePath = "/assets/images/";

const blogPosts = [
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
]

const BlogSection = () => {
  return (
    <section className="full-bleed blog-section">
        <div className="container">
            <div className="text-div flex flex-col items-center justify-center mb-10">
                <h2 className="text-center mb-6">Our Blog</h2>
                <p>Lorem ipsum dolor sit amet elit ut aliquam</p>
            </div>
            
            <div className="blog-posts-div grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    blogPosts.map((blogPost) => (
                        <div key={blogPost.id} className="blog-card blog-post-item">
                            <Image src={blogPost.image} alt={blogPost.title} width={500} height={500} />

                            <div className="text-div py-4">
                                <div className="category-div py-1 px-2 mb-2">
                                    <span className="tag-small">{blogPost.category}</span>
                                </div>
                                
                                <h4 className="mb-2">{blogPost.title}</h4>
                                <p className="mb-6">{blogPost.description}</p>

                                <div className="author-div flex items-center gap-2 mb-4">
                                    <span>{blogPost.author}</span>
                                    <span className="dot">•</span>
                                    <span>{blogPost.readTime} min read</span>

                                </div>
                                
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </section>
  );
};

export default BlogSection;