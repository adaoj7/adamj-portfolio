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

interface BadgeWIconMobileProps {
    children: React.ReactNode;
    name: string;
}

export function BadgeWIconMobile({ children, name }: BadgeWIconMobileProps) {
    return (
        <div className="flex justify-center items-center flex-col m-3">
            {children}
            <p className="badge badge-neutral">{name}</p>
        </div>
    );
}
