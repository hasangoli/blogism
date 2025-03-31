import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AuthPage = () => {
	return (
		<section className="container py-8 flex justify-center">
			<Tabs defaultValue="logIn" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="logIn">ورود</TabsTrigger>
					<TabsTrigger value="signUp">ثبت نام</TabsTrigger>
				</TabsList>
				<TabsContent value="logIn">
					<LoginForm />
				</TabsContent>
				<TabsContent value="signUp">
					<RegisterForm />
				</TabsContent>
			</Tabs>
		</section>
	);
};

export default AuthPage;
