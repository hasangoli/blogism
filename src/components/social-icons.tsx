import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";

export const socialIcon = (key: string) => {
	switch (key) {
		case "twitter":
			return <Twitter size={20} />;

		case "linkedin":
			return <Linkedin size={20} />;

		case "facebook":
			return <Facebook size={20} />;

		case "instagram":
			return <Instagram size={20} />;

		case "telegram":
			return <Send size={20} />;

		default:
			break;
	}
};
