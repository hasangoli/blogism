import { FeaturedBlogs } from "@/components/home/featured-blogs";
import { Hero } from "@/components/home/hero";
import LatestBlogs from "@/components/home/latest-blogs";

const HomePage = () => {
	return (
		<>
			<Hero />
			<FeaturedBlogs />
			<LatestBlogs />
		</>
	);
};

export default HomePage;
