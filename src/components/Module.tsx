"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModuleProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Module = ({ title, children, className, delay = 0 }: ModuleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={cn(
                "terminal-border bg-background flex flex-col h-full",
                className
            )}
        >
            <div className="border-b border-border px-4 py-2 flex items-center justify-between bg-muted/10">
                <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 border border-border" />
                    <div className="w-1.5 h-1.5 border border-border" />
                    <div className="w-1.5 h-1.5 border border-border" />
                </div>
            </div>
            <div className="p-6 flex-1 overflow-auto">
                {children}
            </div>
        </motion.div>
    );
};
