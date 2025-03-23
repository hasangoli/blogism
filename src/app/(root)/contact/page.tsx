import { ContactForm } from "@/components/contact-form";
import {
	Github,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	Youtube,
} from "lucide-react";

const socials = [
	{ icon: "instagram", url: "instagram.com" },
	{ icon: "youtube", url: "youtube.com" },
	{ icon: "linkedin", url: "linkedin.com" },
	{ icon: "github", url: "github.com" },
];

const socialIcon = (key: string) => {
	switch (key) {
		case "instagram":
			return <Instagram size={18} />;

		case "youtube":
			return <Youtube size={18} />;

		case "linkedin":
			return <Linkedin size={18} />;

		case "github":
			return <Github size={18} />;

		default:
			break;
	}
};

const ContactPage = () => {
	return (
		<section className="container py-12">
			<div className="flex flex-col items-center text-center mb-12">
				<p className="text-3xl font-bold mb-4">تماس با ما</p>
				<p>جهت ارتباط با ما لطفا پیام خود را ارسال فرمایید</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-10 items-start gap-8">
				<div className="md:col-span-3 sm:grid sm:grid-cols-2 md:grid-cols-1">
					<div className="mb-8">
						<h2 className="text-xl font-bold mb-4">اطلاعات تماس</h2>
						<ul className="flex flex-col gap-2">
							<li>
								<a href="#" className="flex items-center gap-x-2 text-sm">
									<Mail size={15} /> info@localhost.com
								</a>
							</li>
							<li>
								<a href="#" className="flex items-center gap-x-2 text-sm">
									<Phone size={15} className="transform -scale-x-100" /> 09123456789
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-xl font-bold mb-4">شبکه های اجتماعی</h2>
						<ul className="flex flex-wrap gap-x-3">
							{socials.map(social => (
								<li key={social.url}>
									<a href={social.url}>{socialIcon(social.icon)}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<ContactForm className="md:col-span-7"/>
			</div>
		</section>
	);
};

export default ContactPage;
