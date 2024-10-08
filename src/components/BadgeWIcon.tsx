interface BadgeWIconProps {
    children: React.ReactNode;
    name: string;
}

export function BadgeWIcon({ children, name }: BadgeWIconProps) {
    return (
        <div className="flex flex-col items-center m-3">
            {children}
            <p className="badge badge-neutral mt-2 text-sm whitespace-nowrap">
                {name}
            </p>
        </div>
    );
}
