"use client";
import React from "react";
import { NavigationMenuMain } from "../nav";

const MainLayoutChild = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center">
            <NavigationMenuMain />
            <div>{children}</div>
        </div>
    );
};

export default MainLayoutChild;
