import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";



const SignUp = () => {
    const {createuser,updateUserProfile} = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()
    const onSubmit = (data) => { console.log(data) 
        createuser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.PhotoURL)
            .then(()=>{
                console.log('user profile info updated');
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "user created successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");
            })
            .catch(error => console.log(error))
        })
    };
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="name" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
                                {errors.PhotoURL && <span className="text-red-500">Photo URL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email",{ required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">password is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/


                                    })} name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className="text-red-600">This password required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">This password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">This password must be 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">This password must Uppercase LowerCase and special characters and Any sonkha</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign UP" />
                              
                            </div>
                        </form>
                        <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;