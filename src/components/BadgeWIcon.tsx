import React from "react";

interface BadgeWIconProps {
    children: React.ReactNode;
    name: string;
}

export function BadgeWIcon({ children, name }: BadgeWIconProps) {
    return (
        <div className="flex flex-col items-center m-4">
            {children}
            <p className="badge badge-neutral mt-2">{name}</p>
        </div>
    );
}
