type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "My Recent Restaurant Adventures",
    date: "2025-10-12",
    description:
      "Since I have moved to San Luis Obispo, I've been exploring the local dining scene. Here are some the places I tried recently!",
    image: "/images/goshi_slo.jpg",
    imageAlt: "Table with various kinds of sushi",
    slug: "restaurant-ratings-reviews",
  },
  {
    title: "Stress Busters I’ve Tried Lately",
    date: "2025-10-13",
    description:
      "School can be stressful, which is why I have spent the last few months trying out different hobbies for stress relief. This is what I think of them!",
    image: "/images/kittens.jpg",
    imageAlt: "Three kittens sleeping in a pile together",
    slug: "stress-busters-review",
  },
];

// Function to iterate over the list of blogs and display them
function displayBlogs(blogList: Blog[]) {
  // Get the container where blogs will be displayed
  const blogContainer = document.getElementById("blog-container");
  // If the container doesn't exist, exit the function
  if (!blogContainer) return;

  // Loop through each blog
  blogList.forEach((blog) => {
    // Make a new div
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");

    // Create elements
    // Make title
    const title = document.createElement("h1");
    title.textContent = blog.title;

    // Make date
    const date = document.createElement("p");
    date.textContent = new Date(blog.date).toDateString();
    date.classList.add("blog-date");

    // Make image
    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    // Make description
    const description = document.createElement("p");
    description.textContent = blog.description;

    // Append children to put the pieces together
    blogDiv.appendChild(title);
    blogDiv.appendChild(date);
    blogDiv.appendChild(image);
    blogDiv.appendChild(description);

    // Add the blog post to the page
    blogContainer.appendChild(blogDiv);
  });
}

// Run it once the page is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayBlogs(blogs);
});
