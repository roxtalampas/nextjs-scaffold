import Link from "next/link"
import Image from "next/image"

const BlogCard = ({ blogPost }: { blogPost: { id: number, slug: string, title: string, category: string, description: string, image: string, author: string, readTime: string } }) => {
  return (
    <div key={blogPost.id} className="blog-card blog-post-item">
                            <Link href={`/blog/${blogPost.slug}`}>
                                <Image src={blogPost.image} alt={blogPost.title} width={500} height={500} />
                            </Link>
                            <div className="text-div py-4">
                                <div className="category-pill py-1 px-2 mb-2">
                                    <span className="tag-small">{blogPost.category}</span>
                                </div>
                            </div>
                            <Link href={`/blog/${blogPost.slug}`}>
                                <h4 className="mb-2">{blogPost.title}</h4>
                            </Link>
                            <p className="desc mb-6">{blogPost.description}</p>
                            <div className="author-div flex items-center gap-2">
                                <span>By {blogPost.author}</span>
                                <span className="dot">•</span>
                                <span>{blogPost.readTime} mins read</span>
                            </div>
                        </div>
  )
}

export default BlogCard