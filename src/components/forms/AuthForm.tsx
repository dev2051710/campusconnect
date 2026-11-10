"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useToast } from "@/components/ui/Toast";

const password = z.string()
  .min(8, "Use at least 8 characters")
  .regex(/[a-z]/, "Include a lowercase letter")
  .regex(/[A-Z]/, "Include an uppercase letter")
  .regex(/[0-9]/, "Include a number");

const loginSchema = z.object({ email: z.string().email("Enter a valid email"), password: z.string().min(1, "Password is required") });
const signupSchema = z.object({ fullName: z.string().trim().min(2, "Enter your full name").max(80), email: z.string().email("Enter a valid email"), password });

type Values = { fullName?: string; email: string; password: string };

const field = "mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-900";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const toast = useToast();
  const isSignup = mode === "signup";
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(isSignup ? signupSchema : loginSchema) as never,
  });

  // Phase 3 replaces this with Supabase auth calls.
  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 400));
    toast("Form is valid. Supabase authentication is connected in Phase 3.", "info");
  };

  return (
    <div className="relative grid min-h-screen place-items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/40">
      <div className="absolute right-4 top-4"><ThemeToggle /></div>
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <Logo />
        <h1 className="mt-6 text-2xl font-semibold tracking-tight">{isSignup ? "Create your account" : "Welcome back"}</h1>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{isSignup ? "Join CampusConnect as a student." : "Log in to continue to your dashboard."}</p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-4">
          {isSignup && (
            <div>
              <label className="text-sm font-medium" htmlFor="fullName">Full name</label>
              <input id="fullName" className={field} placeholder="Your name" {...register("fullName")} />
              {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
            </div>
          )}
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input id="email" type="email" className={field} placeholder="you@college.edu" {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium" htmlFor="password">Password</label>
            <input id="password" type="password" className={field} placeholder="••••••••" {...register("password")} />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>
          <button disabled={isSubmitting} className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 disabled:opacity-60">
            {isSubmitting ? "Please wait…" : isSignup ? "Create account" : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          {isSignup ? "Already have an account?" : "New to CampusConnect?"}{" "}
          <Link href={isSignup ? "/login" : "/signup"} className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">{isSignup ? "Log in" : "Sign up"}</Link>
        </p>
      </div>
    </div>
  );
}
