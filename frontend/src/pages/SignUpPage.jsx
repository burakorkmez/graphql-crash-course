import { useState } from "react";
import { Link } from "react-router-dom";
import RadioButton from "../components/RadioButton";
import InputField from "../components/InputField";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations/user.mutation";
import toast from "react-hot-toast";

const SignUpPage = () => {
	const [signUpData, setSignUpData] = useState({
		name: "",
		username: "",
		password: "",
		gender: "",
	});

	const [signup, { loading }] = useMutation(SIGN_UP, {
		refetchQueries: ["GetAuthenticatedUser"],
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signup({
				variables: {
					input: signUpData,
				},
			});
		} catch (error) {
			console.error("Error:", error);
			toast.error(error.message);
		}
	};

	const handleChange = (e) => {
		const { name, value, type } = e.target;

		if (type === "radio") {
			setSignUpData((prevData) => ({
				...prevData,
				gender: value,
			}));
		} else {
			setSignUpData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};

	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='flex rounded-lg overflow-hidden z-50 bg-gray-300'>
				<div className='w-full bg-gray-100 min-w-80 sm:min-w-96 flex items-center justify-center'>
					<div className='max-w-md w-full p-6'>
						<h1 className='text-3xl font-semibold mb-6 text-black text-center'>Sign Up</h1>
						<h1 className='text-sm font-semibold mb-6 text-gray-500 text-center'>
							Join to keep track of your expenses
						</h1>
						<form className='space-y-4' onSubmit={handleSubmit}>
							<InputField
								label='Full Name'
								id='name'
								name='name'
								value={signUpData.name}
								onChange={handleChange}
							/>
							<InputField
								label='Username'
								id='username'
								name='username'
								value={signUpData.username}
								onChange={handleChange}
							/>

							<InputField
								label='Password'
								id='password'
								name='password'
								type='password'
								value={signUpData.password}
								onChange={handleChange}
							/>
							<div className='flex gap-10'>
								<RadioButton
									id='male'
									label='Male'
									name='gender'
									value='male'
									onChange={handleChange}
									checked={signUpData.gender === "male"}
								/>
								<RadioButton
									id='female'
									label='Female'
									name='gender'
									value='female'
									onChange={handleChange}
									checked={signUpData.gender === "female"}
								/>
							</div>

							<div>
								<button
									type='submit'
									className='w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
									disabled={loading}
								>
									{loading ? "Loading..." : "Sign Up"}
								</button>
							</div>
						</form>
						<div className='mt-4 text-sm text-gray-600 text-center'>
							<p>
								Already have an account?{" "}
								<Link to='/login' className='text-black hover:underline'>
									Login here
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
